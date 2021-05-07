<template>
  <div class="Waring" v-if="this.$store.state.warning === 'no'">
    未填寫資料
    <button class="Waring_button" @click="close">確定</button>
  </div>
</template>
<script>
export default {
  name: 'Warning',
  methods: {
    close() {
      this.$store.state.warning = '';
    },
  },
};
</script>
<style lang="scss">
.Waring {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 100px 150px;
  background: #d8d8d8;
  border-radius: 10px;
  .Waring_button {
    width: 100%;
    max-width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 0;
    background: #fff;
    font-size: 18px;
    margin: 30px 0 0;
    cursor: pointer;
  }
}
</style>
