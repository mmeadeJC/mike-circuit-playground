import{r as a}from"./iframe-BFKWv3KJ.js";import{s as p}from"./index-CtfEZ-mH.js";import"./RichText.vue-vrSf4OCs.js";import{_ as o}from"./FilterModal.vue-Ckku0qSW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-DynKogrQ.js";import"./index-2n8eVSrk.js";import"./index-CiP5ygH7.js";import"./index-BoZ1l_-u.js";import"./index-CG-J9OXr.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-D77ELRyA.js";import"./FilterField.vue-BuAr51tP.js";import"./index-CuXoLfeA.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-D_AG_8rG.js";import"./index-CIkrppRN.js";import"./index-D6YUBXg4.js";import"./index-DdAbza1U.js";import"./index-D7_QFsMT.js";import"./index--0ujXtkk.js";import"./index-CnGO8sn3.js";import"./index-bbn6QzYu.js";import"./index-CFp6THYW.js";import"./index-C2dBPncu.js";import"./FormField.vue-CsyFfyrv.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./RadioButtonWithLabel.vue-CuOz2Tom.js";import"./index-CXxQSp7k.js";import"./CheckboxWithLabel.vue-BFy88Znm.js";import"./useContainer-BRiKvAwH.js";import"./FunnelIcon-Dd6Vil59.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
