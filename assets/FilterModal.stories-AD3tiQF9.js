import{r as a}from"./iframe-8Q3g4suX.js";import{s as p}from"./index-BdLVtuk9.js";import"./RichText.vue-C1Ty82RV.js";import{_ as o}from"./FilterModal.vue-D9EAGRLC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-DswaKqI5.js";import"./index-DRA9vNfv.js";import"./index-7zypbFVM.js";import"./index-Bpd14J7o.js";import"./index-BB_hCnE-.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-Us1_uPk3.js";import"./FilterField.vue-C9KloLkD.js";import"./index-DGY9u_rI.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-BL2_KjjI.js";import"./index-C_dd-9yx.js";import"./index-B6YgWt2p.js";import"./index-C19gJH8S.js";import"./index-CN297qaa.js";import"./index-BdbLeFxC.js";import"./index-BNFKk2Ce.js";import"./index-CZrXZwQy.js";import"./index-NkGFgNPM.js";import"./index--9pPmN_v.js";import"./FormField.vue-DPg-U9jM.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./RadioButtonWithLabel.vue-DnjhRrN8.js";import"./index-D8_kzb1y.js";import"./CheckboxWithLabel.vue-D_gLbPG2.js";import"./useContainer-Bc2j6_Ia.js";import"./FunnelIcon-D3WoHsAW.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
