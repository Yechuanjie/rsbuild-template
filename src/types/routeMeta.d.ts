import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题 */
    title?: string
    /** 是否使用keep-alive模式 */
    keepAlive?: boolean
  }
}
