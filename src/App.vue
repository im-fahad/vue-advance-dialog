<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Dialog id="dialog" @after-hide="clearData" toggleClass="btn btn-sm btn-primary" :hideToggle="false"
                toggleTitle="Toggle Modal" title="Dialog" size="sm" position="top-center" transition="slide-top">
            <img alt="Vue logo" src="./assets/logo.png">
        </Dialog>

    </div>
</template>

<script>
import Dialog from './components/Dialog'

export default {
    name: 'App',
    components: {
        Dialog,
    },
    methods: {
        clearData() {
            // alert(123456)
        }
    }
}
</script>
