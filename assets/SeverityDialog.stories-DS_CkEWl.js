import{r as s}from"./iframe-wHZiWscM.js";import{s as l}from"./index-sD1-d5gW.js";import"./RichText.vue-CHGMbC98.js";import{_ as a}from"./SeverityDialog.vue-DOZdWb7d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-_1pOB8MI.js";import"./index-DG2sTEJu.js";import"./index-DSxjRmh5.js";import"./index-Box4ManB.js";import"./index-0sOqJRIv.js";import"./index-BZ44v4AP.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./CheckboxWithLabel.vue-Dt-Ksd6A.js";import"./index-CfbwjWnr.js";import"./index-BsadxdHP.js";import"./index-Bx3ApnQM.js";import"./MessageNotification.vue-Cb774PtG.js";import"./index-2F9klpTw.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./FlagIcon-DIzDNC3I.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./useContainer-Bxg-bmhf.js";const U={title:"Circuit DS/Components/SeverityDialog",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["sev1","sev2","sev3"]},visible:{control:"boolean"}}},i={render:n=>({components:{SeverityDialog:a,Button:l},setup(){const e=s(!1);return{args:n,visible:e,handleAction:()=>{console.log("Action confirmed"),e.value=!1}}},template:`
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
