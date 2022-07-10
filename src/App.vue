<template>
  <main class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <xb-sidebar />
      
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </main>
</template>

<script>
import XbSidebar from './components/shared/xb-sidebar/XbSidebar.vue'

export default {
  components: {
    XbSidebar
  }
}
</script>
