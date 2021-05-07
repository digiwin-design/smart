<template>
  <Suspense>
    <template #default>
      <Container />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent, onErrorCaptured } from 'vue';
import Loading from '@/components/Loading.vue';

const Container = defineAsyncComponent(() => import('@/components/Container'));

export default {
  name: 'App',
  components: {
    Container,
    Loading,
  },
  setup() {
    onErrorCaptured((error) => {
      console.log('其他的錯誤處理：', error);
    });
    return {};
  },
  created() {
    this.$store.dispatch('getData');
    this.$store.state.clientHeight = document.documentElement.clientHeight;
    window.addEventListener('resize', () => {
      this.$store.state.clientHeight = document.documentElement.clientHeight;
    });
  },
};
</script>

<style lang="scss">
@import 'assets/scss/reset.scss';

body::-webkit-scrollbar {
  display: none;
}
html,
body {
  position: relative;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
