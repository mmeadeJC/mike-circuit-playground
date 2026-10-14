import{r as i}from"./iframe-BF79XtSp.js";import{s as r}from"./index-B32Jmv9d.js";import{s as p}from"./index-wwsEiEgl.js";import{s as m}from"./index-CW9UsunM.js";import"./RichText.vue-CqGWfsH6.js";import{_ as d}from"./FormField.vue-C69YWs2P.js";import{t as a}from"./policyMigrationComponentConstants-BIkg6p9Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Du18TKou.js";import"./index-dcWUga6b.js";import"./index-DIEiO-G_.js";import"./index-BMgqVpQE.js";import"./index-DccRakCb.js";import"./index-Dtk_BLuX.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ShieldCheckIcon-xpQZCNU8.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Group",component:r,parameters:{layout:"padded"}},e={name:"With timezone addon",render:()=>({components:{FormField:d,DatePicker:m,PvInputGroup:r,PvInputGroupAddon:p},setup(){return{enforcementDeadline:i(null),timezoneLabel:a}},template:`
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
