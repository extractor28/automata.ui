
<template>
    <div>
        <v-card class="overflow-hidden">
            <v-app-bar
                color="#6A76AB"
                dark
                shrink-on-scroll
                prominent
                src="https://www.xtrafondos.com/wallpapers/nier-automata-3131.jpg"
                fade-img-on-scroll
                scroll-target="#scrolling-techniques-3">
                <!-- <template v-slot:img="{props}">
                    <v-img
                        v-bind="props"
                        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" />
                </template> -->

                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

                <v-toolbar-title>Automata Discord Bot</v-toolbar-title>

                <v-spacer />

                <v-btn
                    color="primary"
                    dark>
                    Invite
                    <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                <v-btn
                    color="primary"
                    dark>
                    Vote
                    <v-icon dark right>mdi-heart</v-icon>
                </v-btn>
                <!-- <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn> -->
                <!-- <div class="text-center">
                    <v-btn
                        rounded
                        color="primary"
                        dark>
                        Rounded Button
                    </v-btn>
                </div> -->

                <template v-slot:extension>
                    <v-tabs align-with-title>
                        <v-tab to="commands-list">Commands</v-tab>
                        <v-tab to="/">About</v-tab>
                        <!-- <v-tab to="/">Tab 3</v-tab> -->
                    </v-tabs>
                </template>
            </v-app-bar>
            <v-sheet
                id="scrolling-techniques-3"
                class="overflow-y-auto"
                max-height="600">
                <v-container />
            </v-sheet>
        </v-card>
        <nuxt />
        <!-- <v-footer
            padless
            dark>
            <v-col
                class="text-center"

                cols="12">
                {{ new Date().getFullYear() }} — <strong>Automata</strong>
            </v-col>
        </v-footer> -->
    </div>
</template>

<script>
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
   "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color:#272727;
}

.text-center {
  text-align: center;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

