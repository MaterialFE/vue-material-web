<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

console.log(t('home.material_desc'))
</script>

<template>
  <div class="layout-content">
    <div class="text-center">
      <h1>Vue Material Web</h1>
      <h2>Material Web 组件库 in Vue</h2>
      <router-link to="/components/button">
        <md-filled-button routerLink="">快速上手</md-filled-button>
      </router-link>
    </div>
    <div class="base-tab">
      <a class="base-card" target="_blank" href="https://material.io/">
        <div class="base-card-title">Material</div>
        <div class="base-card-description">
          {{ $t('home.material_desc') }}
        </div>
      </a>
      <a class="base-card" target="_blank" href="https://vuejs.org/">
        <div class="base-card-title">Vue</div>
        <div class="base-card-description">
          {{ $t('home.vue_desc') }}
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-content {
  flex: 1;
  padding: 2rem;
  border-radius: 28px;
  background-color: #ffffff;
  overflow: auto;
}

.base-tab {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.base-card {
  width: 300px;
  background-color: #ebeef3;
  padding: 20px;
  border-radius: 20px;
  color: #000000;

  &:hover {
    background-color: #c2e7ff;
  }
}

.base-card-title {
  font-size: 22px;
}
</style>
