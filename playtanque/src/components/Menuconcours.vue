<template>
    <header class="header" id="header">
        <nav>
            <a href="/" class="navbar-brand">Playtanque</a>
            <v-link href="/consolante">Consolante</v-link>
            <v-link href="/melee">Mêlée</v-link>
            <v-link href="/points">Points</v-link>
        </nav>
    </header>
</template>

<script>
    import VLink from '../components/VLink.vue'

    export default {
        name: 'menuconcours',
        components: {
            VLink
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header nav {
        display:block;
        margin:0;
        background-color:#5597b4;
        box-shadow:0 1px 1px #ccc;
        border-radius:2px;
    }

    header nav a {
        display:inline-block;
        padding: 18px 30px;
        color:#fff !important;
        font-weight:bold;
        font-size:16px;
        text-decoration:none !important;
        line-height:1;
        text-transform: uppercase;
        background-color:transparent;

        -webkit-transition:background-color 0.25s;
        -moz-transition:background-color 0.25s;
        transition:background-color 0.25s;
    }

    header nav .navbar-brand {
        font-size:26px;
        line-height: 0.7;
    }

    header nav a:first-child {
        border-radius:2px 0 0 2px;
    }

    header nav a:last-child {
        border-radius:0 2px 2px 0;
    }
</style>
