import{r as s}from"./iframe-D7BbHDbG.js";import{s as a}from"./index-1PNgIuf3.js";import{a as o}from"./policyMigrationComponentConstants-BCnQhr6a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";import"./ShieldCheckIcon-BY_KE66K.js";const A={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button",component:a,parameters:{layout:"padded"}},e={name:"App selection list",render:()=>({components:{PvRadioButton:a},setup(){return{selectedAppId:s("1"),sampleAppList:o}},template:`
      <div class="max-w-md overflow-hidden rounded-sm border border-neutral-default_solid">
        <div
          v-for="app in sampleAppList.slice(0, 4)"
          :key="app.id"
          class="flex items-center gap-sm px-md min-h-10 border-b border-neutral-default_solid last:border-b-0 cursor-pointer hover:bg-neutral-surface"
          @click="selectedAppId = app.id"
        >
          <PvRadioButton
            v-model="selectedAppId"
            :inputId="'app-select-' + app.id"
            name="app-select"
            :value="app.id"
            class="shrink-0"
          />
          <label
            :for="'app-select-' + app.id"
            class="flex-1 cursor-pointer text-body-md text-neutral-base m-0"
          >
            {{ app.name }}
          </label>
        </div>
      </div>
    `})};var t,p,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'App selection list',
  render: () => ({
    components: {
      PvRadioButton: RadioButton
    },
    setup() {
      const selectedAppId = ref('1');
      return {
        selectedAppId,
        sampleAppList
      };
    },
    template: \`
      <div class="max-w-md overflow-hidden rounded-sm border border-neutral-default_solid">
        <div
          v-for="app in sampleAppList.slice(0, 4)"
          :key="app.id"
          class="flex items-center gap-sm px-md min-h-10 border-b border-neutral-default_solid last:border-b-0 cursor-pointer hover:bg-neutral-surface"
          @click="selectedAppId = app.id"
        >
          <PvRadioButton
            v-model="selectedAppId"
            :inputId="'app-select-' + app.id"
            name="app-select"
            :value="app.id"
            class="shrink-0"
          />
          <label
            :for="'app-select-' + app.id"
            class="flex-1 cursor-pointer text-body-md text-neutral-base m-0"
          >
            {{ app.name }}
          </label>
        </div>
      </div>
    \`
  })
}`,...(r=(p=e.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const x=["AppSelectionList"];export{e as AppSelectionList,x as __namedExportsOrder,A as default};
