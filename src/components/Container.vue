<template>
  <!-- <div class="Container" :class="{ Conab: Conab }"> -->
  <div class="Container">
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="0"
      :mousewheel="true"
      :speed="800"
      :pagination="{ clickable: true }"
      class="swiper-no-swiping"
      @swiper="onSwiper"
    >
      <swiper-slide>
        <Fullbegin />
      </swiper-slide>
      <swiper-slide class="swiper-industry" v-if="this.$store.state.industry" key="industry">
        <Industry />
      </swiper-slide>
      <swiper-slide class="swiper-subject" v-if="this.$store.state.subject" key="subject">
        <Progress />
        <keep-alive>
          <component :is="this.$store.state.start"></component>
        </keep-alive>
      </swiper-slide>
    </swiper>
    <!-- <Progress v-if="this.$store.state.progress" /> -->
    <!-- <transition name="left"> -->
    <!-- <keep-alive>
      <component :is="this.$store.state.start"></component>
    </keep-alive> -->
    <!-- </transition> -->
  </div>
  <!-- </div> -->
</template>
<script>
import Fullbegin from '@/components/Fullbegin.vue';
import Industry from '@/components/Industry.vue';
import Progress from '@/components/Progress.vue';
import SubjectOne from '@/components/subject/SubjectOne.vue';
import SubjectTwo from '@/components/subject/SubjectTwo.vue';
import SubjectThree from '@/components/subject/SubjectThree.vue';
import SubjectFour from '@/components/subject/SubjectFour.vue';
// import Warning from '@/components/Warning.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

export default {
  name: 'Container',
  components: {
    Fullbegin,
    Industry,
    Progress,
    SubjectOne,
    SubjectTwo,
    SubjectThree,
    SubjectFour,
    // Warning,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      Conab: false,
    };
  },
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.Conab = true;
      }, 0);
    });
  },
  methods: {
    onSwiper(swiper) {
      this.$store.state.swiper0 = swiper;
    },
  },
};
</script>
<style lang="scss">
@keyframes moveToLeft {
  from {
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes moveFromRight {
  from {
    transform: translateX(100%);
  }
}
.Container {
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 100%;
        height: 100%;
      }
      .swiper-subject {
        background: #d8d8d8;
      }
    }
  }
  // .left-leave-active {
  //   -webkit-animation: moveToLeft 0.7s ease-in-out both;
  //   animation: moveToLeft 0.7s ease-in-out both;
  // }
  // .left-enter-active {
  //   -webkit-animation: moveFromRight 0.6s ease both;
  //   animation: moveFromRight 0.6s ease both;
  // }
  // .left-leave-to {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: 5;
  // }
  // .left-enter-to {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
  // &::after {
  //   content: '';
  //   width: 50vw;
  //   height: 100%;
  //   position: fixed;
  //   top: 0;
  //   background: #fff;
  //   z-index: 50;
  //   right: 0%;
  //   transform: translateX(0%);
  //   transition: all 0.4s ease-out;
  // }
  // &::before {
  //   content: '';
  //   width: 50vw;
  //   height: 100%;
  //   position: fixed;
  //   top: 0;
  //   background: #fff;
  //   z-index: 50;
  //   left: 0%;
  //   transform: translateX(0%);
  //   transition: all 0.4s ease-out;
  // }
  // &.Conab {
  //   &::after {
  //     transform: translateX(100%);
  //   }
  //   &::before {
  //     transform: translateX(-100%);
  //   }
  // }
}
</style>
