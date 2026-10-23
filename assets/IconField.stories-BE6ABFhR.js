import{v as n,r as i}from"./iframe-DuzLv9Pd.js";import{s as l}from"./index-BXhsDisi.js";import{s as c,a}from"./index-CjiEPaTZ.js";import"./RichText.vue-D4MvUk45.js";import{_ as s}from"./FormField.vue-CblrQISo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BuiD5gzs.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";const w={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Icon Field",component:a,parameters:{layout:"padded"}},e={name:"Search field",render:()=>({components:{FormField:s,PvIconField:a,PvInputIcon:c,PvInputText:l,MagnifyingGlassIcon:n},setup(){return{searchQuery:i("")}},template:`
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
