var Lister=function(o,e){"use strict";const p=e.defineComponent({name:"TheComponent",props:{items:Array}}),a=(t,n)=>{const r=t.__vccOpts||t;for(const[l,s]of n)r[l]=s;return r};function m(t,n,r,l,s,C){return e.openBlock(),e.createElementBlock("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.items,c=>(e.openBlock(),e.createElementBlock("li",{key:c.text},e.toDisplayString(c.text),1))),128))])}const i=a(p,[["render",m]]),d=e.defineComponent({name:"TheComponent",props:{items:Array},render(){var t;return e.h("ul",null,(t=this.items)==null?void 0:t.map(n=>e.h("li",{key:n.text},e.toDisplayString(n.text))))}}),h=e.defineComponent({name:"TheComponent",props:{items:Array},render(){var t;return e.createVNode("ul",null,[(t=this.items)==null?void 0:t.map(n=>e.createVNode("li",{key:n.text},[n.text]))])}}),T="";return o.TheComponent=i,o.TheComponentTS=d,o.TheComponentTSX=h,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),o}({},Vue);
