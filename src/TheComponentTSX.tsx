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
  render() {
    return (
      <ul>
        {this.items?.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>
    );
  },
});
