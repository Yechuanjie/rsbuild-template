/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly PUBLIC_ENV: string
  readonly PUBLIC_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
