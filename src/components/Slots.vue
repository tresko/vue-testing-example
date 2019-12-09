<template>
  <div class="card">
    <slot name="header" />
    <slot :content="content">
      <p>Nothing used the {{ content }}</p>
    </slot>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: 'Scoped content!',
    }
  },
}
</script>
