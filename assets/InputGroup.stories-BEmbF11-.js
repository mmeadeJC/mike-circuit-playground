import{r as i}from"./iframe-D7BbHDbG.js";import{s as r}from"./index-DmIkklSU.js";import{s as p}from"./index-Bj5XdwsE.js";import{s as m}from"./index-0R0WXK1y.js";import"./RichText.vue-1XZLRn0K.js";import{_ as d}from"./FormField.vue-BiV6ZEgt.js";import{t as a}from"./policyMigrationComponentConstants-BCnQhr6a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-oNdbppoo.js";import"./index-BKtZXsJ2.js";import"./index-D1TpkbyC.js";import"./index-CA7vwr87.js";import"./index-DP0gcRj_.js";import"./index-0gxlrFf7.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./ShieldCheckIcon-BY_KE66K.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Group",component:r,parameters:{layout:"padded"}},e={name:"With timezone addon",render:()=>({components:{FormField:d,DatePicker:m,PvInputGroup:r,PvInputGroupAddon:p},setup(){return{enforcementDeadline:i(null),timezoneLabel:a}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Enforcement deadline">
          <template #default="{ inputId }">
            <PvInputGroup class="w-full">
              <DatePicker
                :id="inputId"
                v-model="enforcementDeadline"
                fluid
                showTime
                hourFormat="12"
                placeholder="Select deadline"
              />
              <PvInputGroupAddon>{{ timezoneLabel }}</PvInputGroupAddon>
            </PvInputGroup>
          </template>
        </FormField>
      </div>
    `})};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'With timezone addon',
  render: () => ({
    components: {
      FormField,
      DatePicker,
      PvInputGroup: InputGroup,
      PvInputGroupAddon: InputGroupAddon
    },
    setup() {
      const enforcementDeadline = ref<Date | null>(null);
      return {
        enforcementDeadline,
        timezoneLabel
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Enforcement deadline">
          <template #default="{ inputId }">
            <PvInputGroup class="w-full">
              <DatePicker
                :id="inputId"
                v-model="enforcementDeadline"
                fluid
                showTime
                hourFormat="12"
                placeholder="Select deadline"
              />
              <PvInputGroupAddon>{{ timezoneLabel }}</PvInputGroupAddon>
            </PvInputGroup>
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const q=["WithTimezoneAddon"];export{e as WithTimezoneAddon,q as __namedExportsOrder,O as default};
