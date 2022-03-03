<template>
  <v-app>
    <home-app-bar />
    <v-sheet>
      <v-container
        fluid
        :style="{ maxWidth: '1280px'}"
      >
        <home-about />
      </v-container>
    </v-sheet>
    <app-footer />
  </v-app>
</template>
