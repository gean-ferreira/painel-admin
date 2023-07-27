<template>
  <router-view v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <section :key="route.path">
        <component :is="Component"></component>
      </section>
    </Transition>
  </router-view>
</template>
