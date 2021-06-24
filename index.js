const app = new Vue({
  el: "#app",
  data: {
    seen: false,
    message: "ハッキングを開始しました。"
  },
  methods: {
    move() {
      const se = new Audio("hack.mp3");
      se.play();
      this.seen = true;
      setTimeout(() => {
        this.message = "サーバーの位置を特定中...";
      }, 800);
      setTimeout(() => {
        this.message = "サーバーのパスワードを取得中...";
      }, 1600);
      setTimeout(() => {
        this.message = "【おとり用】ウィルスを送信中...";
      }, 2400);
      setTimeout(() => {
        this.message = "ウィルスの応答を待機中...";
      }, 3200);
      setTimeout(() => {
        this.message = "ウィルスが盗んだデータを解析中...";
      }, 4400);
      setTimeout(() => {
        this.message = "解析したデータをもとに安全を確認中...";
      }, 5400);
      setTimeout(() => {
        this.message = "サーバーに侵入中...";
      }, 6100);
      setTimeout(() => {
        location.href = "hack.htlm";
      }, 7000);
    }
  }
})