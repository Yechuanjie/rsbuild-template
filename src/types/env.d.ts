/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  // import.meta.env.PUBLIC_ENV
  readonly PUBLIC_ENV: string
  readonly PUBLIC_BASE_API: string
  readonly PUBLIC_BASE_API_CPA: string
  readonly PUBLIC_LOGIN_URL: string
  readonly PUBLIC_FAKAO_LINK: string
  readonly PUBLIC_FASHUO_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
