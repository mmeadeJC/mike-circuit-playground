import{r as p}from"./iframe-BFKWv3KJ.js";import{s}from"./index-CtJZ73jW.js";import{s as c}from"./index-DUJhtXEH.js";import{s as n}from"./index-CnGO8sn3.js";import"./RichText.vue-vrSf4OCs.js";import{_ as d}from"./FormField.vue-CsyFfyrv.js";import{t as F}from"./policyMigrationComponentConstants-BMFlZuaS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUVhZ73h.js";import"./index-BMkyGRgX.js";import"./index-CCVlNmxk.js";import"./index-bbn6QzYu.js";import"./index-CFp6THYW.js";import"./index-2n8eVSrk.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./ShieldCheckIcon-CQlKNWxZ.js";const H={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Date Picker",component:n,parameters:{layout:"padded"}},e={name:"Time only with timezone",render:()=>({components:{FormField:d,DatePicker:n,PvInputGroup:s,PvInputGroupAddon:c},setup(){return{dailyStartTime:p(null),timezoneLabel:F}},template:`
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
