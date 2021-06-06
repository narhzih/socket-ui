<template>
  <div class="app">
    <left-sidebar></left-sidebar>
    <app-main></app-main>
  </div>
</template>

<script>
import LeftSidebar from './components/sidebar/LeftSidebar';
import AppMain from './AppMain';
export default {
  name: 'Base',
  components: { AppMain, LeftSidebar },
};
</script>

<style scoped></style>
