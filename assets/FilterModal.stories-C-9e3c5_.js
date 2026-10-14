import{r as a}from"./iframe-600w3n4H.js";import{s as p}from"./index-DAcoo9Zi.js";import"./RichText.vue-CqDMFobT.js";import{_ as o}from"./FilterModal.vue-CDOwU41n.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-eDcuTK2L.js";import"./index-CTl3vUKN.js";import"./index-CC9FbOuz.js";import"./index-DtheA9qo.js";import"./index-Cy7FONXb.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-DosJGK4C.js";import"./FilterField.vue-Puc38Np3.js";import"./index-BuAmHxBs.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-DBXXhGgD.js";import"./index-DVtMRYBu.js";import"./index-DyPrYXuB.js";import"./index-B3TfiOtM.js";import"./index-v8PIUxlP.js";import"./index-DcxJnJl9.js";import"./index-D31t30fN.js";import"./index-CbCGMsrL.js";import"./index-BIOcEsci.js";import"./index-CAvm6cnc.js";import"./FormField.vue-9Bh63gOi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./RadioButtonWithLabel.vue-3WCxtuLm.js";import"./index-Co2ulTVq.js";import"./CheckboxWithLabel.vue-BmE_SJFg.js";import"./useContainer-KG6QsGJY.js";import"./FunnelIcon-rqOm78Ah.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
