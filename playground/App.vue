<script lang="ts" setup>
import { TheComponent } from 'lister';

const myItems = [
  { text: 'Ekmek al' }, //
  { text: 'Yardım götür maske yardımı' },
  { text: 'Eldiven giy' },
];
</script>

<template>
  <TheComponent :items="myItems" />
</template>
