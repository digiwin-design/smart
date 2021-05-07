<template>
  <div class="Progress">
    <div class="container">
      <ul class="Progress_ul">
        <li class="Progress_li">
          <div class="Progress_frame">
            <div class="Progress_liin"></div>
            <div class="Progress_pro" :style="{ width: this.$store.state.onewidth + '%' }"></div>
            <div class="Progress_text" :class="[this.$store.state.A1 === '' ? '' : 'colortext']">
              進銷存管理能力
            </div>
          </div>
          <div class="Progress_button">
            <button
              :disabled="this.$store.state.A1 === ''"
              :class="[this.$store.state.A1 === '' ? '' : 'colorspan']"
              @click="slideone($event, 0, 'SubjectOne')"
            >
              1
            </button>
            <button
              :disabled="this.$store.state.A2 === ''"
              :class="[this.$store.state.A2 === '' ? '' : 'colorspan']"
              @click="slideone($event, 1, 'SubjectOne')"
            >
              2
            </button>
            <button
              :disabled="this.$store.state.A3 === ''"
              :class="[this.$store.state.A3 === '' ? '' : 'colorspan']"
              @click="slideone($event, 2, 'SubjectOne')"
            >
              3
            </button>
            <button
              :disabled="this.$store.state.A4 === ''"
              :class="[this.$store.state.A4 === '' ? '' : 'colorspan']"
              @click="slideone($event, 3, 'SubjectOne')"
            >
              4
            </button>
            <button
              :disabled="this.$store.state.A5 === ''"
              :class="[this.$store.state.A5 === '' ? '' : 'colorspan']"
              @click="slideone($event, 4, 'SubjectOne')"
            >
              5
            </button>
            <button
              :disabled="this.$store.state.A6 === ''"
              :class="[this.$store.state.A6 === '' ? '' : 'colorspan']"
              @click="slideone($event, 5, 'SubjectOne')"
            >
              6
            </button>
          </div>
        </li>
        <li class="Progress_li">
          <div class="Progress_frame">
            <div class="Progress_liin"></div>
            <div class="Progress_pro" :style="{ width: this.$store.state.twowidth + '%' }"></div>
            <div class="Progress_text" :class="[this.$store.state.A7 === '' ? '' : 'colortext']">
              生產製造管理能力
            </div>
          </div>
          <div class="Progress_button">
            <span
              :class="[this.$store.state.A7 === '' ? '' : 'colorspan']"
              @click="slidetwo(0, 'SubjectTwo')"
              >1</span
            >
            <span
              :class="[this.$store.state.A8 === '' ? '' : 'colorspan']"
              @click="slidetwo(1, 'SubjectTwo')"
              >2</span
            >
            <span
              :class="[this.$store.state.A9 === '' ? '' : 'colorspan']"
              @click="slidetwo(2, 'SubjectTwo')"
              >3</span
            >
          </div>
        </li>
        <li class="Progress_li">
          <div class="Progress_frame">
            <div class="Progress_liin"></div>
            <div class="Progress_pro" :style="{ width: this.$store.state.threewidth + '%' }"></div>
            <div class="Progress_text" :class="[this.$store.state.A10 === '' ? '' : 'colortext']">
              財務管理能力
            </div>
          </div>
          <div class="Progress_button">
            <span
              :class="[this.$store.state.A10 === '' ? '' : 'colorspan']"
              @click="slidethree(0, 'SubjectThree')"
              >1</span
            >
            <span
              :class="[this.$store.state.A11 === '' ? '' : 'colorspan']"
              @click="slidethree(0, 'SubjectThree')"
              >2</span
            >
          </div>
        </li>
        <li class="Progress_li">
          <div class="Progress_frame">
            <div class="Progress_liin"></div>
            <div class="Progress_pro" :style="{ width: this.$store.state.fourwidth + '%' }"></div>
            <div
              class="Progress_text"
              :class="[this.$store.state.start === 'SubjectFour' ? 'colortext' : '']"
            >
              取得分析報告
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  methods: {
    slideone($event, idx, name) {
      this.$store.commit('updateStart', name);
      this.$store.state.swiper1.slideTo(idx);
    },
    slidetwo(idx, name) {
      this.$store.commit('updateStart', name);
      this.$store.state.swiper2.slideTo(idx);
    },
    slidethree(idx, name) {
      this.$store.commit('updateStart', name);
      this.$store.state.swiper3.slideTo(idx);
    },
  },
};
</script>

<style lang="scss">
.Progress {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  margin: 0 0 60px;
  .container {
    max-width: calc(1000px + (1200 - 1000) * ((100vh - 625px) / (937 - 625)));
    margin: 0 auto;
    .Progress_ul {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: calc(10px + (35 - 10) * ((100vh - 625px) / (937 - 625))) 0 0;
      .Progress_li {
        position: relative;
        padding: 0 0 13px;
        .Progress_frame {
          position: relative;
          width: 100%;
          height: calc(30px + (45 - 30) * ((100vh - 625px) / (937 - 625)));
          clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
          margin: 0 -22px 0 0;
          z-index: 20;
        }
        .Progress_liin {
          position: absolute;
          top: 1.5px;
          left: 2px;
          right: 1.5px;
          bottom: 1.5px;
          clip-path: polygon(0% 0%, 95% 0%, 99.6% 50%, 95% 100%, 0% 100%);
          background: #d8d8d8;
        }
        .Progress_pro {
          position: absolute;
          top: 1.5px;
          left: 1.5px;
          right: 1.5px;
          bottom: 1.5px;
          color: #b1b1b1;
          z-index: 5;
          transition: all 1s ease-in-out;
        }
        .Progress_text {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #b2b2b2;
          &.colortext {
            color: #fff;
          }
        }
        .Progress_button {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          display: flex;
          z-index: 25;
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 18px;
            height: 18px;
            background: #acacac;
            border-radius: 50%;
            color: #fff;
            font-size: 14px;
            margin: 0 5px;
            cursor: pointer;
            border: 0;
          }
        }
        &:nth-child(1) {
          width: 35%;
          margin: 0 -22px 0 0;
          z-index: 20;
          .Progress_frame {
            background: #0e9cde;
          }
          .Progress_pro {
            width: 0%;
            background: #0e9cde;
          }
          .Progress_button {
            .colorspan {
              background: #0e9cde;
            }
          }
        }
        &:nth-child(2) {
          width: 25%;
          margin: 0 -16px 0 0;
          z-index: 19;
          .Progress_frame {
            background: #2d43f9;
          }
          .Progress_pro {
            width: 0%;
            background: #2d43f9;
          }
          .Progress_button {
            .colorspan {
              background: #2d43f9;
            }
          }
        }
        &:nth-child(3) {
          width: 20%;
          margin: 0 -13px 0 0;
          z-index: 18;
          .Progress_frame {
            background: #d7466d;
          }
          .Progress_pro {
            width: 0%;
            background: #d7466d;
          }
          .Progress_button {
            .colorspan {
              background: #d7466d;
            }
          }
        }
        &:nth-child(4) {
          width: 20%;
          z-index: 17;
          .Progress_frame {
            background: #0a2655;
          }
          .Progress_pro {
            width: 0%;
            background: #0a2655;
          }
        }
      }
    }
  }
}
</style>
