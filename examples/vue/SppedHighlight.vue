<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue'
import { highlightText } from '@speed-highlight/core'
import '@speed-highlight/core/dist/themes/default.css'

const { content = '', lang = 'c' } = defineProps<{ content: string; lang: string }>()

const highlightedCode = ref('')

onMounted(async () => {
    highlightedCode.value = await highlightText(content, lang)
})
</script>

<template>
  <div :class="`shj-lang-${lang}`" v-html="highlightedCode"></div>
</template>