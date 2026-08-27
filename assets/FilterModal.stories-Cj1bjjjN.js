import{r as a}from"./iframe-wHZiWscM.js";import{s as p}from"./index-sD1-d5gW.js";import"./RichText.vue-CHGMbC98.js";import{_ as o}from"./FilterModal.vue-pXraaw5U.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-_1pOB8MI.js";import"./index-DG2sTEJu.js";import"./index-DSxjRmh5.js";import"./index-Box4ManB.js";import"./index-0sOqJRIv.js";import"./index-BZ44v4AP.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-B9GWGLe7.js";import"./FilterField.vue-D1-IIo5g.js";import"./index-B52hguGd.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-B0f83xA1.js";import"./index-BCe0KpuU.js";import"./index-CfbwjWnr.js";import"./index-Bx3ApnQM.js";import"./index-CDKqnkXt.js";import"./index-BUW6mAnI.js";import"./index-CvSpjBIh.js";import"./index-BSrPWlqO.js";import"./index-BX58BE5p.js";import"./index-na9Of31q.js";import"./FormField.vue-Di73I2_d.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./RadioButtonWithLabel.vue-CJ5_9OSV.js";import"./index-Btj4TG0i.js";import"./CheckboxWithLabel.vue-Dt-Ksd6A.js";import"./useContainer-Bxg-bmhf.js";import"./FunnelIcon-BdHbE0IY.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
