<template>
  <button @click="increment">Count is: {{ count }}, double is: {{ double }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    double() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count++
    },
  },
}
</script>
