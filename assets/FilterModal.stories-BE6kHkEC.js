import{r as a}from"./iframe-DSI7I_YQ.js";import{s as p}from"./index-DdDMkWFP.js";import"./RichText.vue-DARNTLdh.js";import{_ as o}from"./FilterModal.vue-Cf8ioLRO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-BuLOyT5f.js";import"./index-BuxjV2Ka.js";import"./index-Ck6lw9mO.js";import"./index-CZjsJVeR.js";import"./index-BxkuIoyf.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-DsdYTbg9.js";import"./FilterField.vue-Ch7VSPWG.js";import"./index-B2CuMtSM.js";import"./index-16iY2v2i.js";import"./index-CD_7J42F.js";import"./index-EU9vbBWi.js";import"./index-CxxjhJ-R.js";import"./index-DPUA2Kqt.js";import"./index-CwS7Mw-8.js";import"./index-Byho_yNF.js";import"./index-HxTnj3va.js";import"./index-BfO8N2P2.js";import"./index-B-tSyprP.js";import"./index-B89_K_JM.js";import"./index-KUyW3X8b.js";import"./index-CpNuXlBN.js";import"./FormField.vue-DvIDnTXZ.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";import"./RadioButtonWithLabel.vue-DvlmHOBi.js";import"./index-C03-JXXY.js";import"./CheckboxWithLabel.vue-DGxWw3fq.js";import"./useContainer-fllqqkML.js";import"./FunnelIcon-D794Vtkm.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
