<template>
  <div>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
         <commands :activeSection="item"/>
        <!-- <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card> -->
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </div>
</template>

<script>
import Commands from '~/components/Commands.vue'
// import Tabs from '~/components/Tabs.vue'
// import commands from '~/commands.json'

export default {
  components: {
    Commands,
    // Tabs
  },
      data () {
      return {
        tab: null,
        activeSection: 'music',
        // commands,
        items: [
          'music',
          'fun',
          'settings',
          'nsfw',
          'other',
          // { tab: 'music', content: 'Tab 1 Content' },
          // { tab: 'fun', content: 'Tab 2 Content' },
          // { tab: 'settings', content: 'Tab 3 Content' },
          // { tab: 'nsfw', content: 'Tab 4 Content' },
          // { tab: 'other', content: 'Tab 5 Content' },
        ],
      }
    },
    // created() {
    //   const sections = []
    //   for (const command of this.commands) {
    //     if (!sections.includes(command.section)) {
    //      sections.push(command.section)
    //     }
    //   }
    //   this.items = sections
    //   console.log(sections)
    // },
}
</script>

<style>
</style>

