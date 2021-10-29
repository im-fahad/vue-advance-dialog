<template>
    <div class="container d-flex align-items-center justify-content-center" style="min-height: 100vh">
        <Dialog id="dialog" @show="show" @hide="hide" toggleClass="btn btn-sm btn-primary"
                toggleTitle="Show Modal" title="Dialog Title" size="sm" position="top-center" transition="slide-top">
            <img src="./assets/logo.png" class="card-img-top" alt="...">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit minima voluptate. Aliquam, ex
                expedita fugiat maiores maxime molestiae repellat suscipit? Deleniti facilis, impedit nemo nesciunt
                placeat suscipit voluptatum! Dignissimos dolorem eum ex fuga id, illo iusto nisi pariatur, provident
                repellendus tempora, vel. Aliquid necessitatibus placeat repudiandae sequi soluta veniam?</p>
            <template v-slot:footer>dfvdvdv</template>
        </Dialog>
    </div>
</template>

<script>
import Dialog from './components/Dialog'

export default {
    components: {
        Dialog,
    },
    methods: {
        show() {
            alert('show')
        },
        hide() {
            alert('hide')
        },
    }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>
