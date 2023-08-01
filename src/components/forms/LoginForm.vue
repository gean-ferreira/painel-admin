<template>
  <Form class="login__form" @submit="submitForm" v-slot="{ meta, errors }">
    <div class="login__field-container">
      <Field
        type="text"
        placeholder="Login"
        name="login"
        rules="required|email"
        :class="{ 'input-error': errors.login }"
      />
      <ErrorMessage name="login" />
    </div>
    <div class="login__field-container">
      <Field
        :type="showPassword ? 'text' : 'password'"
        placeholder="Senha"
        name="password"
        rules="required|password"
        :class="{ 'input-error': errors.password }"
      />
      <EyeIcon
        class="eye-icon"
        @click="showPassword = !showPassword"
        :show-password="showPassword"
      />
      <ErrorMessage name="password" />
    </div>
    <Button class="login__btn-submit" :disabled="!meta.valid" :button-type="'submit'">
      Entrar
    </Button>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EyeIcon from '@/components/icons/EyeIcon.vue'
import Button from '@/components/Button.vue'

const showPassword = ref(false)
const submitForm = (values: object) => {
  console.log(values)
  alert('Login efetuado com sucesso!')
}
</script>

<style lang="scss" setup>
.login {
  &__form {
    margin: 30px 0 50px 0;
  }

  &__field-container {
    position: relative;
    margin-bottom: 20px;

    input {
      width: 100%;
      padding: 5px;
      color: white;
      border-bottom: 1px solid white;
      background: none;

      &::placeholder {
        color: white;
        opacity: 0.6;
      }
    }

    .eye-icon {
      position: absolute;
      top: 7px;
      right: 7px;
    }

    .input-error {
      border-color: $error;
    }

    span[role='alert'] {
      @include responsive-prop('font-size', 14px, 16px);
      color: $error;
    }
  }

  &__btn-submit {
    margin-top: 15px;
  }
}
</style>
