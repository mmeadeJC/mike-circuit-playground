import{r as a}from"./iframe-D7BbHDbG.js";import{s as t}from"./index-s3VVuEHH.js";import{s}from"./index-BKr2PyJj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-0gxlrFf7.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-DHnCHi6v.js";import"./index-BDr-K8Vc.js";import"./index-CCeEX0h1.js";import"./index-ZhWAdK_X.js";import"./index-5dj8dpAI.js";import"./index-BCWryaxY.js";import"./index-1reqc7Wl.js";const K={title:"Circuit DS/Components/Drawer",component:t,tags:["autodocs"]},i={render:e=>({components:{Drawer:t,Button:s},setup(){const r=a(!1);return{args:e,visible:r}},template:`
      <div>
        <Button label="Open Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer content goes here.</p>
        </Drawer>
      </div>
    `}),args:{header:"Drawer",position:"right",size:"md"}},o={render:e=>({components:{Drawer:t,Button:s},setup(){const r=a(!1);return{args:e,visible:r}},template:`
      <div>
        <Button label="Open Small Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Small drawer (288px).</p>
        </Drawer>
      </div>
    `}),args:{header:"Small Drawer",position:"right",size:"sm"}},l={render:e=>({components:{Drawer:t,Button:s},setup(){const r=a(!1);return{args:e,visible:r}},template:`
      <div>
        <Button label="Open Large Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Large drawer (480px).</p>
        </Drawer>
      </div>
    `}),args:{header:"Large Drawer",position:"right",size:"lg"}},n={render:e=>({components:{Drawer:t,Button:s},setup(){const r=a(!1);return{args:e,visible:r}},template:`
      <div>
        <Button label="Open Extra Large Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Extra large drawer (640px).</p>
        </Drawer>
      </div>
    `}),args:{header:"Extra Large Drawer",position:"right",size:"xl"}},p={render:e=>({components:{Drawer:t,Button:s},setup(){const r=a(!1);return{args:e,visible:r}},template:`
      <div>
        <Button label="Open Left Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer opens from the left.</p>
        </Drawer>
      </div>
    `}),args:{header:"Left Drawer",position:"left",size:"md"}},d={render:e=>({components:{Drawer:t,Button:s},setup(){const r=a(!1);return{args:e,visible:r}},template:`
      <div>
        <Button label="Open Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer content with footer.</p>
          <template #footer>
            <div class="flex gap-sm justify-end">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Drawer>
      </div>
    `}),args:{header:"Drawer with Footer",position:"right",size:"md"}};var c,m,v;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <div>
        <Button label="Open Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer content goes here.</p>
        </Drawer>
      </div>
    \`
  }),
  args: {
    header: 'Drawer',
    position: 'right',
    size: 'md'
  }
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,u,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <div>
        <Button label="Open Small Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Small drawer (288px).</p>
        </Drawer>
      </div>
    \`
  }),
  args: {
    header: 'Small Drawer',
    position: 'right',
    size: 'sm'
  }
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,D,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <div>
        <Button label="Open Large Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Large drawer (480px).</p>
        </Drawer>
      </div>
    \`
  }),
  args: {
    header: 'Large Drawer',
    position: 'right',
    size: 'lg'
  }
}`,...(f=(D=l.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,h,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <div>
        <Button label="Open Extra Large Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Extra large drawer (640px).</p>
        </Drawer>
      </div>
    \`
  }),
  args: {
    header: 'Extra Large Drawer',
    position: 'right',
    size: 'xl'
  }
}`,...(B=(h=n.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var L,y,S;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <div>
        <Button label="Open Left Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer opens from the left.</p>
        </Drawer>
      </div>
    \`
  }),
  args: {
    header: 'Left Drawer',
    position: 'left',
    size: 'md'
  }
}`,...(S=(y=p.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,O,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <div>
        <Button label="Open Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer content with footer.</p>
          <template #footer>
            <div class="flex gap-sm justify-end">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Drawer>
      </div>
    \`
  }),
  args: {
    header: 'Drawer with Footer',
    position: 'right',
    size: 'md'
  }
}`,...(z=(O=d.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const M=["Default","Small","Large","ExtraLarge","LeftPosition","WithFooter"];export{i as Default,n as ExtraLarge,l as Large,p as LeftPosition,o as Small,d as WithFooter,M as __namedExportsOrder,K as default};
