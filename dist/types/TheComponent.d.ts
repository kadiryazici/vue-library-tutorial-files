import { type PropType } from 'vue';
import type { Item } from './types';
export interface Props {
    items: Item[];
}
declare const _default: import("vue").DefineComponent<{
    items: PropType<Item[]>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: PropType<Item[]>;
}>>, {}>;
export default _default;
