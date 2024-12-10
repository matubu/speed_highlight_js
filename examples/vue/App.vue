<script setup lang="ts">
import SpeedHighlight from 'SpeedHighlight.vue'

import { ref } from 'vue'

const myCode = ref(`printf('Hello World!\n');`)
const myLang = ref('c')
</script>

<template>
    <p>Here is a the example code:</p>
    <SpeedHighlight :content="myCode" :lang="myLang" />
</template>