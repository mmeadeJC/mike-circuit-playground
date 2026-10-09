import{v as n,r as i}from"./iframe-DMCY07cZ.js";import{s as l}from"./index-I-4AEmq6.js";import{s as c,a}from"./index-4qDJp6e0.js";import"./RichText.vue-CvF5yRyM.js";import{_ as s}from"./FormField.vue-C1zJRe6K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-CR_NoeiN.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";const w={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Icon Field",component:a,parameters:{layout:"padded"}},e={name:"Search field",render:()=>({components:{FormField:s,PvIconField:a,PvInputIcon:c,PvInputText:l,MagnifyingGlassIcon:n},setup(){return{searchQuery:i("")}},template:`
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
