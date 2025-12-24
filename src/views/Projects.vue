<script setup>
    import Anchor from '@/components/Anchor.vue';

    const projects = [
        {
            'image': new URL('@/assets/img/projects/alumni.png', import.meta.url).href,
            'title': 'Alumni Tracer System',

            technologies: ['Laravel 12'],

            links: [
                { url: 'https://github.com/Cleinentine/alumni', text: 'GitHub' }
            ]
        }
    ]
</script>

<template>
    <article class="my-50 text-center">
        <section class="h-screen" v-for="project in projects">
            <img alt="Alumni Tracer System" :src="project.image" />

            <h2 class="font-black mt-5 text-4xl">{{ project.title }}</h2>

            <ul class="my-1.5 text-rose-400">
                <li class="inline-block mx-2" v-for="(technology, tIndex) in project.technologies" :key="tIndex">
                    {{ technology }}
                </li>
            </ul>

            <ul>
                <li class="inline-block mx-2" v-for="(link, lIndex) in project.links" :key="lIndex">
                    <Anchor
                        :text="link.text"
                        :url="link.url"
                    />
                </li>
            </ul>
        </section>
    </article>
</template>