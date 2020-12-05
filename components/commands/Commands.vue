<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Command</th>
                    <th class="text-left">Description: ru</th>
                    <th class="text-left">Description: en</th>
                    <th class="text-left">Argument</th>
                    <th class="text-left">Requires</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in commands"
                    :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.descriptionRu }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.args }}</td>
                    <td>{{ item.requires }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
// import commands from '~/commands.json'

export default {
    props: {
        activeSection: String,
    },
    async fetch() {
        // const response = await fetch('http://localhost:5000/commands');
        // this.commands = await response.json();
        // this.commands = this.commands.filter((c) => c.section === this.activeSection);
    },
    data() {
        return {
            commands: [],
        };
    },
    // async created() {
    //   console.log(this.commands)
    //   this.commands = this.commands.filter((c) => c.section === this.activeSection)
    // },
};
</script>
