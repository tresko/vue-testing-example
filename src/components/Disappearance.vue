<template>
  <p v-if="loading">Loading...</p>
  <p v-else data-testid="message">Loaded this message: {{ data.returnedMessage }}</p>
</template>

<script>
const fetchAMessage = () =>
  new Promise(resolve => {
    // we are using random timeout here to fireEvent a real-time example
    // of an async operation calling a callback at a non-deterministic time
    const randomTimeout = Math.floor(Math.random() * 100)
    setTimeout(() => {
      resolve({returnedMessage: 'Hello World'})
    }, randomTimeout)
  })
export default {
  data() {
    return {
      loading: true,
      data: {
        returnedMessage: null,
      },
    }
  },
  async mounted() {
    const data = await fetchAMessage()
    this.loading = false
    this.data = data
  },
}
</script>
