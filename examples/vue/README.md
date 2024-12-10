# VueJs 3.x Example of a Speed Highlight Component

## Install

```console
$ pnpm i @speed-highlight/core
```

## SpeedHighlight.vue

This is a simple component that wraps `speed-highlight` and makes it easier to use in your Vue app.
It takes two props: `content` & `lang` - and you can include it in your pages like this:

```vue
<SpeedHighlight content="printf('Hello World!\n');" lang="c" />
```

## App.vue

Simplified example page/parent, to show how you include `<SpeedHighlight />` on a page.
