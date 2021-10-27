import VueAdvanceDialog from './components/Dialog.vue'
import EventHub from "../plugins/EventHub";

export default {
    install(Vue) {
        Vue.component("vue-advance-dialog", VueAdvanceDialog);
        Vue.prototype.$eventHub = EventHub
    }
};