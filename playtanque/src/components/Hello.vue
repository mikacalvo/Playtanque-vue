<template>
  <div class="hello">
    <h1>Playtanque App</h1>
    <h2>Cliquez sur un type de concours</h2>
    <ul>
      <li><a href="/consolante">Consolante</a></li>
      <li><a href="/melee">Mêlée</a></li>
      <li><a href="/points">Points</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
