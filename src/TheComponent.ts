import { defineComponent, type PropType, h, toDisplayString } from 'vue';
import type { Item } from './types';

export interface Props {
  items: Item[];
}

export default defineComponent({
  name: 'TheComponent',
  props: {
    items: Array as PropType<Props['items']>,
  },
  render() {
    return h(
      'ul',
      null,
      this.items?.map((item) => h('li', { key: item.text }, toDisplayString(item.text))),
    );
  },
});
