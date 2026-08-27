import{r as p}from"./iframe-D7BbHDbG.js";import{s as d}from"./index-BKr2PyJj.js";import{_ as n}from"./CollapsiblePanel.vue-Cecxp7w6.js";import"./RichText.vue-1XZLRn0K.js";import{r as m}from"./EllipsisHorizontalIcon-Dlw4O3VD.js";import{r as X}from"./ArrowLongRightIcon-BI2Oj6S3.js";import{r as u}from"./ArrowsRightLeftIcon-Pd4aurkf.js";import{r as b}from"./ChevronRightIcon-BrFzWSch.js";import{r as Y}from"./FolderIcon-D0BKQmgo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-Z_Cch3ng.js";import"./index-bbso60R8.js";import"./index-DFQPCZRe.js";const Pe={title:"Circuit DS/Components/CollapsiblePanel",component:n,tags:["autodocs"]},Z=`
  <div class="flex items-center justify-center h-36 rounded-md bg-neutral-surface">
    <div class="flex items-center gap-sm text-neutral-ghost">
      <ArrowsRightLeftIcon class="size-4" />
      <span style="font-family:monospace" class="text-body-md">Slot</span>
    </div>
  </div>
`,g=`
  <div class="flex items-center justify-center h-36 rounded-md border border-dashed border-neutral-default_solid">
    <div class="flex items-center gap-sm text-neutral-ghost">
      <ArrowsRightLeftIcon class="size-4" />
      <span style="font-family:monospace" class="text-body-md">Slot</span>
    </div>
  </div>
`,a={render:()=>({components:{CollapsiblePanel:n,Button:d,EllipsisHorizontalIcon:m,ArrowsRightLeftIcon:u,ChevronRightIcon:b},setup(){const e=p(!0),t=p(!1);return{collapsed:e,expanded:t}},template:`
      <div class="flex flex-col gap-md p-lg bg-neutral-surface min-h-screen">

        <!-- ── 1. Default (non-toggleable) ────────────────────────────────── -->
        <CollapsiblePanel header="Panel Header">
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>

          ${Z}
        </CollapsiblePanel>

        <!-- ── 2. Expandable — collapsed state (chevron-right) ─────────────── -->
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="collapsed"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>

          ${g}
        </CollapsiblePanel>

        <!-- ── 3. Expandable — expanded state (chevron rotates down) ────────── -->
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="expanded"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>

          ${g}
        </CollapsiblePanel>

      </div>
    `})},l={render:e=>({components:{CollapsiblePanel:n,Button:d,EllipsisHorizontalIcon:m,ArrowsRightLeftIcon:u},setup(){return{args:e}},template:`
      <div class="p-lg bg-neutral-surface">
        <CollapsiblePanel header="Panel Header" v-bind="args">
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>
          <div class="flex items-center justify-center h-36 rounded-md bg-neutral-surface">
            <div class="flex items-center gap-sm text-neutral-ghost">
              <ArrowsRightLeftIcon class="size-4" />
              <span style="font-family:monospace" class="text-body-md">Slot</span>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    `}),args:{}},s={render:e=>({components:{CollapsiblePanel:n,Button:d,EllipsisHorizontalIcon:m,ArrowsRightLeftIcon:u,ChevronRightIcon:b},setup(){const t=p(!0);return{args:e,collapsed:t}},template:`
      <div class="p-lg bg-neutral-surface">
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="collapsed"
          v-bind="args"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>
          <div class="flex items-center justify-center h-36 rounded-md border border-dashed border-neutral-default_solid">
            <div class="flex items-center gap-sm text-neutral-ghost">
              <ArrowsRightLeftIcon class="size-4" />
              <span style="font-family:monospace" class="text-body-md">Slot</span>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    `}),args:{}},o={render:e=>({components:{CollapsiblePanel:n,Button:d,EllipsisHorizontalIcon:m,ArrowsRightLeftIcon:u,ChevronRightIcon:b},setup(){const t=p(!1);return{args:e,collapsed:t}},template:`
      <div class="p-lg bg-neutral-surface">
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="collapsed"
          v-bind="args"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>
          <div class="flex items-center justify-center h-36 rounded-md border border-dashed border-neutral-default_solid">
            <div class="flex items-center gap-sm text-neutral-ghost">
              <ArrowsRightLeftIcon class="size-4" />
              <span style="font-family:monospace" class="text-body-md">Slot</span>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    `}),args:{}},r={render:e=>({components:{CollapsiblePanel:n,FolderIcon:Y},setup(){return{args:e}},template:`
      <CollapsiblePanel header="Documents" v-bind="args">
        <template #titleicon="iconProps">
          <FolderIcon :class="iconProps.class" />
        </template>
        <p class="text-body-md text-neutral-base">
          Panel with a folder icon in the title area.
        </p>
      </CollapsiblePanel>
    `}),args:{}},i={render:e=>({components:{CollapsiblePanel:n,ArrowLongRightIcon:X},setup(){return{args:e,onPanelClick:()=>console.log("Panel clicked")}},template:`
      <CollapsiblePanel
        clickable
        header="Clickable Panel"
        @click="onPanelClick"
        v-bind="args"
      >
        <template #actions>
          <ArrowLongRightIcon class="size-5 text-neutral-subtle" />
        </template>
        <p class="text-body-md text-neutral-base">
          The entire panel is clickable — hover to see the state change.
        </p>
      </CollapsiblePanel>
    `}),args:{}},c={render:e=>({components:{CollapsiblePanel:n},setup(){return{args:e}},template:`
      <CollapsiblePanel
        header="This is a very long panel header that will overflow onto the next line when the container width is constrained"
        v-bind="args"
      >
        <p class="text-body-md text-neutral-base">
          Panel content with a long header that wraps to multiple lines.
        </p>
      </CollapsiblePanel>
    `}),args:{}};var h,v,f,P,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CollapsiblePanel,
      Button,
      EllipsisHorizontalIcon,
      ArrowsRightLeftIcon,
      ChevronRightIcon
    },
    setup() {
      const collapsed = ref(true);
      const expanded = ref(false);
      return {
        collapsed,
        expanded
      };
    },
    template: \`
      <div class="flex flex-col gap-md p-lg bg-neutral-surface min-h-screen">

        <!-- ── 1. Default (non-toggleable) ────────────────────────────────── -->
        <CollapsiblePanel header="Panel Header">
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>

          \${SLOT_PLACEHOLDER_DEFAULT}
        </CollapsiblePanel>

        <!-- ── 2. Expandable — collapsed state (chevron-right) ─────────────── -->
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="collapsed"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>

          \${SLOT_PLACEHOLDER_DASHED}
        </CollapsiblePanel>

        <!-- ── 3. Expandable — expanded state (chevron rotates down) ────────── -->
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="expanded"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>

          \${SLOT_PLACEHOLDER_DASHED}
        </CollapsiblePanel>

      </div>
    \`
  })
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:`All three panel variants shown together, exactly matching the Figma design:
1. **Default** – always-visible content, action buttons in header
2. **Expandable Collapsed** – chevron-right, content hidden
3. **Expandable Expanded** – chevron-down, content revealed with dashed slot`,...(y=(P=a.parameters)==null?void 0:P.docs)==null?void 0:y.description}}};var C,x,z,I,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CollapsiblePanel,
      Button,
      EllipsisHorizontalIcon,
      ArrowsRightLeftIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="p-lg bg-neutral-surface">
        <CollapsiblePanel header="Panel Header" v-bind="args">
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>
          <div class="flex items-center justify-center h-36 rounded-md bg-neutral-surface">
            <div class="flex items-center gap-sm text-neutral-ghost">
              <ArrowsRightLeftIcon class="size-4" />
              <span style="font-family:monospace" class="text-body-md">Slot</span>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    \`
  }),
  args: {}
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source},description:{story:"Default panel — content always visible, no toggle.",...(B=(I=l.parameters)==null?void 0:I.docs)==null?void 0:B.description}}};var E,L,w,H,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CollapsiblePanel,
      Button,
      EllipsisHorizontalIcon,
      ArrowsRightLeftIcon,
      ChevronRightIcon
    },
    setup() {
      const collapsed = ref(true);
      return {
        args,
        collapsed
      };
    },
    template: \`
      <div class="p-lg bg-neutral-surface">
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="collapsed"
          v-bind="args"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>
          <div class="flex items-center justify-center h-36 rounded-md border border-dashed border-neutral-default_solid">
            <div class="flex items-center gap-sm text-neutral-ghost">
              <ArrowsRightLeftIcon class="size-4" />
              <span style="font-family:monospace" class="text-body-md">Slot</span>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    \`
  }),
  args: {}
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:"Expandable panel starting in the **collapsed** state (chevron points right).",...(R=(H=s.parameters)==null?void 0:H.docs)==null?void 0:R.description}}};var A,S,D,_,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CollapsiblePanel,
      Button,
      EllipsisHorizontalIcon,
      ArrowsRightLeftIcon,
      ChevronRightIcon
    },
    setup() {
      const collapsed = ref(false);
      return {
        args,
        collapsed
      };
    },
    template: \`
      <div class="p-lg bg-neutral-surface">
        <CollapsiblePanel
          header="Panel Header"
          toggleable
          v-model:collapsed="collapsed"
          v-bind="args"
        >
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button label="Button Label" size="small" severity="secondary" variant="outlined" />
            <Button size="small" severity="secondary" variant="outlined" aria-label="More options">
              <template #icon><EllipsisHorizontalIcon class="size-4" /></template>
            </Button>
          </template>
          <div class="flex items-center justify-center h-36 rounded-md border border-dashed border-neutral-default_solid">
            <div class="flex items-center gap-sm text-neutral-ghost">
              <ArrowsRightLeftIcon class="size-4" />
              <span style="font-family:monospace" class="text-body-md">Slot</span>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    \`
  }),
  args: {}
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"Expandable panel starting in the **expanded** state (chevron points down).",...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};var T,M,O,$,F;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CollapsiblePanel,
      FolderIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CollapsiblePanel header="Documents" v-bind="args">
        <template #titleicon="iconProps">
          <FolderIcon :class="iconProps.class" />
        </template>
        <p class="text-body-md text-neutral-base">
          Panel with a folder icon in the title area.
        </p>
      </CollapsiblePanel>
    \`
  }),
  args: {}
}`,...(O=(M=r.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"Panel with a title icon and real content.",...(F=($=r.parameters)==null?void 0:$.docs)==null?void 0:F.description}}};var j,U,W,q,G;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CollapsiblePanel,
      ArrowLongRightIcon
    },
    setup() {
      const onPanelClick = () => console.log('Panel clicked');
      return {
        args,
        onPanelClick
      };
    },
    template: \`
      <CollapsiblePanel
        clickable
        header="Clickable Panel"
        @click="onPanelClick"
        v-bind="args"
      >
        <template #actions>
          <ArrowLongRightIcon class="size-5 text-neutral-subtle" />
        </template>
        <p class="text-body-md text-neutral-base">
          The entire panel is clickable — hover to see the state change.
        </p>
      </CollapsiblePanel>
    \`
  }),
  args: {}
}`,...(W=(U=i.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"Entire panel is clickable — hover styles apply to the whole card.",...(G=(q=i.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var J,K,N,Q,V;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CollapsiblePanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CollapsiblePanel
        header="This is a very long panel header that will overflow onto the next line when the container width is constrained"
        v-bind="args"
      >
        <p class="text-body-md text-neutral-base">
          Panel content with a long header that wraps to multiple lines.
        </p>
      </CollapsiblePanel>
    \`
  }),
  args: {}
}`,...(N=(K=c.parameters)==null?void 0:K.docs)==null?void 0:N.source},description:{story:"Header text that wraps to multiple lines.",...(V=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};const ye=["FigmaShowcase","Default","ExpandableCollapsed","ExpandableExpanded","WithTitleIcon","Clickable","LongHeader"];export{i as Clickable,l as Default,s as ExpandableCollapsed,o as ExpandableExpanded,a as FigmaShowcase,c as LongHeader,r as WithTitleIcon,ye as __namedExportsOrder,Pe as default};
