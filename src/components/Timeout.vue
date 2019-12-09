<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 'Joe',
      timer: null,
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.data = 'Doe'
    }, 1000)
  },
}
</script>
