<template>
  <header
    :style="gradientStyle"
  >
    <h1>
      jasper
    </h1>
    <h4 class="fade">
      UX Engineer, Digital Tinkerer
    </h4>
    <nav>
      <nuxt-link to="/about">about</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: [],
  components: {},
  data () {
    return {
      colors: [
        [81,183,255],
        [33, 202, 217],
        [210,210,210],
        [152,242,200],
        [201,137,118],
        [109,107,255],
      ],
      step: 0,
      colorIndices: [0, 1, 2, 3],
      gradientSpeed: 0.01,
      color1: '',
      color2: '#fff',
    }
  },
  asyncData () {
    return {}
  },
  computed: {
    gradientStyle () {
      return `background: -webkit-gradient(linear, left top, right top, from(${this.color1}), to(${this.color2}); background: -moz-linear-gradient(left, ${this.color1} 0%, ${this.color2} 100%); background-image: linear-gradient(to right, ${this.color1}, ${this.color2});`
    }
  },
  watch: {},
  mounted () {
    //this.updateGradientValues()
  },
  methods: {
    updateGradientValues () {
      window.requestAnimationFrame(() => {
        const c0_0 = this.colors[this.colorIndices[0]]
        const c0_1 = this.colors[this.colorIndices[1]]
        const c1_0 = this.colors[this.colorIndices[2]]
        const c1_1 = this.colors[this.colorIndices[3]]

        const istep = 1 - this.step
        const r1 = Math.round(istep * c0_0[0] + this.step * c0_1[0])
        const g1 = Math.round(istep * c0_0[1] + this.step * c0_1[1])
        const b1 = Math.round(istep * c0_0[2] + this.step * c0_1[2])
        this.color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16)

        const r2 = Math.round(istep * c1_0[0] + this.step * c1_1[0])
        const g2 = Math.round(istep * c1_0[1] + this.step * c1_1[1])
        const b2 = Math.round(istep * c1_0[2] + this.step * c1_1[2])
        this.color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16)

        this.step += this.gradientSpeed
        if (this.step >= 1) {
          this.step %= 1
          this.colorIndices[0] = this.colorIndices[1]
          this.colorIndices[2] = this.colorIndices[3]

          this.colorIndices[1] = ( this.colorIndices[1] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length
          this.colorIndices[3] = ( this.colorIndices[3] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length
        }

        this.updateGradientValues()
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  
  $header-height: $grid-base * 70;

  header {
    width: 100%;
    height: $header-height;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 $screen-edge;
    padding-bottom: $grid-base * 35;
    margin-bottom: -$grid-base * 35;

    h1, h4 {
      margin: 0;
    }
  }

</style>
