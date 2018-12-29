<template>
  <transition name="h-message-fade">
    <div class="h-message" v-show="visible" @click="close">
      <div
        class="h-message__body"
        :class="[
        'h-message',
        `h-message--${ type }`,
        customClass]"
        v-show="visible"
        @mouseenter="clearTimer"
        @mouseleave="startTimer">
        <div v-if="!isButton">
          <i :class="iconClass" v-if="iconClass"></i>
          <i :class="typeClass" v-else></i>
          <i class="h-message__closeBtn h-icon-close"  @click="close"></i>
          <div class="h-message__message">
            {{message}}
          </div>
        </div>
        <div class="h-message--button" v-else>
          <div class="h-message__message">
            {{message}}
          </div>
          <h-button :type="type === 'error' ? 'danger' : type" @click="close(buttonText[0])">{{buttonText[0]}}</h-button>
          <h-button type="info" @click="close(buttonText[1])" plain>{{buttonText[1]}}</h-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const typeMap = {
    success: 'emoji',
    info: 'prompt',
    warning: 'remind',
    error: 'delete'
  };

  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: true,
        closed: false,
        timer: null,
        isButton: false,
        buttonText: [],
        buttonConfirm: null
      };
    },

    computed: {
      typeClass() {
        return this.type && !this.iconClass
          ? `h-message__icon h-icon-${typeMap[this.type]}`
          : '';
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },

    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close(data) {
        if (data) {
          this.buttonConfirm = data;
        }
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      keydown(e) {
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close();
          }
        }
      }
    },
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
      if (this.isButton) {
        this.duration = 0;
        if (this.buttonText && this.buttonText.length === 1) {
          this.buttonText[1] = '取消';
        } else if (!this.buttonText || !this.buttonText.length) {
          this.buttonText[0] = '确定';
          this.buttonText[1] = '取消';
        }
      }
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    }
  };
</script>
