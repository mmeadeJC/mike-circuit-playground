import{r as a}from"./iframe--pVyazG9.js";import{s as p}from"./index-awHdwFoC.js";import"./RichText.vue-BtNuFzRg.js";import{_ as o}from"./FilterModal.vue-DGP1u8FX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6pJfhDGj.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./index-BFHwi_tq.js";import"./index-CtElKYVw.js";import"./index-By2lxUOL.js";import"./index-DDTNvhH8.js";import"./index-BUzjRe-W.js";import"./index-mLzRhsCG.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-BWGkmJ0o.js";import"./FilterField.vue-Df49ynyY.js";import"./index-V_KBkFc6.js";import"./index-BlXOQGTr.js";import"./index-B-BOOr65.js";import"./index-DaGsjZDs.js";import"./index-Cr53P9D2.js";import"./index-esGF_EyX.js";import"./index-BTlCJq6I.js";import"./index-BEGOK711.js";import"./index-CPnASwP1.js";import"./index-uGbhYqvO.js";import"./index-zMWr_mGq.js";import"./index-DCPbTvu2.js";import"./index-8lieu_W4.js";import"./index-CJLJWbi1.js";import"./FormField.vue-DAGeh7uF.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./RadioButtonWithLabel.vue-Dpo1V6ye.js";import"./index-DQv4vshS.js";import"./CheckboxWithLabel.vue-CXC4U4Hx.js";import"./useContainer-BCUrt0t4.js";import"./FunnelIcon-7h7e9gzG.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
