import{r as s}from"./iframe-CrzTiCu6.js";import{s as l}from"./index-DGRV0ejT.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as a}from"./SeverityDialog.vue-DAxLSjJw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-CXMkhyA-.js";import"./index-DHkFNkeW.js";import"./index-BaGPKY7N.js";import"./index-Bli4s4Lb.js";import"./index-DUgv6TgD.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./CheckboxWithLabel.vue-BCoIi1Rw.js";import"./index-B5AAKPzU.js";import"./index-B9HYPvme.js";import"./index-DBMnBcxB.js";import"./MessageNotification.vue-D2EvCuUd.js";import"./index-DB_TaPch.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./FlagIcon-DgAIV7Qg.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./useContainer-V_XjkKmd.js";const U={title:"Circuit DS/Components/SeverityDialog",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["sev1","sev2","sev3"]},visible:{control:"boolean"}}},i={render:n=>({components:{SeverityDialog:a,Button:l},setup(){const e=s(!1);return{args:n,visible:e,handleAction:()=>{console.log("Action confirmed"),e.value=!1}}},template:`
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
