import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginSass } from '@rsbuild/plugin-sass'
import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

console.info('process.env.PUBLIC_ENV', process.env.PUBLIC_ENV)
console.info('process.env.NODE_ENV', process.env.NODE_ENV)

export default defineConfig({
  html: {
    template: 'public/index.html'
  },
  source: {
    alias: {
      '@': './src'
    }
  },
  plugins: [
    pluginVue(),
    pluginSass({
      sassLoaderOptions: {
        additionalData: '@import "/src/assets/scss/variable.scss";'
      }
    })
  ],
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],
          imports: ['vue', 'vue-router', 'pinia'],
          dts: 'src/types/auto-imports.d.ts'
        }),
        Components({
          resolvers: [ElementPlusResolver()],
          dts: 'src/types/auto-components.d.ts'
        })
      ]
    }
  },

  dev: {
    // 启用 lazy compilation 可以显著减少开发启动时编译的模块数量，从而提升启动时间。
    lazyCompilation: true
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience'
    }
  },
  output: {
    // 开启 usage 方案时，Rsbuild 会分析项目中的源代码，并判断需要注入哪些 polyfill。
    polyfill: 'usage',
    // 如果是部署到服务器的某个子目录下，需要设置assetPrefix作为base路径
    // assetPrefix: '/game/',
    sourceMap: {
      js:
        process.env.NODE_ENV == 'development'
          ? // 开发模式开销最小的 eval 格式
            'eval'
          : // 生产模式使用（避免线上定位到源码，但代码监控又需要souremap来定位错误信息具体位置）
            'hidden-source-map'
    }
  }
})
