import{r as a}from"./iframe-DnhA1Jsm.js";import{s as p}from"./index-BNbdGjQ1.js";import"./RichText.vue-BuoexALv.js";import{_ as o}from"./FilterModal.vue-e2SetFwu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lNUZEIRs.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-CkUOowPH.js";import"./index-l3Tk4em_.js";import"./index-BB-DZxHZ.js";import"./index-BFiFYGtt.js";import"./index-TOe8dN6-.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-BI9VwZ0A.js";import"./FilterField.vue-D2zupF-a.js";import"./index-C6XQ6gRS.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-C3dwEfyt.js";import"./index-BkS1dZYY.js";import"./index-BNIcB7B5.js";import"./index-DA6MtJit.js";import"./index-BiaoWc9A.js";import"./index-qDFe3kWE.js";import"./index-Ctu82zAg.js";import"./index-BWWQO6Z8.js";import"./index-SGyjFKB5.js";import"./index-DW_gF6rd.js";import"./FormField.vue-mRh6rdEv.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./RadioButtonWithLabel.vue-CRTzEgjq.js";import"./index-DUtpmYFH.js";import"./CheckboxWithLabel.vue-D3KLeAP4.js";import"./useContainer-DkP69mYD.js";import"./FunnelIcon-4QbHURh5.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
