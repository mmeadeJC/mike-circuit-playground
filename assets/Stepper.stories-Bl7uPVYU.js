import{o as w,c as C,a as M,r as o,m as l}from"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as n}from"./Stepper.vue-B0YVwDfx.js";import{r as D}from"./CloudArrowUpIcon-rponR3Il.js";import{r as k}from"./ShieldCheckIcon-DcBYyFbD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRzHSTwp.js";import"./index-iMZkGNHR.js";import"./index-ZhWAdK_X.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-BiPL9L3R.js";import"./index-Ck1qSbo1.js";import"./index-DgH38Tqr.js";function _(e,t){return w(),C("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"})])}const T={title:"Circuit DS/Components/Stepper",component:n,tags:["autodocs"],argTypes:{vertical:{control:"boolean"},linear:{control:"boolean"},showCancelButton:{control:"boolean"},nextDisabled:{control:"boolean"},saveLabel:{control:"text"}}},c=[{value:"1",label:"Account Setup"},{value:"2",label:"Profile Details"},{value:"3",label:"Confirmation"}],a={render:e=>({components:{Stepper:n},setup(){const t=o("1");return{args:e,activeStep:t,defaultSteps:c}},template:`
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">
            Step 1 content: Configure your account settings.
          </div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">
            Step 2 content: Enter your profile details.
          </div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">
            Step 3 content: Review and confirm your information.
          </div>
        </template>
      </Stepper>
    `}),args:{}},I=[{value:"1",label:"Upload",icon:l(D)},{value:"2",label:"Configure",icon:l(_)},{value:"3",label:"Deploy",icon:l(k)}],s={render:e=>({components:{Stepper:n},setup(){const t=o("1");return{args:e,activeStep:t,stepsWithIcons:I}},template:`
      <Stepper
        :steps="stepsWithIcons"
        v-model:value="activeStep"
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Upload your files here.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Configure deployment options.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Deploy when ready.</div>
        </template>
      </Stepper>
    `}),args:{}},p={render:e=>({components:{Stepper:n},setup(){const t=o("1");return{args:e,activeStep:t,defaultSteps:c}},template:`
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        linear
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Step 1 content.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Step 2 content.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Step 3 content.</div>
        </template>
      </Stepper>
    `}),args:{linear:!0}},r={render:e=>({components:{Stepper:n},setup(){const t=o("1");return{args:e,activeStep:t,defaultSteps:c}},template:`
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        vertical
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Step 1 content.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Step 2 content.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Step 3 content.</div>
        </template>
      </Stepper>
    `}),args:{vertical:!0}};var d,i,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const activeStep = ref('1');
      return {
        args,
        activeStep,
        defaultSteps
      };
    },
    template: \`
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">
            Step 1 content: Configure your account settings.
          </div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">
            Step 2 content: Enter your profile details.
          </div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">
            Step 3 content: Review and confirm your information.
          </div>
        </template>
      </Stepper>
    \`
  }),
  args: {}
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var v,u,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const activeStep = ref('1');
      return {
        args,
        activeStep,
        stepsWithIcons
      };
    },
    template: \`
      <Stepper
        :steps="stepsWithIcons"
        v-model:value="activeStep"
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Upload your files here.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Configure deployment options.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Deploy when ready.</div>
        </template>
      </Stepper>
    \`
  }),
  args: {}
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var b,x,f;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const activeStep = ref('1');
      return {
        args,
        activeStep,
        defaultSteps
      };
    },
    template: \`
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        linear
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Step 1 content.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Step 2 content.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Step 3 content.</div>
        </template>
      </Stepper>
    \`
  }),
  args: {
    linear: true
  }
}`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      const activeStep = ref('1');
      return {
        args,
        activeStep,
        defaultSteps
      };
    },
    template: \`
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        vertical
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Step 1 content.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Step 2 content.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Step 3 content.</div>
        </template>
      </Stepper>
    \`
  }),
  args: {
    vertical: true
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const q=["Default","WithCustomIcons","Linear","Vertical"];export{a as Default,p as Linear,r as Vertical,s as WithCustomIcons,q as __namedExportsOrder,T as default};
