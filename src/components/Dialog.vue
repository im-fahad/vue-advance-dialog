<template>
    <div :id="id" class="g-dialog" :class="containerClass">
        <button v-if="!hideToggle" class="g-dialog__toggle" type="button"
                :class="toggleClass" @click="showDialog"
                :disabled="disabled">
            {{ toggleTitle ? toggleTitle : '' }}
            <slot name="toggle"/>
        </button>

        <transition name="dialog-fade">
            <div class="g-dialog__inner" :class="position" v-if="isActive">
                <div class="g-dialog__overlay" @click="hideDialog"></div>
                <transition :name="'dialog-'+transition">
                    <div class="g-dialog__content" :class="'g-dialog__content--'+size + '' + contentClass"
                         v-if="activated">
                        <button v-if="!hideCloseButton" type="button" class="g-dialog__close-btn" @click="hideDialog">
                            <!--                            <img src="../assets/images/icons/close.png" class="g-dialog__close-btn-icon" alt="Close">-->
                        </button>
                        <div class="g-dialog__content-header" :class="contentHeaderClass" v-if="!hideHeader">
                            <slot name="header"/>
                            <h5 v-if="title" class="g-dialog__content-title" v-text="title"></h5>
                        </div>
                        <div v-if="!hideBody" class="g-dialog__content-inner" :class="contentInnerClass">
                            <slot/>
                        </div>
                        <slot v-else/>
                        <div class="g-dialog__content-footer" :class="contentFooterClass" v-if="!hideFooter">
                            <slot name="footer"/>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
import EventHub from "../../plugins/EventHub";

export default {
    name: 'vue-advance-dialog',

    props: {
        id: {
            type: String,
            required: true,
            default: 'g-dialog_' + Number(Math.random() * 100).toFixed(0)
        },
        toggleClass: {
            type: String,
            required: false,
            default: 'btn btn-primary'
        },
        toggleTitle: {
            type: String,
            required: false,
            default: ''
        },
        hideHeader: {
            type: Boolean,
            required: false,
            default: false
        },
        hideBody: {
            type: Boolean,
            required: false,
            default: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        hideFooter: {
            type: Boolean,
            required: false,
            default: true
        },
        hideCloseButton: {
            type: Boolean,
            required: false,
            default: false
        },
        hideToggle: {
            type: Boolean,
            required: false,
            default: true
        },
        size: {
            type: String,
            required: false,
            default: 'xs'
            // lg, md, sm, xs
        },
        position: {
            type: String,
            required: false,
            default: 'top-center'
            // center-center, center-left, center-right, top-center, top-left, top-right, bottom-center, bottom-left, bottom-right
        },
        title: {
            type: String,
            required: false,
            default: ''
        },
        containerClass: {
            type: String,
            required: false,
            default: ''
        },
        contentClass: {
            type: String,
            required: false,
            default: ''
        },
        contentHeaderClass: {
            type: String,
            required: false,
            default: ''
        },
        contentInnerClass: {
            type: String,
            required: false,
            default: ''
        },
        contentFooterClass: {
            type: String,
            required: false,
            default: ''
        },
        transition: {
            type: String,
            required: false,
            default: 'slide-top'
        },
    },

    data() {
        return {
            isActive: false,
            activated: false,
        };
    },
    watch: {
        isActive(value) {
            if (value === true) {
                this.$emit('activated')
            } else {
                this.$emit('deactivated')
            }
        }
    },
    mounted() {
        EventHub.$on('hide-all-dialog', () => {
            this.hideDialog()
        })
        EventHub.$on('hide-dialog', (id) => {
            if (this.id !== id) return
            this.hideDialog()
        })

        EventHub.$on('show-dialog', (id) => {
            if (this.id !== id) return
            this.showDialog()
        })
    },
    methods: {
        showDialog() {
            this.isActive = true
            this.$emit('after-show')
            setTimeout(() => {
                this.activated = true
            }, 100)
        },

        hideDialog() {
            this.activated = false
            this.$emit('after-hide')
            return setTimeout(() => {
                this.isActive = false
            }, 200)
        }
    }
};
</script>

<style lang="scss">
@import "../assets/scss/dialog";
@import "../assets/scss/transitions";
</style>