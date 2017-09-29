#   FAB

<p align="center">
<img src="https://media.giphy.com/media/neHUu8DKlgdVK/giphy.gif" />
</p>

Floating Action Button for Vue.

The component supports multiple action buttons so you can add as many actions as you need. It will fire an event to the parent when clicking on each one. 

<a href="https://pygmyslowloris.github.io/vue-fab/"> Live Demo</a>

##  Installation

```
npm install vue-fab --save
```

##  Dependencies

Include the following stylesheets on your document's head

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

And 

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
```

##  Properties

| Properties            | Type      | Values     |
| :---------------      | :-------  | :--------- |
|  `bg-color`           | String    | <b>Default '#333333'</b><br> Accepts all color formats: HEX, RGB & RGBA |
|  `position`           | String    | <b>Default 'bottom-left'</b> <br>Options: 'bottom-left', 'bottom-right', 'top-left','top-right'  |
|  `position-type`           | String    | <b>Default 'fixed'</b> <br>Options: 'fixed' or 'absolute'|
|  `z-index`            | String    | <b>Default '999'</b> <br>Set any value that suits your needs.  |
|  `ripple-show`        | Boolean   | <b>Default true</b> <br>Options: true or false.  |
|  `ripple-color`       | String    | <b>Default 'light'</b> <br>Options: 'light' or 'dark'.  |
|  `icon-size`       | String    | <b>Default 'medium'</b> <br>Options: 'small', 'medium' or 'large'.  |
|  `main-icon`       | String    | <b>Default 'add'</b> <br>Use icons from the material icon library.  |
|  `main-tooltip`       | String    | <b>Default `null`</b>  |
|  `actions`            | Object    | <b>[Details bellow](https://github.com/PygmySlowLoris/vue-fab/#actions)</b>
|  `fixed-tooltip`      | Boolean    | <b>Default 'false'</b><br> if true, it shows the tooltip beside the actions

### actions

| Properties            | Type      | Values            |
| :---------------      | :-------  | :---------        |
|  `name`               | String    | Name of the event |
|  `icon`               | String    | Icon name (Please refer to [Material icons](https://material.io/icons/))        |
|  `tooltip`            | String    | If not used, tooltip won't appear.  |
|  `color`              | String    | <b>Default `bg-color` value</b><br> Accepts all color formats: HEX, RGB & RGBA  |

##  Examples

Include the component in your .vue file, `actions` prop is required for the component to work. The `@event` has to match the name given in the `actions` prop. 
```
<template>
  <fab :actions="fabActions"
       @cache="cache"
       @alertMe="alert"
  ></fab>
</template>
```

Either `color` and `position` are set by default but they can be changed.

```
<fab
   :position="position"
   :bg-color="bgColor"
   :actions="fabActions"
   @cache="cache"
   @alertMe="alert"
></fab>
```

Match your data with your components props. The `bgColor` accepts either HEX, RBG or RGBA format.

<b>Remember:</b> Only material icons are accepted.
```
<script>
import fab from 'vue-fab'

export default {
  components: {
    fab
  },
   data(){
      return {
          bgColor: '#778899',
          position: 'top-right',
          fabActions: [
              {
                  name: 'cache',
                  icon: 'cached'
              },
              {
                  name: 'alertMe',
                  icon: 'add_alert'
              }
          ]
      }
  },
  methods:{
      cache(){
          console.log('Cache Cleared');
      },
      alert(){
          alert('Clicked on alert icon');
      }
  }
}
</script>
```
