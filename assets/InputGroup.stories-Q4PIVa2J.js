import{r as i}from"./iframe-BFKWv3KJ.js";import{s as r}from"./index-CtJZ73jW.js";import{s as p}from"./index-DUJhtXEH.js";import{s as m}from"./index-CnGO8sn3.js";import"./RichText.vue-vrSf4OCs.js";import{_ as d}from"./FormField.vue-CsyFfyrv.js";import{t as a}from"./policyMigrationComponentConstants-BMFlZuaS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUVhZ73h.js";import"./index-BMkyGRgX.js";import"./index-CCVlNmxk.js";import"./index-bbn6QzYu.js";import"./index-CFp6THYW.js";import"./index-2n8eVSrk.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./ShieldCheckIcon-CQlKNWxZ.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Group",component:r,parameters:{layout:"padded"}},e={name:"With timezone addon",render:()=>({components:{FormField:d,DatePicker:m,PvInputGroup:r,PvInputGroupAddon:p},setup(){return{enforcementDeadline:i(null),timezoneLabel:a}},template:`
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
