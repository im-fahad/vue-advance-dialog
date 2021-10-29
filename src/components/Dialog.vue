<template>
    <div :id="id" class="g-dialog" :class="containerClass">
        <button v-if="toggleTitle || this.$slots['toggle']" class="g-dialog__toggle" type="button"
                :class="toggleClass" @click="showDialog"
                :disabled="disabled">
            {{ toggleTitle ? toggleTitle : '' }}
            <slot name="toggle"/>
        </button>

        <transition name="dialog-fade">
            <div class="g-dialog__inner" :class="position" v-if="isActive">
                <div class="g-dialog__overlay" :class="!outsideClickClose ? 'cursor-default':''"
                     @click="outsideClickHide"></div>
                <transition :name="'dialog-'+transition">
                    <div class="g-dialog__content" :class="'g-dialog__content--'+size + '' + contentClass"
                         v-if="activated">
                        <button v-if="closeButton" type="button" class="g-dialog__close-btn" @click="hideDialog">
                            <img src="../assets/images/icons/close.png" class="g-dialog__close-btn-icon" alt="Close">
                        </button>
                        <div class="g-dialog__content-header" :class="contentHeaderClass"
                             v-if="title || this.$slots['header']">
                            <slot name="header"/>
                            <h5 v-if="title" class="g-dialog__content-title" v-text="title"></h5>
                        </div>
                        <div class="g-dialog__content-inner" :class="contentInnerClass">
                            <slot/>
                        </div>
                        <div class="g-dialog__content-footer" :class="contentFooterClass" v-if="this.$slots['footer']">
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
        toggleTitle: {
            type: String,
            required: false,
            default: ''
        },
        toggleClass: {
            type: String,
            required: false,
            default: 'btn btn-primary'
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        title: {
            type: String,
            required: false,
            default: ''
        },
        closeButton: {
            type: Boolean,
            required: false,
            default: true
        },
        outsideClickClose: {
            type: Boolean,
            required: false,
            default: true
        },
        size: {
            type: String,
            required: false,
            default: 'sm'
            // lg, md, sm, xs
        },
        position: {
            type: String,
            required: false,
            default: 'top-center'
            // center-center, center-left, center-right, top-center, top-left, top-right, bottom-center, bottom-left, bottom-right
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
            this.$emit('show')
            setTimeout(() => {
                this.activated = true
            }, 100)
        },

        hideDialog() {
            this.activated = false
            this.$emit('hide')
            return setTimeout(() => {
                this.isActive = false
            }, 200)
        },

        outsideClickHide(){
            if (!this.outsideClickClose) return;
            this.hideDialog()
        }
    }
};
</script>

<style lang="scss">
@import "../assets/scss/dialog";
@import "../assets/scss/transitions";
</style>