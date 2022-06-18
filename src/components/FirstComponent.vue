<script>
export default {
  data: function () {
    return {
      testEvent: 'String to change'
    }
  },
  created (){
    this.emitter.on('my-event', (evt) => {
      console.log('First Componente recebeu de Second Component: ', evt);
    })
  }
}
</script>