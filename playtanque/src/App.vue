<template>
    <div id="app">
        <div>
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <menuconcours></menuconcours>
                </div>
            </nav>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Hello from './components/Hello'
    import Menuconcours from './components/Menuconcours'

    export default {
        components: {
            Hello,
            Menuconcours
        }
    }
</script>

<style lang="scss">
    @import 'src/assets/scss/design.scss';
</style>
