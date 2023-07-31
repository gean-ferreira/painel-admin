<template>
  <button :class="`button ${styleType} ${size}`" @click="onClick" :type="buttonType">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import type { ButtonType, ButtonStyleType, ButtonSize } from '@/types/button'

defineProps({
  styleType: {
    type: String as () => ButtonStyleType,
    default: 'primary'
  },
  size: {
    type: String as () => ButtonSize,
    default: 'full'
  },
  buttonType: {
    type: String as () => ButtonType,
    default: 'button'
  }
})

const emit = defineEmits(['click'])

const onClick = (event: Event) => {
  emit('click', event)
}
</script>

<style scoped lang="scss">
@mixin disabled-button($background, $color) {
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    background-color: $background;
    color: $color;
  }
}

.button {
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  padding: 5px 0;

  @include disabled-button($background: null, $color: null);

  &.primary {
    font-size: 18px;
    background: $grey-4;
    color: white;
  }

  &.full {
    width: 100%;
  }
}
</style>
@/types/button