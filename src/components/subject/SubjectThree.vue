<template>
  <div class="SubjectThree">
    <picture>
      <img src="@/assets/images/subjectthree.jpg" :height="this.$store.state.clientHeight" />
    </picture>
    <div class="container">
      <h1><img src="@/assets/images/icon3.png" alt="" /> 財務管理能力</h1>
      <h2>
        財務相關指標為管理階層做出經營決策的重要指標，而財務管理能力就影響到了報表產出的速度，以下針對成本結算及財務結帳兩大面向，衡量公司自身與同業相比，在財務管理能力上的差距。
      </h2>
      <swiper
        :slides-per-view="swiperoptions.slidesPerView"
        navigation
        @swiper="onSwiper"
        class="subject_slider swiper-no-swiping"
      >
        <swiper-slide class="subject_inputs">
          <h3>1. 請問貴公司通常何時能夠完成當月成本結算?</h3>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectthree[0].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectthree' + 0 + idx"
                :value="j.val"
                name="A10"
                @click="controlSingel($event)"
                @change="retainRecord()"
                v-model="this.$store.state.A10"
              />
              <label :for="'subjectthree' + 0 + idx">
                <div class="cris">
                  <div class="cris_cri">
                    <div class="cri1" :class="{ cri2: cri }"></div>
                    <div class="cri3" :class="{ cri4: cri }"></div>
                  </div>
                </div>
                {{ j.text }}
              </label>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="subject_inputs">
          <h3>2. 請問貴公司通常能夠何時完成當月財務結算?</h3>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectthree[1].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectthree' + 1 + idx"
                :value="j.val"
                name="A11"
                @click="controlSingel($event)"
                @change="retainRecord()"
                v-model="this.$store.state.A11"
              />
              <label :for="'subjectthree' + 1 + idx">
                <div class="cris">
                  <div class="cris_cri">
                    <div class="cri1" :class="{ cri2: cri }"></div>
                    <div class="cri3" :class="{ cri4: cri }"></div>
                  </div>
                </div>
                {{ j.text }}
              </label>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <button class="subject_button" @click="subject">我選好了</button>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue';
// swiper core
import SwiperCore, { Navigation } from 'swiper';

// swiper vue
import { Swiper, SwiperSlide } from 'swiper/vue';

// import swiper css
import 'swiper/swiper.scss';

// import css for components
// component SCSS not included in production build
// Solution swiper/components/pagination/package.json "sideEffects":true
// navigation
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);
export default {
  data() {
    return {
      cri: false,
      swiper: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // swiper相关配置属性放在swiperoptions这个变量里
    const swiperoptions = reactive({
      slidesPerView: 1,
    });
    // 将swiperoptions返回给模板中的swiper组件使用
    return { swiperoptions };
  },
  methods: {
    controlSingel($event) {
      window.setTimeout(() => {
        if (!this.changed) {
          // eslint-disable-next-line no-param-reassign
          $event.target.checked = false;
          this.pic = '';
        } else {
          this.cri = true;
        }
        this.changed = false;
      }, 0);
    },
    retainRecord() {
      this.changed = true;
    },
    subject() {
      const radios = document.getElementsByName(`A${this.$store.state.swiper3.activeIndex + 10}`);
      const lastradios = document.getElementsByName('A11');
      this.$store.state.inputname = radios;
      this.$store.state.flag = true;
      for (let i = 0; i < this.$store.state.inputname.length; i += 1) {
        if (this.$store.state.inputname[i].checked) {
          this.$store.state.swiper3.slideTo(this.$store.state.swiper3.activeIndex + 1);
          this.$store.state.flag = false;
          this.$store.state.threewidth += 50;
          break;
        }
      }
      if (this.$store.state.flag) {
        this.$store.commit('setWarning', 'no');
      }
      for (let j = 0; j < lastradios.length; j += 1) {
        if (lastradios[j].checked) {
          this.$store.state.start = 'SubjectFour';
          setTimeout(() => {
            this.$store.state.fourwidth += 50;
          }, 1000);
        }
      }
    },
    onSwiper(swiper) {
      this.$store.state.swiper3 = swiper;
    },
  },
};
</script>
<style lang="scss">
.SubjectThree {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  picture {
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      object-fit: cover;
      z-index: 1;
    }
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    h1 {
      font-size: 50px;
      color: #fff;
      padding: 0 0 50px 0;
    }
    h2 {
      width: 100%;
      max-width: 800px;
      font-size: 18px;
      color: #fff;
      line-height: 1.5;
      padding: 0 0 70px 0;
    }
    .subject_slider {
      display: flex;
      width: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        max-width: 800px;
      }
      .subject_inputs {
        margin: 0 0 35px 0;
        h3 {
          font-size: 26px;
          font-weight: bold;
          color: #fff000;
          padding: 0 0 15px 0;
        }
        .subject_input {
          display: flex;
          .subject_tpc {
            display: flex;
            margin: 0 10px 0 0;
            input[type='radio'] {
              display: none;
              & + label {
                display: flex;
                align-items: center;
                width: 100%;
                height: 45px;
                border: 1px dotted #fff;
                border-radius: 2px;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
                padding: 0 20px 0 0;
                .cris {
                  position: relative;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  padding: 8px;
                  .cris_cri {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    transition: all 0.3s;
                    .cri1 {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      width: calc(1rem - 8px);
                      height: calc(1rem - 8px);
                      border-radius: 100%;
                      transform: translate(-50%, -50%) scale(0);
                      transition-property: transform;
                      transition-duration: 700ms;
                      transition-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
                      background-color: rgb(255, 255, 255);
                    }
                    .cri3 {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      width: 100%;
                      height: 100%;
                      border-radius: 100%;
                      transform: translate(-51.5%, -51.5%) scale(0);
                      background: #fff;
                      opacity: 1;
                      transition: all cubic-bezier(0.78, 0.14, 0.15, 0.86) 0.7s;
                    }
                  }
                }
                &:hover {
                  .cris {
                    .cris_cri {
                      border: 2px solid rgba(255, 255, 255, 1);
                      transition: all 0.3s;
                    }
                  }
                }
              }
              &:checked + label {
                background: #7f0000;
                color: #fff;
                border: 1px solid #7f0000;
                .cris {
                  .cris_cri {
                    width: 16px;
                    height: 16px;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    transition: all 0.3s;
                    .cri2 {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      width: calc(1rem - 8px);
                      height: calc(1rem - 8px);
                      border-radius: 100%;
                      transform: translate(-50%, -50%) scale(1);
                      transition-property: transform;
                      transition-duration: 700ms;
                      transition-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
                      background-color: rgb(255, 255, 255);
                    }
                    .cri4 {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      width: 100%;
                      height: 100%;
                      border-radius: 100%;
                      transform: translate(-51.5%, -51.5%) scale(1);
                      background: #fff;
                      opacity: 0;
                      transition: all cubic-bezier(0.78, 0.14, 0.15, 0.86) 0.7s;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .subject_button {
      display: block;
      width: 150px;
      height: 45px;
      margin: 0 auto;
      background: #ffd800;
      border-radius: 4px;
      font-size: 20px;
      font-weight: bold;
      color: #000;
      border: 0;
      cursor: pointer;
    }
  }
}
</style>
