<template>
  <button @click="increment">Count is: {{ count }}, double is: {{ double }}</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    double() {
      return this.$store.state.count * 2
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
  },
}
</script>
