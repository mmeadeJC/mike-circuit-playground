import{r as s}from"./iframe-CJNlUSJO.js";import{s as l}from"./index-CzaTbvQ5.js";import"./RichText.vue-CLPxRa2P.js";import{_ as a}from"./SeverityDialog.vue-BTVb5b9d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-Cpp0aXdO.js";import"./index-Do-nvtb2.js";import"./index-CcTHBmI2.js";import"./index-B_P4GBGL.js";import"./index-D-nSq33G.js";import"./index-DqMC5tMH.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./CheckboxWithLabel.vue-B3I6fX3T.js";import"./index-Btd800F5.js";import"./index-BBDD1QfU.js";import"./index-CMPzMs76.js";import"./MessageNotification.vue-C83opUOC.js";import"./index-BGmcZnfZ.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./FlagIcon-xEoXMcNx.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./useContainer-B_1ygOmR.js";const U={title:"Circuit DS/Components/SeverityDialog",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["sev1","sev2","sev3"]},visible:{control:"boolean"}}},i={render:n=>({components:{SeverityDialog:a,Button:l},setup(){const e=s(!1);return{args:n,visible:e,handleAction:()=>{console.log("Action confirmed"),e.value=!1}}},template:`
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
