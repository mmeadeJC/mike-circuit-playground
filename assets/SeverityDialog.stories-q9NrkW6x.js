import{r as s}from"./iframe-8Q3g4suX.js";import{s as l}from"./index-BdLVtuk9.js";import"./RichText.vue-C1Ty82RV.js";import{_ as a}from"./SeverityDialog.vue-CfijBZPn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-DswaKqI5.js";import"./index-DRA9vNfv.js";import"./index-7zypbFVM.js";import"./index-Bpd14J7o.js";import"./index-BB_hCnE-.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./CheckboxWithLabel.vue-D_gLbPG2.js";import"./index-B6YgWt2p.js";import"./index-MzEPBPaO.js";import"./index-C19gJH8S.js";import"./MessageNotification.vue-Cpg8Rucu.js";import"./index-CXQWPAyu.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./FlagIcon-CTBX6-CL.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./useContainer-Bc2j6_Ia.js";const U={title:"Circuit DS/Components/SeverityDialog",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["sev1","sev2","sev3"]},visible:{control:"boolean"}}},i={render:n=>({components:{SeverityDialog:a,Button:l},setup(){const e=s(!1);return{args:n,visible:e,handleAction:()=>{console.log("Action confirmed"),e.value=!1}}},template:`
      <div>
        <Button label="Open Sev1 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev1"
          dialogTitle="Confirm Action"
          dialogContent="This will **permanently** remove the resource."
          actionText="Delete"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    `}),args:{}},t={render:n=>({components:{SeverityDialog:a,Button:l},setup(){const e=s(!1);return{args:n,visible:e,handleAction:()=>{console.log("Action confirmed"),e.value=!1}}},template:`
      <div>
        <Button label="Open Sev2 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev2"
          dialogTitle="Critical Action"
          messageTitle="Impact Warning"
          messageContent="Service impact may extend to other systems."
          :showMessageIcon="true"
          dialogContent="Please review the **service impact** before continuing."
          actionText="Proceed"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    `}),args:{}},o={render:n=>({components:{SeverityDialog:a,Button:l},setup(){const e=s(!1);return{args:n,visible:e,handleAction:()=>{console.log("Action confirmed"),e.value=!1}}},template:`
      <div>
        <Button label="Open Sev3 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev3"
          dialogTitle="Delete Resource"
          messageTitle="Irreversible Action"
          messageContent="This cannot be undone."
          :showMessageIcon="true"
          :confirmationValue="'DELETE'"
          confirmationText="To proceed, enter <value>."
          acknowledgementText="I understand this action is _irreversible_."
          actionText="Delete"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    `}),args:{}};var c,v,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SeverityDialog,
      Button
    },
    setup() {
      const visible = ref(false);
      const handleAction = () => {
        console.log('Action confirmed');
        visible.value = false;
      };
      return {
        args,
        visible,
        handleAction
      };
    },
    template: \`
      <div>
        <Button label="Open Sev1 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev1"
          dialogTitle="Confirm Action"
          dialogContent="This will **permanently** remove the resource."
          actionText="Delete"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    \`
  }),
  args: {}
}`,...(m=(v=i.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SeverityDialog,
      Button
    },
    setup() {
      const visible = ref(false);
      const handleAction = () => {
        console.log('Action confirmed');
        visible.value = false;
      };
      return {
        args,
        visible,
        handleAction
      };
    },
    template: \`
      <div>
        <Button label="Open Sev2 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev2"
          dialogTitle="Critical Action"
          messageTitle="Impact Warning"
          messageContent="Service impact may extend to other systems."
          :showMessageIcon="true"
          dialogContent="Please review the **service impact** before continuing."
          actionText="Proceed"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    \`
  }),
  args: {}
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,b,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SeverityDialog,
      Button
    },
    setup() {
      const visible = ref(false);
      const handleAction = () => {
        console.log('Action confirmed');
        visible.value = false;
      };
      return {
        args,
        visible,
        handleAction
      };
    },
    template: \`
      <div>
        <Button label="Open Sev3 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev3"
          dialogTitle="Delete Resource"
          messageTitle="Irreversible Action"
          messageContent="This cannot be undone."
          :showMessageIcon="true"
          :confirmationValue="'DELETE'"
          confirmationText="To proceed, enter <value>."
          acknowledgementText="I understand this action is _irreversible_."
          actionText="Delete"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    \`
  }),
  args: {}
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const X=["Sev1","Sev2","Sev3"];export{i as Sev1,t as Sev2,o as Sev3,X as __namedExportsOrder,U as default};
