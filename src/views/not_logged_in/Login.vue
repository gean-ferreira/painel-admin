<template>
  <div class="login">
    <div class="login__container">
      <HeaderLogoLight />
      <LoginForm />
      <p class="login__copy">
        Desenvolvido pela
        <NameEvodux />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeaderLogoLight, NameEvodux } from '@/components/logos'
import LoginForm from '@/components/forms/LoginForm.vue'
</script>

<style lang="scss" setup>
.login {
  @include flex-center;
  height: 100vh;
  background: linear-gradient($grey-1 0%, $grey-4 100%);
  padding: 0 20px;

  &__container {
    width: 100%;
    max-width: 450px;
  }

  &__copy {
    color: white;
    flex-wrap: wrap;
    @include flex-center;
  }
}
</style>
