<template>
  <div class="Industry">
    <h1>請選擇您的行業別</h1>
    <h2>此分析透過與同業的競爭比較，了解在不同管理能力當中與同業的差距。</h2>
    <div class="industrys">
      <div class="industry" v-for="(i, idx) in this.$store.state.result.industry" :key="i.name">
        <input
          type="radio"
          :id="'industry' + idx"
          :value="i.val"
          name="industry"
          @click="controlSingel()"
          v-model="this.$store.state.D15"
        />
        <label :for="'industry' + idx">
          <div class="cris">
            <div class="cris_cri">
              <div class="cri1" :class="{ cri2: cri }"></div>
              <div class="cri3" :class="{ cri4: cri }"></div>
            </div>
          </div>
          {{ i.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cri: false,
    };
  },
  methods: {
    controlSingel() {
      this.cri = true;
      this.$store.state.subject = true;
      setTimeout(() => {
        this.$store.state.swiper0.slideTo(2);
      }, 800);
    },
  },
};
</script>

<style lang="scss">
.swiper-industry {
  background: #020c25;
  .Industry {
    width: 100%;
    height: 100vh;
    background: #d8d8d8;
    position: relative;
    z-index: 15;
    clip-path: polygon(20% 0%, 80% 0%, 100% 10%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0% 10%);
    h1 {
      font-size: 50px;
      color: #000;
      padding: 90px 0 25px;
      text-align: center;
    }
    h2 {
      font-size: 18px;
      color: #000;
      text-align: center;
      padding: 0 0 40px;
      line-height: 1.3;
    }
    .industrys {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
      .industry {
        width: 100%;
        max-width: 230px;
        margin: 0 10px 10px 0;
        input[type='radio'] {
          display: none;
          & + label {
            display: flex;
            align-items: center;
            width: 100%;
            height: 45px;
            border: 1px dotted #4255fa;
            border-radius: 2px;
            color: #4255fa;
            font-weight: bold;
            cursor: pointer;
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
                border: 2px solid rgba(66, 85, 250, 0.5);
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
                  border: 2px solid rgba(66, 85, 250, 1);
                  transition: all 0.3s;
                }
              }
            }
          }
          &:checked + label {
            background: #4255fa;
            color: #fff;
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
    .Industry_button {
      display: block;
      width: 300px;
      height: 65px;
      font-size: 18px;
      border: 0;
      margin: 30px auto 0;
      cursor: pointer;
    }
  }
}
</style>
