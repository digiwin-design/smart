<template>
  <div class="Fullbegin">
    <div class="content">
      <div class="Fullbegin_screen"></div>
      <picture>
        <img src="@/assets/images/bgall.jpg" alt="" :height="this.$store.state.clientHeight" />
      </picture>
      <div class="Fullbegin_title">
        <h2>行業大數據透視</h2>
        <h1>中小企業管理能力分析</h1>
        <p>
          鼎新憑借近四十年累積的中小企業輔導經驗及大數據累計，透過同業競爭比較，從各個管理層面切入，剖析您未察覺的管理問題，讓您在數位轉型上領先同行，創造更大的商業價值。
        </p>
        <button class="Fullbegin_button" @click="TopicFT">開始分析</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fullbegin',
  methods: {
    TopicFT() {
      this.$store.state.industry = true;
      setTimeout(() => {
        this.$store.state.swiper0.slideTo(1);
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.Fullbegin {
  width: 100%;
  height: 100vh;
  background: #020c25;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    .Fullbegin_screen {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    picture {
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        object-fit: cover;
      }
    }
    .Fullbegin_title {
      font-size: calc(1vw + 1vh + 0.5vmin);
      max-width: 500px;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translateX(-5%)
        translateY(calc(-210px + (-315 - -210) * ((100vh - 625px) / (937 - 625))));
      h2 {
        font-size: calc(30px + (44 - 30) * ((100vh - 625px) / (937 - 625)));
        font-weight: lighter;
        color: #cefd14;
      }
      h1 {
        font-size: calc(36px + (50 - 36) * ((100vh - 625px) / (937 - 625)));
        font-weight: bold;
        color: #cefd14;
        margin: 0.4em 0 1em;
      }
      p {
        max-width: calc(310px + (460 - 310) * ((100vh - 625px) / (937 - 625)));
        font-size: calc(16px + (20 - 16) * ((100vh - 625px) / (937 - 625)));
        color: #fff;
        line-height: 1.5;
        margin: 0 0 50px;
      }
      .Fullbegin_button {
        width: 200px;
        height: 50px;
        border-radius: 5px;
        border: 0px;
        background: #ef1d78;
        font-size: 22px;
        color: #fff;
        letter-spacing: 3px;
        cursor: pointer;
      }
    }
  }
}
</style>
