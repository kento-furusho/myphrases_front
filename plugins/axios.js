export default ({ $axios }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    window.console.log(config)
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    window.console.log(config)
  })
  // エラーログ
  $axios.onError((e) => {
    window.console.log(e.response)
  })
}
