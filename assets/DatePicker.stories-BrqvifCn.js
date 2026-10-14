import{r as p}from"./iframe-C6YxvgI9.js";import{s}from"./index-DRYJK6md.js";import{s as c}from"./index-C4d2kVrk.js";import{s as n}from"./index-Du8uewCH.js";import"./RichText.vue-h6zLaVtH.js";import{_ as d}from"./FormField.vue-BTAWN9Np.js";import{t as F}from"./policyMigrationComponentConstants-D9sxqnnN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AqntUfTj.js";import"./index-BnKDY8uA.js";import"./index-BimTu2-D.js";import"./index-DlFKO-zo.js";import"./index-Ct0lVA_L.js";import"./index-BTBx138D.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./index-Dp_YoHvc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-1UUbJVrK.js";import"./index-eKE_C28L.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";import"./ShieldCheckIcon-cVyPPREN.js";const H={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Date Picker",component:n,parameters:{layout:"padded"}},e={name:"Time only with timezone",render:()=>({components:{FormField:d,DatePicker:n,PvInputGroup:s,PvInputGroupAddon:c},setup(){return{dailyStartTime:p(null),timezoneLabel:F}},template:`
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
