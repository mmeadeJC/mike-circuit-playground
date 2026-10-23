import{r as a}from"./iframe-DuzLv9Pd.js";import{s as p}from"./index-J_Bj38AC.js";import"./RichText.vue-D4MvUk45.js";import{_ as o}from"./FilterModal.vue-BsKZeYdW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-DlU_MYIi.js";import"./index-CGiVUquh.js";import"./index-b0ySB-5C.js";import"./index-DL1Pt7bO.js";import"./index-DOizLEho.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-CjiEPaTZ.js";import"./FilterField.vue-DdwQjiPE.js";import"./index-CEiioRpE.js";import"./index-D5zH4fN4.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-Brczh--H.js";import"./index-CLqqXC_P.js";import"./index-DnaDt85i.js";import"./index-CFtktJtS.js";import"./index-BcWNlClR.js";import"./index-BemneOh4.js";import"./index-ULr8DkZR.js";import"./index-BEZ2S-VF.js";import"./index-CO-G9M_W.js";import"./index-CkPpOhur.js";import"./FormField.vue-CblrQISo.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./RadioButtonWithLabel.vue-ClgQklTF.js";import"./index-JYiShB9D.js";import"./CheckboxWithLabel.vue-DoqDZu3R.js";import"./useContainer-Do_p2hLC.js";import"./FunnelIcon-CD3UCyXH.js";const it={title:"Circuit DS/Data Table/FilterModal",component:o,tags:["autodocs"]},m=[{id:"name",label:"Name",type:"text",placeholder:"Enter name..."},{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]}],t={render:s=>({components:{FilterModal:o,Button:p},setup(){const l=a(!1);return{args:s,visible:l,basicFilters:m}},template:`
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
