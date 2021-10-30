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

```html
<vue-advance-dialog id="dialog" toggleTitle="Show Dialog">  
      Your content will go here ...
</vue-advance-dialog>
```

### Events

#### @show
After opening the dialog, the `show` event will fire. If you want to do something after the dialog opens you can do it.

```html
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
---

#### @hide
After closing the dialog, the `hide` event will fire. If you want to do something after the dialog close you can do it.

```html
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
---

#### You can `show` `hide` dialog in two way
You can show the dialog through the component button. When you set `toggleTitle` it will generate a button for you. You can show dialog by clicking this button.

```Vue
<vue-advance-dialog id="dialog" toggleTitle="Show Dialog"></vue-advance-dialog>
```
Screenshot: https://www.awesomescreenshot.com/image/15903525?key=ec1d21290a089f86b4edfc0e7e7b0a05

Also, you can use `toggle` scope to set toggle button content. When you use `toggle` scope you have to skip to set `toggleTitle`.
```html
<vue-advance-dialog id="dialog">
	<template v-slot:toggle>  
	    <i class="fas fa------"></i>  
	    Show Dialog  
	</template>
</vue-advance-dialog>
```
>You can't use `toggle` scope and `toggleTitle` together. Only one you can use.

If you don't set `toggleTitle` or `toggle` scope, no button will be generated. You can show dialog by firing an `emit` event, outside of the component.

```html
<button @click="openDialog">Your button</button>
```

```js
import {EventHub} from 'vue-advance-dialog'

export default {  
    methods: {  
        openDialog() {  
            EventHub.$emit('show-dialog',  'dialog')
            // this emit function accept two-parameter (event-name, dialog-id)
        }  
    }  
}
```
Or,  you can this event where dialog component is exists.
```js
export default {  
    mounted() {  
        EventHub.$emit('show-dialog', 'dialog')  
    },    
}  
```

Similarly, you can fire an `emit` event for closing dialog.

```js
export default {  
    mounted() {  
        EventHub.$emit('hide-dialog', 'dialog')  
    },  
    
    //or
    
	methods: {  
       hideDialog() {  
            EventHub.$emit('hide-dialog',  'dialog')
            // this emit function accept two-parameter (event-name, dialog-id)
        }  
    }   
}   
```
---

### Scopes
>`toggle`, By using this, you can set your content in toggle button.
```html
<vue-advance-dialog id="dialog">
	<template v-slot:toggle>  
	    <i class="fas fa------"></i>  
	    Show Dialog
	</template>
</vue-advance-dialog>
```
---

> `header`, You can set you contents in dialog header by using `header` scope.
```html
<vue-advance-dialog id="dialog">
	<template v-slot:header>  
	    Your content will go here ...
	</template>
</vue-advance-dialog>
```
---

>`footer`, Similarly you can use `footer` scope for footer content.
```html
<vue-advance-dialog id="dialog">
	<template v-slot:footer>  
	    Your content will go here ...
	</template>
</vue-advance-dialog>
```
---

### Props

- ***id:*** `String`  `default: dialog_ + random number`
> If you want to add multiple dialogs you have to set a unique id for every dialog. If you use the same id it will conflict in dialog events.
---
- ***toggleTitle:*** `String`  `default: btn btn-primary`
> I explained this before, in the events section.
---
- ***disabled:*** `Boolean`  `default: false`
- > If you want to disable the component `toggle button`, you can use this `prop`.
---
- ***title:*** `String`  `default: ''`
> You can set dialog `title` through this `prop` or you can use `header` scope.
---
- ***closeButton:*** `Boolean`  `default: true`
> You can remove in component close button by using this prop.
>Screenshot:  https://www.awesomescreenshot.com/image/15904512?key=72caabc6d887286ec05aa7a5cc60c0a8
---
- ***outsideClickClose:*** `Boolean`  `default: true`
>If you want to stop closing dialog by clicking outside the dialog, you can use this `prop`.
---
- ***size:*** `String`  `default: xs`
> You can define dialog size by using this `prop`.
> Sizes: `lg`, `md`, `sm`, `xs`
---
- ***position:*** `String`  `default: top-center`
> You can set your dialog position by using this `prop`.
> Positions: `center-center`, `center-left`, `center-right`, `top-center`, `top-left`, `top-right`, `bottom-center`, `bottom-left`, `bottom-right`
---
- ***transition:*** `String`  `default: slide-top`
>You can set dialog opening and closing transition by using this `prop`.
>Transitions: `fade`, `zoom`, `slide-top`
---
- ***containerClass:*** `String`  `default: ''`
- ***contentClass:*** `String`  `default: ''`
- ***contentHeaderClass:*** `String`  `default: ''`
- ***contentInnerClass:*** `String`  `default: ''`
- ***contentFooterClass:*** `String`  `default: ''`
