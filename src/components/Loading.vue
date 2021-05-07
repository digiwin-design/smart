<template>
  <div class="Loading">
    <div class="loading_circle">
      <div class="loading_cris">
        <!-- <img src="images/logo.png" alt="" width="173" height="57" /> -->
        <div class="loading_cri"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@keyframes Loading {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.Loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .loading_circle {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
    .loading_cris {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(1);
      backface-visibility: hidden;
      transform-origin: 0 0;
      img {
        display: block;
        margin: 0 auto;
      }
      .loading_cri {
        position: absolute;
        animation: Loading 1s linear infinite;
        width: 40px;
        height: 40px;
        top: 80px;
        left: 80px;
        border-radius: 50%;
        box-shadow: 0 2px 0 0 #de0010;
        transform-origin: 20px 21px;
        box-sizing: content-box;
      }
    }
  }
}
</style>
