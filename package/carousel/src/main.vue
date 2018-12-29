<template>
  <div class="h-carousel" :style="{ height: height, width : width }">
    <div class="h-carousel__container" v-mousewheel.stop="changeScale">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {addClass, removeClass} from "../../util/dom";
  import Mousewheel from '../../directives/mousewheel';
  import {throttle, debounce} from 'throttle-debounce';


  export default {
    name: 'HCarousel',

    props: {
      height: {
        type: String,
        default: '500px'
      },
      width: {
        type: String,
        default: '100%'
      },
    },

    data() {
      return {
        index: 0,
        maxIndex: 4,
        allArray: [],
      };
    },

    computed: {},
    directives: {
      Mousewheel,
    },
    watch: {
      index(val) {
        this.setClass(val);
      },
    },

    methods: {
      setClass(val) {
        let sArr = this.allArray.slice(val, val + 4);
        //console.log('index',val);
        //console.log('sArr',sArr);
        for (let i = 0; i < document.querySelectorAll('.h-carousel-item').length; i++) {
          removeClass(document.querySelectorAll('.h-carousel-item')[i], 'is-front is-right is-behind is-left is-other');
          if (i === sArr[0]) {
            addClass(document.querySelectorAll('.h-carousel-item')[i], 'is-front');
          } else if (i === sArr[1]) {
            addClass(document.querySelectorAll('.h-carousel-item')[i], 'is-right');
          } else if (i === sArr[2]) {
            addClass(document.querySelectorAll('.h-carousel-item')[i], 'is-behind');
          } else if (i === sArr[3]) {
            addClass(document.querySelectorAll('.h-carousel-item')[i], 'is-left');
          } else {
            addClass(document.querySelectorAll('.h-carousel-item')[i], 'is-other');
          }
        }
      },
    },
    created() {
      this.changeScale = throttle(300, (event, data) => {
        // console.log(data)
        if (event.wheelDelta > 0) {
          this.index--;
          if (this.index < 0) {
            this.index = this.maxIndex
          }

        } else {
          this.index++;
          if (this.index >= this.maxIndex) {
            this.index = 0;
          }
        }
      });
    },

    mounted() {
      this.$nextTick(() => {
        this.maxIndex = document.querySelectorAll('.h-carousel-item').length;
        for (let i = 0; i < this.maxIndex; i++) {
          this.allArray.push(i)
          //document.querySelectorAll('.h-carousel-item')[i].id = `h-carousel-item__${i}`
        }
        this.allArray = this.allArray.concat(this.allArray)
        this.setClass(0);
        // [].forEach.call(
        //   document.querySelectorAll('.h-carousel-item'),
        //    (el)=> {
        //     el.id = 'h-carousel-item'
        //   }
        // );
      });
    },

    beforeDestroy() {

    }
  };
</script>
