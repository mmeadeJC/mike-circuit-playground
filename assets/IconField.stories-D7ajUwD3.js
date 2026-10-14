import{v as n,r as i}from"./iframe-DnhA1Jsm.js";import{s as l}from"./index-DKDggJZ4.js";import{s as c,a}from"./index-BI9VwZ0A.js";import"./RichText.vue-BuoexALv.js";import{_ as s}from"./FormField.vue-mRh6rdEv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-DwERWXoD.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";const w={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Icon Field",component:a,parameters:{layout:"padded"}},e={name:"Search field",render:()=>({components:{FormField:s,PvIconField:a,PvInputIcon:c,PvInputText:l,MagnifyingGlassIcon:n},setup(){return{searchQuery:i("")}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Search applications">
          <template #default="{ inputId }">
            <PvIconField>
              <PvInputIcon>
                <MagnifyingGlassIcon />
              </PvInputIcon>
              <PvInputText
                :id="inputId"
                v-model="searchQuery"
                placeholder="Search"
                class="w-full"
              />
            </PvIconField>
          </template>
        </FormField>
      </div>
    `})};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Search field',
  render: () => ({
    components: {
      FormField,
      PvIconField: IconField,
      PvInputIcon: InputIcon,
      PvInputText: InputText,
      MagnifyingGlassIcon
    },
    setup() {
      const searchQuery = ref('');
      return {
        searchQuery
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Search applications">
          <template #default="{ inputId }">
            <PvIconField>
              <PvInputIcon>
                <MagnifyingGlassIcon />
              </PvInputIcon>
              <PvInputText
                :id="inputId"
                v-model="searchQuery"
                placeholder="Search"
                class="w-full"
              />
            </PvIconField>
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const Q=["SearchField"];export{e as SearchField,Q as __namedExportsOrder,w as default};
