import{r as i}from"./iframe-CrzTiCu6.js";import{s as r}from"./index-D9yRO52M.js";import{s as p}from"./index-RyWm6HAH.js";import{s as m}from"./index-Cs_oyMfc.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as d}from"./FormField.vue-CTr1UxJM.js";import{t as a}from"./policyMigrationComponentConstants-Jlo0urnD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpHaaPKG.js";import"./index-n-Vy3yQf.js";import"./index-BAK6AhQo.js";import"./index-Is3bGEIS.js";import"./index-CJtZNPwL.js";import"./index-DHkFNkeW.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./ShieldCheckIcon-CwbvLCk-.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Group",component:r,parameters:{layout:"padded"}},e={name:"With timezone addon",render:()=>({components:{FormField:d,DatePicker:m,PvInputGroup:r,PvInputGroupAddon:p},setup(){return{enforcementDeadline:i(null),timezoneLabel:a}},template:`
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
