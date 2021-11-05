# vue-advance-dialog

Vue Advance Dialog is a flexible and customizable Vue component for popup dialog or modal. You can easily use this component in any of your vue or nuxt projects. It has different useful props and events to easily customize the component as your requirement.

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
---


## Events

#### @show
The `show` event fires immediately after opening the dialog.

```html
<vue-advance-dialog @show="doSomething">  
    Your content will go here ...
</vue-advance-dialog>
```

```js
methods: {  
    doSomething() { 
        console.log('Dialog is opened')
    },
}
```

#### @hide
After closing the dialog, the `hide` event fires.

```html
<vue-advance-dialog @hide="doSomething">  
    Your content will go here ...
</vue-advance-dialog>
```

```js
methods: {  
    doSomething() { 
        console.log('Dialog is closed')
    },
}
```

#### `show` or `hide` the dialog in two different ways

***First Way:*** 
You can show the dialog by clicking the component button. Set a value of `toggleTitle` prop, then it will generate a button. The dialog can be shown by clicking this button.

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
>You can use either the `toggle` scope or the `toggleTitle` prop, can't use both. If you don't set `toggleTitle` or `toggle` scope, then no button will be generated. 


***Second Way:***
You can show dialog by firing an `emit` event, outside of the dialog component. The emit function accepts two arguments: `event-name` and `dialog-id`.

```html
<button @click="openDialog">Your button</button>
```

```js
import {EventHub} from 'vue-advance-dialog'

export default {  
    methods: {  
        openDialog() {  
            EventHub.$emit('show-dialog',  'dialog')
            // this emit function accepts two arguments (event-name, dialog-id)
        }  
    }  
}
```

Or, you can use this event where dialog component is existed.
```js
export default {  
    mounted() {  
        EventHub.$emit('show-dialog', 'dialog')  
    },    
}  
```

Similarly, you can fire an `emit` event for hiding the dialog.
```js
export default {  
    mounted() {  
        EventHub.$emit('hide-dialog', 'dialog')  
    }  
```

Or,

```js    
export default { 
	methods: {  
       hideDialog() {  
            EventHub.$emit('hide-dialog',  'dialog')
            // this emit function accepts two arguments (event-name, dialog-id)
        }  
    }   
}   
```
---

## Scopes
#### toggle
By using `toggle`, you can set your custom content in toggle button.

```html
<vue-advance-dialog id="dialog">
	<template v-slot:toggle>  
	    <i class="fas fa------"></i>  
	    Show Dialog
	</template>
</vue-advance-dialog>
```

#### header
Custom content for Dialog header, could be set by using `header` scope.

```html
<vue-advance-dialog id="dialog">
	<template v-slot:header>  
	    Your header content will go here ...
	</template>
</vue-advance-dialog>
```

#### footer
Similarly use `footer` scope for footer content.

```html
<vue-advance-dialog id="dialog">
	<template v-slot:footer>  
	    Your footer content will go here ...
	</template>
</vue-advance-dialog>
```
---

## Props

- ***id:*** `String`  `default: dialog_ + random number`
> If you want to add multiple dialogs you have to set a unique id for each dialog. If you use the same id, it will create conflict in dialog events.

- ***toggleTitle:*** `String`  `default: btn btn-primary`
> Details explained in the events section.

- ***disabled:*** `Boolean`  `default: false`
> Use `disabled` prop To disable the component `toggle button`.

- ***title:*** `String`  `default: ''`
> Set the dialog `title` through this prop or alternatively use `header` scope.

- ***closeButton:*** `Boolean`  `default: true`
> Remove the component `close button` by using this prop.
> Screenshot:  https://www.awesomescreenshot.com/image/15904512?key=72caabc6d887286ec05aa7a5cc60c0a8

- ***outsideClickClose:*** `Boolean`  `default: true`
> Use this prop to stop closing dialog by clicking outside of the dialog.

- ***size:*** `String`  `default: xs`
> Define dialog size.
> The prop accepts following sizes: `lg`, `md`, `sm`, `xs`.

- ***position:*** `String`  `default: top-center`
> Set dialog position into the browser screen.
> Accepted positions: `center-center`, `center-left`, `center-right`, `top-center`, `top-left`, `top-right`, `bottom-center`, `bottom-left`, `bottom-right`

- ***transition:*** `String`  `default: slide-top`
> Set opening and closing transition of the dialog.
> Accepted transitions: `fade`, `zoom`, `slide-top`

- ***containerClass:*** `String`  `default: ''`

- ***contentClass:*** `String`  `default: ''`

- ***contentHeaderClass:*** `String`  `default: ''`

- ***contentInnerClass:*** `String`  `default: ''`

- ***contentFooterClass:*** `String`  `default: ''`
