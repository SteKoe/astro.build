<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div>
      <div class="counter">
        <button @click="count--">-</button>
        <pre v-text="count"></pre>
        <button @click="count++">+</button>
      </div>
      <div class="counter-message">
        <slot></slot>
      </div>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
.counter {
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	place-items: center;
}

.counter-message {
	text-align: center;
}

</style>