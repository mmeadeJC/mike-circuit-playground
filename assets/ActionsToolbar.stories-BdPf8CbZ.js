import{r}from"./iframe-wHZiWscM.js";import"./RichText.vue-CHGMbC98.js";import{_ as i}from"./ActionsToolbar.vue-De2NtPa-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-cu68_uPv.js";import"./index-DDAh2LOB.js";import"./index-B0f83xA1.js";import"./index-Box4ManB.js";import"./EllipsisHorizontalIcon-BHjLtj66.js";const k={title:"Circuit DS/Components/ActionsToolbar",component:i,tags:["autodocs"],argTypes:{actions:{control:"object"},selectedItems:{control:"object"}}},C=[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate"},{id:"export",label:"Export"},{id:"delete",label:"Delete"}],h=[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate"},{id:"export",label:"Export"},{id:"archive",label:"Archive"},{id:"restore",label:"Restore"},{id:"delete",label:"Delete"}],T=[{id:"1",label:"Device Alpha",description:"Windows 11 • Online"},{id:"2",label:"Device Beta",description:"macOS Sonoma • Offline"},{id:"3",label:"Device Gamma",description:"Ubuntu 22.04 • Online"},{id:"4",label:"Device Delta",description:"Windows 10 • Online"}],s={render:t=>({components:{ActionsToolbar:i},setup(){const e=r(T);return{args:t,selected:e,actionsWithFour:C,onAction:o=>{console.log("Action:",o)},onDeselect:o=>{e.value=e.value.filter(n=>n.id!==o.id)},onClose:()=>{e.value=[]}}},template:`
      <div class="border border-neutral-default_solid rounded-md p-4">
        <ActionsToolbar
          :actions="actionsWithFour"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    `}),args:{}},c={render:t=>({components:{ActionsToolbar:i},setup(){const e=r([{id:"1",label:"Item One",description:"First selected"},{id:"2",label:"Item Two",description:"Second selected"}]);return{args:t,selected:e,overflowActions:h,onAction:o=>{console.log("Action:",o)},onDeselect:o=>{e.value=e.value.filter(n=>n.id!==o.id)},onClose:()=>{e.value=[]}}},template:`
      <div class="border border-neutral-default_solid rounded-md p-4">
        <ActionsToolbar
          :actions="overflowActions"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    `}),args:{}},l={render:t=>({components:{ActionsToolbar:i},setup(){const e=r([]);return{args:t,selected:e,actionsWithFour:C,onAction:o=>{console.log("Action:",o)},onDeselect:o=>{e.value=e.value.filter(n=>n.id!==o.id)},onClose:()=>{e.value=[]}}},template:`
      <div class="border border-neutral-default_solid rounded-md p-4">
        <p class="text-body-md text-neutral-subtle mb-2">Toolbar is hidden when selectedItems is empty.</p>
        <ActionsToolbar
          :actions="actionsWithFour"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    `}),args:{}};var p,u,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionsToolbar
    },
    setup() {
      const selected = ref<SelectedItem[]>(selectedItemsWithLabels);
      const onAction = (action: Action) => {
        console.log('Action:', action);
      };
      const onDeselect = (item: SelectedItem) => {
        selected.value = selected.value.filter(s => s.id !== item.id);
      };
      const onClose = () => {
        selected.value = [];
      };
      return {
        args,
        selected,
        actionsWithFour,
        onAction,
        onDeselect,
        onClose
      };
    },
    template: \`
      <div class="border border-neutral-default_solid rounded-md p-4">
        <ActionsToolbar
          :actions="actionsWithFour"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    \`
  }),
  args: {}
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var A,v,f;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionsToolbar
    },
    setup() {
      const selected = ref<SelectedItem[]>([{
        id: '1',
        label: 'Item One',
        description: 'First selected'
      }, {
        id: '2',
        label: 'Item Two',
        description: 'Second selected'
      }]);
      const onAction = (action: Action) => {
        console.log('Action:', action);
      };
      const onDeselect = (item: SelectedItem) => {
        selected.value = selected.value.filter(s => s.id !== item.id);
      };
      const onClose = () => {
        selected.value = [];
      };
      return {
        args,
        selected,
        overflowActions,
        onAction,
        onDeselect,
        onClose
      };
    },
    template: \`
      <div class="border border-neutral-default_solid rounded-md p-4">
        <ActionsToolbar
          :actions="overflowActions"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    \`
  }),
  args: {}
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var D,g,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionsToolbar
    },
    setup() {
      const selected = ref<SelectedItem[]>([]);
      const onAction = (action: Action) => {
        console.log('Action:', action);
      };
      const onDeselect = (item: SelectedItem) => {
        selected.value = selected.value.filter(s => s.id !== item.id);
      };
      const onClose = () => {
        selected.value = [];
      };
      return {
        args,
        selected,
        actionsWithFour,
        onAction,
        onDeselect,
        onClose
      };
    },
    template: \`
      <div class="border border-neutral-default_solid rounded-md p-4">
        <p class="text-body-md text-neutral-subtle mb-2">Toolbar is hidden when selectedItems is empty.</p>
        <ActionsToolbar
          :actions="actionsWithFour"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    \`
  }),
  args: {}
}`,...(I=(g=l.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const q=["WithActions","OverflowActions","NoSelectedItems"];export{l as NoSelectedItems,c as OverflowActions,s as WithActions,q as __namedExportsOrder,k as default};
