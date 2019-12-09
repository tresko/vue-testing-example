<template>
  <div>
    <button @click="handleClick">Fetch</button>
    <span v-if="apiData">{{ apiData }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    apiData() {
      return this.$store.state.api
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch('fetchData')
    },
  },
}
</script>
