import{r as a}from"./iframe--pVyazG9.js";import{_ as n}from"./CheckboxWithLabel.vue-CXC4U4Hx.js";import"./RichText.vue-BtNuFzRg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTlCJq6I.js";import"./index-BlXOQGTr.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-BEGOK711.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-ZhWAdK_X.js";const j={title:"Circuit DS/Components/CheckboxWithLabel",component:n,tags:["autodocs"],argTypes:{binary:{control:"boolean"},disabled:{control:"boolean"},modelValue:{control:"boolean"}}},r={render:e=>({components:{CheckboxWithLabel:n},setup(){const t=a(!1);return{args:e,checked:t}},template:`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Enable two-factor authentication</template>
        <template #description>Add an extra layer of security to your account by requiring a second verification step.</template>
      </CheckboxWithLabel>
    `}),args:{}},o={render:e=>({components:{CheckboxWithLabel:n},setup(){const t=a(!1);return{args:e,checked:t}},template:`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Remember me</template>
      </CheckboxWithLabel>
    `}),args:{}},c={render:e=>({components:{CheckboxWithLabel:n},setup(){const t=a(null);return{args:e,checked:t}},template:`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Select all items (indeterminate when partially selected)</template>
      </CheckboxWithLabel>
    `}),args:{}},s={render:e=>({components:{CheckboxWithLabel:n},setup(){const t=a(!0);return{args:e,checked:t}},template:`
      <CheckboxWithLabel v-model="checked" :binary="true" disabled>
        <template #label>This option is disabled</template>
        <template #description>You cannot change this setting.</template>
      </CheckboxWithLabel>
    `}),args:{}},l={render:e=>({components:{CheckboxWithLabel:n},setup(){const t=a(!1);return{args:e,checked:t}},template:`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label><strong>Important:</strong> I agree to the terms and conditions</template>
      </CheckboxWithLabel>
    `}),args:{}},i={render:e=>({components:{CheckboxWithLabel:n},setup(){const t=a(!1);return{args:e,checked:t}},template:`
      <CheckboxWithLabel v-model="checked" :binary="true" class="max-w-md">
        <template #label>I understand that enabling this feature will apply changes to all users in my organization and may affect existing integrations with third-party services.</template>
        <template #description>This is a very long description that explains the implications of the checkbox in great detail. It may wrap to multiple lines depending on the container width.</template>
      </CheckboxWithLabel>
    `}),args:{}};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CheckboxWithLabel
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Enable two-factor authentication</template>
        <template #description>Add an extra layer of security to your account by requiring a second verification step.</template>
      </CheckboxWithLabel>
    \`
  }),
  args: {}
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var d,b,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CheckboxWithLabel
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Remember me</template>
      </CheckboxWithLabel>
    \`
  }),
  args: {}
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var k,g,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CheckboxWithLabel
    },
    setup() {
      const checked = ref<boolean | null>(null);
      return {
        args,
        checked
      };
    },
    template: \`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Select all items (indeterminate when partially selected)</template>
      </CheckboxWithLabel>
    \`
  }),
  args: {}
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var L,W,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CheckboxWithLabel
    },
    setup() {
      const checked = ref(true);
      return {
        args,
        checked
      };
    },
    template: \`
      <CheckboxWithLabel v-model="checked" :binary="true" disabled>
        <template #label>This option is disabled</template>
        <template #description>You cannot change this setting.</template>
      </CheckboxWithLabel>
    \`
  }),
  args: {}
}`,...(C=(W=s.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var y,f,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CheckboxWithLabel
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label><strong>Important:</strong> I agree to the terms and conditions</template>
      </CheckboxWithLabel>
    \`
  }),
  args: {}
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,I,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CheckboxWithLabel
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <CheckboxWithLabel v-model="checked" :binary="true" class="max-w-md">
        <template #label>I understand that enabling this feature will apply changes to all users in my organization and may affect existing integrations with third-party services.</template>
        <template #description>This is a very long description that explains the implications of the checkbox in great detail. It may wrap to multiple lines depending on the container width.</template>
      </CheckboxWithLabel>
    \`
  }),
  args: {}
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const F=["WithDescription","WithoutDescription","Indeterminate","Disabled","BoldLabel","LongLabel"];export{l as BoldLabel,s as Disabled,c as Indeterminate,i as LongLabel,r as WithDescription,o as WithoutDescription,F as __namedExportsOrder,j as default};
