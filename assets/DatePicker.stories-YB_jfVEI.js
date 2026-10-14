import{r as p}from"./iframe-8Q3g4suX.js";import{s}from"./index-ztc7Svxr.js";import{s as c}from"./index-Dq2I2WdB.js";import{s as n}from"./index-BNFKk2Ce.js";import"./RichText.vue-C1Ty82RV.js";import{_ as d}from"./FormField.vue-DPg-U9jM.js";import{t as F}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-OJfjCxM5.js";import"./index-DpCZYySO.js";import"./index-B9TYHysj.js";import"./index-CZrXZwQy.js";import"./index-NkGFgNPM.js";import"./index-DRA9vNfv.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./ShieldCheckIcon-W0AJus9F.js";const H={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Date Picker",component:n,parameters:{layout:"padded"}},e={name:"Time only with timezone",render:()=>({components:{FormField:d,DatePicker:n,PvInputGroup:s,PvInputGroupAddon:c},setup(){return{dailyStartTime:p(null),timezoneLabel:F}},template:`
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
