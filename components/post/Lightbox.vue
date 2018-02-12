<template>
  <div
    class="lightbox"
    :class="{on: src ? true : false}"
    @click="$emit('close')"
  >
    <img
      ref="image"
      :src="src"
    />
  </div>
</template>

<script>
export default {
  props: [ 'src', ],
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>
<style lang="scss" scoped>

  .lightbox {
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    background: rgba(black, .8);
    padding: 2%;
    transition: all .3s;
    opacity: 0;
    pointer-events: none;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    &.on {
      opacity: 1;
      pointer-events: auto;
    }
  }

  img {
    display: block;
    align-self: center;
    max-width: 100%;
    max-height: 100%;
  }


</style>
