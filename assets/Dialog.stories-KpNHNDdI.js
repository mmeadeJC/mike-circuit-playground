import{j as o,r}from"./iframe-DSI7I_YQ.js";import{s as a}from"./index-BuLOyT5f.js";import{s as c}from"./index-DdDMkWFP.js";import{s as y}from"./index-B3LPCdXq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BuxjV2Ka.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-Ck6lw9mO.js";import"./index-CZjsJVeR.js";import"./index-Cm1NVGCj.js";import"./index-BxkuIoyf.js";import"./index-ZhWAdK_X.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";const $={title:"Circuit DS/Components/Dialog",component:a,tags:["autodocs"]},l={render:e=>({components:{Dialog:a,Button:c,XMarkIcon:o},setup(){const t=r(!1);return{args:e,visible:t}},template:`
      <div>
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Sample Dialog"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">This is the dialog content. You can put any content here.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `}),args:{}},n={render:e=>({components:{Dialog:a,Button:c,XMarkIcon:o},setup(){const t=r(!1);return{args:e,visible:t}},template:`
      <div>
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Dialog with Footer"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">Dialog body with left-aligned footer text and right-aligned buttons.</p>
          <template #footer>
            <div class="flex items-center w-full">
              <span class="text-body-sm text-neutral-subtle">Optional left content</span>
            </div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Confirm" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `}),args:{}},s={render:e=>({components:{Dialog:a,Button:c,XMarkIcon:o},setup(){const t=r(!1);return{args:e,visible:t}},template:`
      <div>
        <Button label="Open Wide Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Wide Dialog"
          :style="{ width: '720px' }"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">This dialog has a custom width of 720px.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Close" severity="secondary" variant="text" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `}),args:{}},i={render:e=>({components:{Dialog:a,Button:c,Tag:y,XMarkIcon:o},setup(){const t=r(!1);return{args:e,visible:t}},template:`
      <div>
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          v-bind="args"
        >
          <template #header>
            <div class="flex items-center gap-sm">
              <span class="text-heading-3">Custom Header</span>
              <Tag value="New" severity="success" />
            </div>
          </template>
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">Dialog with custom header content using the #header slot.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `}),args:{}};var d,p,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      Button,
      XMarkIcon
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
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Sample Dialog"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">This is the dialog content. You can put any content here.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    \`
  }),
  args: {}
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,g,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      Button,
      XMarkIcon
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
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Dialog with Footer"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">Dialog body with left-aligned footer text and right-aligned buttons.</p>
          <template #footer>
            <div class="flex items-center w-full">
              <span class="text-body-sm text-neutral-subtle">Optional left content</span>
            </div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Confirm" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    \`
  }),
  args: {}
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,f,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      Button,
      XMarkIcon
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
        <Button label="Open Wide Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Wide Dialog"
          :style="{ width: '720px' }"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">This dialog has a custom width of 720px.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Close" severity="secondary" variant="text" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    \`
  }),
  args: {}
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var D,h,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      Button,
      Tag,
      XMarkIcon
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
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          v-bind="args"
        >
          <template #header>
            <div class="flex items-center gap-sm">
              <span class="text-heading-3">Custom Header</span>
              <Tag value="New" severity="success" />
            </div>
          </template>
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">Dialog with custom header content using the #header slot.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    \`
  }),
  args: {}
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const j=["Default","WithFooter","CustomWidth","HeaderSlot"];export{s as CustomWidth,l as Default,i as HeaderSlot,n as WithFooter,j as __namedExportsOrder,$ as default};
