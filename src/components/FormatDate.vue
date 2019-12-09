<template>
  <div data-testid="date">
    {{ formatDate(data) }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    }
  },
  methods: {
    formatDate() {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      return `${months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`
    },
  },
}
</script>
