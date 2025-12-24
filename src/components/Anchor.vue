<script setup>
    defineProps({
        text: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <a class="border-b border-transparent duration-500 hover:border-b-violet-400 text-violet-400" :href="url" target="_BLANK">{{ text }}</a>
</template>