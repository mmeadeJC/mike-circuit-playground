import{r as p}from"./iframe-D7BbHDbG.js";import{s}from"./index-DmIkklSU.js";import{s as c}from"./index-Bj5XdwsE.js";import{s as n}from"./index-0R0WXK1y.js";import"./RichText.vue-1XZLRn0K.js";import{_ as d}from"./FormField.vue-BiV6ZEgt.js";import{t as F}from"./policyMigrationComponentConstants-BCnQhr6a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-oNdbppoo.js";import"./index-BKtZXsJ2.js";import"./index-D1TpkbyC.js";import"./index-CA7vwr87.js";import"./index-DP0gcRj_.js";import"./index-0gxlrFf7.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./ShieldCheckIcon-BY_KE66K.js";const H={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Date Picker",component:n,parameters:{layout:"padded"}},e={name:"Time only with timezone",render:()=>({components:{FormField:d,DatePicker:n,PvInputGroup:s,PvInputGroupAddon:c},setup(){return{dailyStartTime:p(null),timezoneLabel:F}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Daily start time">
          <template #default="{ inputId }">
            <PvInputGroup class="w-full">
              <DatePicker
                :id="inputId"
                v-model="dailyStartTime"
                timeOnly
                fluid
                hourFormat="12"
                placeholder="Select time"
              />
              <PvInputGroupAddon>{{ timezoneLabel }}</PvInputGroupAddon>
            </PvInputGroup>
          </template>
        </FormField>
      </div>
    `})},t={name:"Date range",render:()=>({components:{FormField:d,DatePicker:n},setup(){return{dateRange:p(null)}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Maintenance window">
          <template #default="{ inputId }">
            <DatePicker
              :id="inputId"
              v-model="dateRange"
              selectionMode="range"
              fluid
              placeholder="Select date range"
            />
          </template>
        </FormField>
      </div>
    `})};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Time only with timezone',
  render: () => ({
    components: {
      FormField,
      DatePicker,
      PvInputGroup: InputGroup,
      PvInputGroupAddon: InputGroupAddon
    },
    setup() {
      const dailyStartTime = ref<Date | null>(null);
      return {
        dailyStartTime,
        timezoneLabel
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Daily start time">
          <template #default="{ inputId }">
            <PvInputGroup class="w-full">
              <DatePicker
                :id="inputId"
                v-model="dailyStartTime"
                timeOnly
                fluid
                hourFormat="12"
                placeholder="Select time"
              />
              <PvInputGroupAddon>{{ timezoneLabel }}</PvInputGroupAddon>
            </PvInputGroup>
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Date range',
  render: () => ({
    components: {
      FormField,
      DatePicker
    },
    setup() {
      const dateRange = ref<Date[] | null>(null);
      return {
        dateRange
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Maintenance window">
          <template #default="{ inputId }">
            <DatePicker
              :id="inputId"
              v-model="dateRange"
              selectionMode="range"
              fluid
              placeholder="Select date range"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const J=["TimeOnlyWithTimezone","DateRange"];export{t as DateRange,e as TimeOnlyWithTimezone,J as __namedExportsOrder,H as default};
