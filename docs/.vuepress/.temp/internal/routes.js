export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/sunchuanwen/WebstormProjects/secywo-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"使用文档"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/sunchuanwen/WebstormProjects/secywo-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/sunchuanwen/WebstormProjects/secywo-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
