<template>
  <div>
     <div :endTime="endTime" :callback="callback" class="ttd">
        <span class="day" ref="day" v-if="nump">0</span>
        <span class="ten" ref="ten"></span>
        <span class="unit" ref="unit"></span>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';
import resolve from '../lib/resResolve';
export default {
  name: 'countdown',
  data() {
    return {
      content: '',
      nump: false,
      ntime:0,
      }
      },
      props: {
        endTime: {
          type: String,
          efault: ''
          },
        callback: {
          type: Function,
          default: function () {

          }
          },
      },
      mounted() {
          this.countdowm(this.endTime)
        },

      methods: {
         //状态提示
         popAlert: function(msg) {
            alert(msg)
         },
        countdowm:function(timestamp) {
          let self = this;
          let timer = setInterval(function() {
          let nowTime = new Date();
          let endTime = new Date(timestamp * 1000);
          let t = endTime.getTime() - nowTime.getTime();
          // let t = endTime.getTime() - this.ntime;
          if (t > 0) {
            let day = Math.floor(t / 86400000);
            let hour = Math.floor((t / 3600000) % 24);
            // let min = Math.floor((t / 60000) % 60);
            // let sec = Math.floor((t / 1000) % 60);
            hour = hour < 10 ? "0" + hour : hour;
            // min = min < 10 ? "0" + min : min;
            // sec = sec < 10 ? "0" + sec : sec;
            let format = '';
            if (day > 0) {
              // format = `${day}天${hour}小时${min}分${sec}秒`;
              format = `${day}`;
              }
              if( day <= 0 && hour > 0){
              day = 1;
              // format = `${hour}小时${min}分${sec}秒`;
              format = `${day}`;
              }
               if( day <= 0 && hour <= 0){
              // format =`${min}分${sec}秒`;
              day = 1;
              format = `${day}`;
              }
            self.content = format;
            let num = self.content;
            let days = $(".day");
            days.text(self.content);
            if (num.length > 1) {
              var numa = num.substr(0, 1);
              var numb = num.substr(1, 1);
              // this.nump = false;

              var number1 = Number(numa);
              var number2 = Number(numb);
              //十位
              switch (number1) {
                case 1:
                  $('.ten').addClass('n1');
                  break;
                case 2:
                  $('.ten').addClass('n2');
                  break;
                case 3:
                  $('.ten').addClass('n3');
                  break;
                case 4:
                  $('.ten').addClass('n4');
                  break;
                case 5:
                  $('.ten').addClass('n5');
                  break;
                case 6:
                  $('.ten').addClass('n6');
                  break;
                case 7:
                  $('.ten').addClass('n7');
                  break;
                case 8:
                  $('.ten').addClass('n8');
                  break;
                case 9:
                  $('.ten').addClass('n9');
                  break;
                default:
                  $('.ten').addClass('n0');
              }
              //个位
              switch (number2) {
                case 0:
                  $('.unit').addClass('n0');
                  break;
                case 1:
                  $('.unit').addClass('n1');
                  break;
                case 2:
                  $('.unit').addClass('n2');
                  break;
                case 3:
                  $('.unit').addClass('n3');
                  break;
                case 4:
                  $('.unit').addClass('n4');
                  break;
                case 5:
                  $('.unit').addClass('n5');
                  break;
                case 6:
                  $('.unit').addClass('n6');
                  break;
                case 7:
                  $('.unit').addClass('n7');
                  break;
                case 8:
                  $('.unit').addClass('n8');
                  break;
                case 9:
                  $('.unit').addClass('n9');
                  break;
                default:
                  $('.unit').addClass('n0');
              }

            } else {
              //个位
              var numd = num.substr(0, 1);
              // this.nump = false;
              var number4 = Number(numd);
              switch (number4) {
                case 0:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n0');
                  break;
                case 1:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n1');
                  break;
                case 2:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n2');
                  break;
                case 3:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n3');
                  break;
                case 4:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n4');
                  break;
                case 5:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n5');
                  break;
                case 6:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n6');
                  break;
                case 7:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n7');
                  break;
                case 8:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n8');
                  break;
                case 9:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n9');
                  break;
                default:
                  $('.ten').addClass('n0');
                  $('.unit').addClass('n0');
                  }
              }
              }else {
              clearInterval(timer);
              self._callback();
            }
          }, 1000);
        },
      _callback() {
      if (this.callback && this.callback instanceof Function) {
          this.callback(...this);
          }
        }
      }
    }
</script>
<style scoped>
.ttd {
    width: 90%;
    height: 120px;
    margin: 0 auto;
  }
  .ten {
    display: inline-block;
    width: 50px;
    height: 64px;
    margin-top: 20px;
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 0px 0px;
  }

  .unit {
    display: inline-block;
    width: 50px;
    height: 64px;
    margin-left: 5px;
    margin-top: 20px;
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 0px 0px;
  }

  .n0 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 0px 0px;
  }

  .n1 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 50px 0px;
  }

  .n2 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 100px 0px;
  }

  .n3 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 150px 0px;
  }

  .n4 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 200px 0px;
  }

  .n5 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 250px 0px;
  }

  .n6 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 300px 0px;
  }

  .n7 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 350px 0px;
  }

  .n8 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 400px 0px;
  }

  .n9 {
    background-image: url("../assets/images/pictrue/jcountdown_flip_black.png");
    background-position: 450px 0px;
  }
</style>
