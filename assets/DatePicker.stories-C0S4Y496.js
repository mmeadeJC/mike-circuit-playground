import{r as p}from"./iframe-DnhA1Jsm.js";import{s}from"./index-SgYvnJJP.js";import{s as c}from"./index-C-pFVPj_.js";import{s as n}from"./index-Ctu82zAg.js";import"./RichText.vue-BuoexALv.js";import{_ as d}from"./FormField.vue-mRh6rdEv.js";import{t as F}from"./policyMigrationComponentConstants-BSeo4Py0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DwERWXoD.js";import"./index-DtpEFz2i.js";import"./index-DSiULD1o.js";import"./index-BWWQO6Z8.js";import"./index-SGyjFKB5.js";import"./index-l3Tk4em_.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-C3dwEfyt.js";import"./index-BFiFYGtt.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./ShieldCheckIcon-G-yjo0m6.js";const H={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Date Picker",component:n,parameters:{layout:"padded"}},e={name:"Time only with timezone",render:()=>({components:{FormField:d,DatePicker:n,PvInputGroup:s,PvInputGroupAddon:c},setup(){return{dailyStartTime:p(null),timezoneLabel:F}},template:`
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
