<template>

  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Command</th>
          <th class="text-left">Description</th>
          <th class="text-left">Requires</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in commands" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.requires }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import commands from '~/commands.json'

  export default {
        props: {
        activeSection: String,
    },
    data () {
      return { commands }
    },
    computed: { 

    },
    created() {
       this.commands = this.commands.filter((c) => c.section === this.activeSection)
      //  console.log(this.activeSection)
    },
  }
</script>
