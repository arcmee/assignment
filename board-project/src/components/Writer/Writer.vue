<template>
    <writer-form></writer-form>
    <form-button></form-button>
</template>
<script>
import WriterForm from './WriterForm.vue'
import FormButton from './FormButton.vue'
export default {
  name: 'Writer',
  components : {
    WriterForm,
    FormButton,
  },
  props: {
  }
}
</script>
<style scoped>
</style>