import{r as a}from"./iframe-D7BbHDbG.js";import{s as p}from"./index-BKr2PyJj.js";import"./RichText.vue-1XZLRn0K.js";import{_ as o}from"./FilterModal.vue-BGp5mboD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-DBWVCl5L.js";import"./index-0gxlrFf7.js";import"./index-DHnCHi6v.js";import"./index-BDr-K8Vc.js";import"./index-CCeEX0h1.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-CiXhdmRB.js";import"./FilterField.vue-I0A0JNHQ.js";import"./index-XbhyUeFS.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-DSpYqzCj.js";import"./index-DZLl4wby.js";import"./index-CL0m3nvY.js";import"./index-bbso60R8.js";import"./index-Blxf5QWh.js";import"./index-BmNQnOBp.js";import"./index-0R0WXK1y.js";import"./index-CA7vwr87.js";import"./index-DP0gcRj_.js";import"./index-BWZhuy0c.js";import"./FormField.vue-BiV6ZEgt.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./RadioButtonWithLabel.vue-DUZ-C-BV.js";import"./index-1PNgIuf3.js";import"./CheckboxWithLabel.vue-DmVEARZq.js";import"./useContainer-D49SELwj.js";import"./FunnelIcon-BW6Ml2Am.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
      <div>
        <Button label="Open Filters" @click="visible = true" />
        <FilterModal
          v-model:visible="visible"
          :basicFilters="basicFilters"
          v-bind="args"
          @apply="visible = false"
          @cancel="visible = false"
        />
      </div>
    `}),args:{}};var i,e,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FilterModal,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible,
        basicFilters
      };
    },
    template: \`
      <div>
        <Button label="Open Filters" @click="visible = true" />
        <FilterModal
          v-model:visible="visible"
          :basicFilters="basicFilters"
          v-bind="args"
          @apply="visible = false"
          @cancel="visible = false"
        />
      </div>
    \`
  }),
  args: {}
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const et=["Default"];export{t as Default,et as __namedExportsOrder,it as default};
