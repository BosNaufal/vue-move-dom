# Vue Move DOM
[Vue](http://vuejs.org) Directive to move the DOM without losing all the VM data, event, etc. it's Adopted from [vue-transfer-dom](https://github.com/rhyzx/vue-transfer-dom) just Simplify it and change some writing behavior

[DEMO](http://codepen.io/BosNaufal/pen/BKLNLN)

## Install
Include the [vue-move-dom.js](./vue-move-dom.js) to your HTML or web page file after [Vue.Js](http://vuejs.org).


## Usage
```html
<div id="app">

  <!-- Will move to body -->
  <button v-move-dom >The Button</button>

  <!--
    Will move to selected element
    the script will be `document.body.querySelector('#there')`
  -->
  <button v-move-dom="#there" >Move Button</button>

</div>
<div id="there"></div>
```

## Thank You for Making this useful~
Hopefully this can be useful for your next projects.


## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
