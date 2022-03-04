<template>
  <v-app>
    <home-app-bar
      :menus="menus"
      :img-height="imgHeight"
    />
    <v-img
      id="scroll-top"
      dark
      src="https://picsum.photos/id/145/1920/1080?blur=4"
      :height="imgHeight"
    >
      <v-row
        align="center"
        justify="center"
        :style="{ height: `${imgHeight}px` }"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <h1
            class="display-1 mb-4"
          >
            好きな歌をもっと好きになろう
          </h1>
          <h4
            class="subheading"
            :style="{ letterSpacing: '5px' }"
          >
            歌詞の感想、考察、共有サイト
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <v-sheet>
      <v-container
        fluid
        :style="{ maxWidth: '1280px'}"
      >
        <v-row
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
          <v-col
            :id="menu.title"
            cols="12"
          >
            <div
              :is="`home-${menu.title}`"
            />
            <v-card flat>
              <v-card-title
                class="justify-center display-1"
              >
                {{ $t(`menus.${menu.title}`) }}
              </v-card-title>
              <v-card-text
                class="text-center"
              >
                {{ menu.subtitle }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <app-footer />
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      imgHeight: 500,
      menus: [
        { title: 'about', subtitle: 'このサイトはポートフォリオです' },
        { title: 'howto', subtitle: 'このサイトはこうやって使います' }
      ]
    }
  }
}
</script>
