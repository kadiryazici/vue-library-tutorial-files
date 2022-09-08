<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Item } from './types';

export interface Props {
  items: Item[];
}

export default defineComponent({
  name: 'TheComponent',
  props: {
    items: Array as PropType<Props['items']>,
  },
});
</script>

<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.text"
    >
      {{ item.text }}
    </li>
  </ul>
</template>
