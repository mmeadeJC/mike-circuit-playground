import{r as i}from"./iframe-C6YxvgI9.js";import{s as r}from"./index-DRYJK6md.js";import{s as p}from"./index-C4d2kVrk.js";import{s as m}from"./index-Du8uewCH.js";import"./RichText.vue-h6zLaVtH.js";import{_ as d}from"./FormField.vue-BTAWN9Np.js";import{t as a}from"./policyMigrationComponentConstants-D9sxqnnN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AqntUfTj.js";import"./index-BnKDY8uA.js";import"./index-BimTu2-D.js";import"./index-DlFKO-zo.js";import"./index-Ct0lVA_L.js";import"./index-BTBx138D.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./index-Dp_YoHvc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-1UUbJVrK.js";import"./index-eKE_C28L.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";import"./ShieldCheckIcon-cVyPPREN.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Group",component:r,parameters:{layout:"padded"}},e={name:"With timezone addon",render:()=>({components:{FormField:d,DatePicker:m,PvInputGroup:r,PvInputGroupAddon:p},setup(){return{enforcementDeadline:i(null),timezoneLabel:a}},template:`
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
