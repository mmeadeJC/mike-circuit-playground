import{r as a}from"./iframe-BF79XtSp.js";import{s as p}from"./index-DR5Ktjtn.js";import"./RichText.vue-CqGWfsH6.js";import{_ as o}from"./FilterModal.vue-Br2-ja8X.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DTZ-8UWl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./index-LSIY3ybW.js";import"./index-Dtk_BLuX.js";import"./index-ADEA_n6J.js";import"./index-PuebpjLD.js";import"./index-K7HfYiQs.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-lST1gP85.js";import"./FilterField.vue-DOW2mm5X.js";import"./index-DMx2X42p.js";import"./index-CR4bzIFl.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-bqWkeg_n.js";import"./index-U54BmgOn.js";import"./index-P-Yy9vDb.js";import"./index-NvGJIH0G.js";import"./index-D43yMZyM.js";import"./index-DckzHriz.js";import"./index-CW9UsunM.js";import"./index-BMgqVpQE.js";import"./index-DccRakCb.js";import"./index-BEsSzt3Y.js";import"./FormField.vue-C69YWs2P.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./RadioButtonWithLabel.vue-BNKUB6ID.js";import"./index-BKhPoeTw.js";import"./CheckboxWithLabel.vue-BXWhMwWQ.js";import"./useContainer-CrNDtG4W.js";import"./FunnelIcon-CZhOYWoP.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
