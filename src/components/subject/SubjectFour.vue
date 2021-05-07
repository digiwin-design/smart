<template>
  <div class="SubjectFour">
    <picture>
      <img src="@/assets/images/subjectfour.jpg" :height="this.$store.state.clientHeight" />
    </picture>
    <div class="container">
      <h1>您的管理能力分析已完成</h1>
      <div class="smart-contact">
        <div class="smart-pdf">
          <h2>分析報告預覽：</h2>
          <img src="@/assets/images/preview.jpg" alt="" width="250" height="375" />
        </div>
        <div class="smart-data">
          <h2>請填寫以下資料<span>取得完整分析報告</span>：</h2>
          <div class="smart-input">
            <input
              type="text"
              placeholder="*完整公司名稱"
              name="smart-company"
              id="smart-company"
            />
            <input
              type="text"
              placeholder="*統一編號：(限8位數字)"
              name="smart-other"
              id="smart-other"
            />
            <input type="text" placeholder="*姓名" name="smart-name" id="smart-name" />
            <input
              type="text"
              placeholder="*聯繫電話"
              name="smart-telephone"
              id="smart-telephone"
            />
            <select name="smart-job" id="smart-job">
              <option value="" hidden>*職稱</option>
              <option value="經營層/幕僚">經營層/幕僚</option>
              <option value="資訊">資訊</option>
              <option value="生管/生產">生管/生產</option>
              <option value="品管/品保">品管/品保</option>
              <option value="業務/業助">業務/業助</option>
              <option value="行政">行政</option>
              <option value="其它">其它</option>
            </select>
            <input type="text" placeholder="*Email" name="smart-email" id="smart-email" />
          </div>
          <div class="smart-download">
            <input
              type="text"
              placeholder="請輸入下載序號"
              name="smart-number"
              id="smart-number"
              class="smart-number"
            />
            <div class="smart-question">
              <div class="smart-icon">?</div>
              <p>什麼是下載序號</p>
            </div>
          </div>
          <div class="smart-verifica">
            <span class="smart-veriSpan">＊請輸入驗證碼：</span>
            <input type="text" name="" id="identCode" class="smart-identCode" onblur="validate()" />
            <input type="button" id="vericodePic" class="smart-vericodePic" />
            <span onclick="createCode()" class="smart-renovCode"></span>
            <span id="codeSuces"></span>
          </div>
        </div>
      </div>

      <button class="subject_button" @click="subject">送出</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  setup() {},
  methods: {
    subject() {
      const radios = document.getElementsByName(`A${this.$store.state.swiper3.activeIndex + 10}`);
      this.$store.state.inputname = radios;
      this.$store.state.flag = true;
      for (let i = 0; i < this.$store.state.inputname.length; i += 1) {
        if (this.$store.state.inputname[i].checked) {
          this.$store.state.swiper3.slideTo(this.$store.state.swiper3.activeIndex + 1);
          this.$store.state.flag = false;
          break;
        }
      }
      if (this.$store.state.flag) {
        this.$store.commit('setWarning', 'no');
      }
    },
  },
};
</script>
<style lang="scss">
.SubjectFour {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    input::-moz-placeholder {
      color: #dadada;
      opacity: 1;
      font-size: 18px;
    }
    input:-moz-placeholder {
      color: #dadada;
      opacity: 1;
      font-size: 18px;
    }
    input:-ms-input-placeholder {
      color: #dadada;
      font-size: 18px;
    }
    input::-webkit-input-placeholder {
      color: #dadada;
      font-size: 18px;
    }
    h1 {
      font-size: 50px;
      color: #fff;
      padding: 0 0 50px 0;
    }
    .smart-contact {
      display: flex;
      justify-content: center;
      padding: 0 0 0 80px;
      .smart-pdf {
        display: flex;
        flex-direction: column;
        h2 {
          font-size: 20px;
          font-weight: bold;
          color: #fff000;
          margin: 0 0 15px;
        }
      }
      .smart-data {
        display: flex;
        flex-direction: column;
        padding: 0 0 0 60px;
        h2 {
          font-size: 20px;
          font-weight: bold;
          color: #fff000;
          margin: 0 0 15px;
          span {
            border-bottom: 1px solid #fff000;
          }
        }
        .smart-input {
          display: flex;
          flex-wrap: wrap;
          input {
            width: 100%;
            max-width: 320px;
            height: 50px;
            border: 1px solid #fff;
            border-left: 6px solid #fff;
            background: transparent;
            color: #fff;
            margin: 0 25px 10px 0;
          }
          select {
            width: 100%;
            max-width: 320px;
            height: 50px;
            border: 1px solid #fff;
            border-left: 6px solid #fff;
            background: transparent;
            color: #dadada;
            margin: 0 25px 10px 0;
            font-size: 18px;
          }
        }
        .smart-number {
          width: 100%;
          max-width: 320px;
          height: 50px;
          border: 1px solid #ef1d78;
          border-left: 6px solid #ef1d78;
          background: transparent;
        }
        .smart-download {
          display: flex;
          align-items: center;
          .smart-question {
            display: flex;
            font-size: 19px;
            color: #dadada;
            margin: 0 0 0 25px;
            .smart-icon {
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: 'Arial';
              font-size: 20px;
              color: #0b2655;
              font-weight: bold;
              border-radius: 50%;
              background: #dadada;
              margin: 0 5px 0 0;
            }
            p {
              border-bottom: 1px solid #dadada;
            }
          }
        }
        .smart-verifica {
          margin: 70px 0 30px;
          color: #fff;
          font-size: 17px;
          .smart-veriSpan {
            display: inline-block;
            zoom: 1;
          }
          .smart-identCode {
            height: 35px;
            width: 100px;
            padding: 0 0 0 10px;
            color: #000;
            border: none;
          }
          .smart-vericodePic {
            position: relative;
            height: 36px;
            width: 120px;
            margin-left: 8px;
            padding: 0;
            // background: url(/tw/dsc/images/Eform/identCode.jpg) no-repeat center;
            color: #555;
            font-size: 20px;
            font-family: Arial;
            font-style: italic;
            font-weight: bold;
            letter-spacing: 4px;
            vertical-align: middle;
            border: none;
          }
          .smart-renovCode {
            display: inline-block;
            zoom: 1;
            width: 27px;
            height: 27px;
            // background: url(/tw/dsc/images/Eform/reload.png) no-repeat;
            cursor: pointer;
            vertical-align: middle;
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
