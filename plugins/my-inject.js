class MyInject {
  // nuxtのcontextを使用するには、constructor内で初期化する
  constructor (ctx) {
    this.app = ctx.app
  }

  // i18nページタイトル変換
  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }
}
// inject => オリジナルクラスを追加することができる
// export default (context, inject)
export default ({ app }, inject) => {
  // inject('呼び出し名', クラスのインスタンス(context))
  // 'my' => $my
  inject('my', new MyInject({ app }))
}
