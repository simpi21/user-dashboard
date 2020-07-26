<template>
  <div class="modal-container" :style="{height: windowHeight + 'px'}" @click="handleOutsideClick($event)">
    <div class="content">
      <slot />
      <div>
        <button @click="onClose()" class="close-button">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    onClose: Function
  },
  data() {
    return {
      windowHeight: window.innerHeight
    }
  },
  methods: {
    handleOutsideClick(event) {
      if (event.target === event.currentTarget) {
        this.onClose();
      }
    }
  }
}

</script>

<style scoped>
  .modal-container {
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    background-color: white;
    width: 70%;
    padding: 20px;
    border-radius: 10px;
  }

  .close-button {
    background-color: #2c9ebb;
    border: none;
    height: 32px;
    width: 80px;
    color: #fff;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>