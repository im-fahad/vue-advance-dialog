# vue-advance-dialog

Vue Advanced Dialog is a flexible and customizable Vue component. You can easily use this for your Vue or nuxt project.

## License

MIT

## Installation

```bash
npm install --save vue-advance-dialog
```
## Usage

```js
import {VueAdvanceDialog} from 'vue-advance-dialog'

require('vue-advance-dialog/dist/vue-advance-dialog.css')

Vue.use(VueAdvanceDialog)
```
```Vue
// on Nuxt.js

components: {
VueAdvanceDialog
},
```

```Vue
<vue-advance-dialog id="dialog" toggleTitle="Show Dialog">
    Your content will go here ...
</vue-advance-dialog>
```

### Props

- ***id:*** `String`  `default: dialog_ + random number`
> If you want to add multiple dialogs you have to set a unique id for every dialog. If you use the same id it will conflict in dialog events.

- ***toggleTitle:*** `String`  `default: btn btn-primary`
- ***disabled:*** `Boolean`  `default: false`
- ***title:*** `String`  `default: ''`
- ***closeButton:*** `Boolean`  `default: true`
- ***outsideClickClose:*** `Boolean`  `default: true`
- ***size:*** `String`  `default: xs`
- ***position:*** `String`  `default: top-center`
- ***containerClass:*** `String`  `default: ''`
- ***contentClass:*** `String`  `default: ''`
- ***contentHeaderClass:*** `String`  `default: ''`
- ***contentInnerClass:*** `String`  `default: ''`
- ***contentFooterClass:*** `String`  `default: ''`
- ***transition:*** `String`  `default: slide-top`

### Events

#### @show
After opening the dialog, the `show` event will fire. If you want to do something after the modal opens you can do it.

```Vue
<vue-advance-dialog @show="doSomething">
    Your content will go here ...
</vue-advance-dialog>
```

```js
methods: {
    doSomething() {
        alert('Dialog is opened')
    },
}
```


#### @hide
After closing the dialog, the `hide` event will fire. If you want to do something after the modal close you can do it.

```Vue
<vue-advance-dialog @hide="doSomething">
    Your content will go here ...
</vue-advance-dialog>
```

```js
methods: {
    doSomething() {
        alert('Dialog is closed')
    },
}
```