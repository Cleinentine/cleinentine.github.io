<script setup>
    import Anchor from '@/components/Anchor.vue';

    const networks = [
        {
            title: 'Networks',
            links: [
              { url: 'mailto:cleinentine@gmail.com', text: 'cleinentine@gmail.com' },
              { url: 'https://facebook.com/Cleinentine/', text: 'Facebook' },
              { url: 'https://github.com/Cleinentine/', text: 'GitHub' }
          ]
        }
    ]

    const services = [
      {
        title: 'Skills & Focus',
        lists: [
          'Laravel',
          'Livewire',
          'Vue',
        ]
      },

      {
        title: 'Experience',
        lists: [
          'OJT at NEDA Region 2',
        ],
        subLists: [
          'Mar 2019 - May 2019'
        ]
      }
    ]
</script>

<template>
  <section class="gap-5 grid md:grid-cols-3 md:text-left my-50 text-center">
    <div v-for="(network, nIndex) in networks" :key="nIndex">
      <h2 class="font-light mb-10 text-gray-500 uppercase">
        {{ network.title }}
      </h2>

      <ul>
        <li class="mt-1.5" v-for="(item, index) in network.links" :key="index">
          <Anchor
            :text="item.text"
            :url="item.url"
          />
        </li>
      </ul>
    </div>

    <div v-for="(service, sIndex) in services" :key="sIndex">
      <h2 class="font-light mb-10 text-gray-500 uppercase">
        {{ service.title }}
      </h2>

      <ul>
        <li class="mt-1.5" v-for="(item, lIndex) in service.lists" :key="lIndex">
          {{ item }}

          <span class="block text-gray-400 text-xs uppercase" v-for="(subItem, sLIndex) in service.subLists" :key="sLIndex">
            {{ subItem }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>