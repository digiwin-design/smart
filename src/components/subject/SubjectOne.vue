<template>
  <div class="SubjectOne">
    <picture>
      <img src="@/assets/images/subjectone.jpg" :height="this.$store.state.clientHeight" />
    </picture>
    <div class="container">
      <h1><img src="@/assets/images/icon1.png" alt="" /> 進銷存管理能力</h1>
      <h2>
        進銷存管理之於企業營運，關係到了企業的採購、銷售、庫存、財務、供應商和客戶管理，因此提升企業的進銷存管理能力，能夠提升作業效率、更有效的運用資金，
        以下透過五項關鍵指標，衡量公司自身與同業相比，在進銷存管理上的能力差距。
      </h2>
      <swiper
        :slides-per-view="swiperoptions.slidesPerView"
        @swiper="onSwiper"
        class="subject_slider swiper-no-swiping"
      >
        <swiper-slide class="subject_inputs">
          <h3>1. 請問貴公司平均需要幾天才能完成出、入庫資料輸入?</h3>
          <h4>出、入庫輸入完成天數=出、入庫資料輸入日期-實際出、入庫發生日期</h4>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectone[0].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectone' + 0 + idx"
                :value="j.val"
                name="A1"
                @click="controlSingel()"
                v-model="this.$store.state.A1"
              />
              <label :for="'subjectone' + 0 + idx">
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
          <h3>2. 請問貴公司的存貨週轉天數平均為幾天?</h3>
          <h4>
            存貨平均週轉天數 = 360天（或365天）/ 存貨周轉率<br />存貨周轉率 = 銷貨成本/ 平均存貨
          </h4>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectone[1].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectone' + 1 + idx"
                :value="j.val"
                name="A2"
                @click="controlSingel()"
                v-model="this.$store.state.A2"
              />
              <label :for="'subjectone' + 1 + idx">
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
          <h3>3. 請問貴公司的平均交貨天數為幾天?</h3>
          <h4>
            交貨天數 = 出貨日期-接單日期
          </h4>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectone[2].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectone' + 2 + idx"
                :value="j.val"
                name="A3"
                @click="controlSingel()"
                v-model="this.$store.state.A3"
              />
              <label :for="'subjectone' + 2 + idx">
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
          <h3>4. 請問貴公司的庫存呆滯率為何?</h3>
          <h4>
            庫存呆滯率 = 呆滯金額/庫存金額
          </h4>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectone[3].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectone' + 3 + idx"
                :value="j.val"
                name="A4"
                @click="controlSingel()"
                v-model="this.$store.state.A4"
              />
              <label :for="'subjectone' + 3 + idx">
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
          <h3>5. 請問貴公司人工計算用料的比例為何?</h3>
          <h4>
            人工計算用料比例 = 人工計算次數/接單備料總計算次數
          </h4>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectone[4].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectone' + 4 + idx"
                :value="j.val"
                name="A5"
                @click="controlSingel()"
                v-model="this.$store.state.A5"
              />
              <label :for="'subjectone' + 4 + idx">
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
          <h3>6. 請問貴公司的訂單準時達交率為何?</h3>
          <h4>
            訂單準時達交率 = 訂單準時交貨筆數/訂單應交貨筆數
          </h4>
          <div class="subject_input">
            <div
              class="subject_tpc"
              v-for="(j, idx) in this.$store.state.result.subjectone[5].topic"
              :key="j.text"
            >
              <input
                type="radio"
                :id="'subjectone' + 5 + idx"
                :value="j.val"
                name="A6"
                @click="controlSingel()"
                v-model="this.$store.state.A6"
              />
              <label :for="'subjectone' + 5 + idx">
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

// swiper vue
import { Swiper, SwiperSlide } from 'swiper/vue';

// import swiper css
import 'swiper/swiper.scss';

export default {
  data() {
    return {
      cri: false,
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
    controlSingel() {
      this.cri = true;
    },
    subject() {
      const radios = document.getElementsByName(`A${this.$store.state.swiper1.activeIndex + 1}`);
      const lastradios = document.getElementsByName('A6');
      this.$store.state.inputname = radios;
      this.$store.state.flag = true;
      for (let i = 0; i < this.$store.state.inputname.length; i += 1) {
        if (this.$store.state.inputname[i].checked) {
          this.$store.state.swiper1.slideTo(this.$store.state.swiper1.activeIndex + 1);
          this.$store.state.flag = false;
          this.$store.state.onewidth += 16.66666666666667;
          break;
        }
      }
      if (this.$store.state.flag) {
        this.$store.commit('setWarning', 'no');
      }
      for (let j = 0; j < lastradios.length; j += 1) {
        if (lastradios[j].checked) {
          this.$store.state.start = 'SubjectTwo';
        }
      }
    },
    onSwiper(swiper) {
      this.$store.state.swiper1 = swiper;
    },
  },
};
</script>
<style lang="scss">
.SubjectOne {
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
        h4 {
          font-size: 18px;
          color: #75fdff;
          padding: 0 0 50px 0;
          line-height: 1.3;
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
                padding: 0 40px 0 0;
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
                background: #1d59ae;
                color: #fff;
                border: 1px solid #1d59ae;
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
