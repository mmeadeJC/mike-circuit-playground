import{d as V,q as y,r as l}from"./iframe-e359xqcE.js";import{s as L}from"./index-CKnS-nTZ.js";import{s as P}from"./index-C8Trrx-R.js";import"./RichText.vue-DSFy4cWp.js";import{_ as B}from"./FormField.vue-X6cJp_-2.js";import{P as w}from"./PageSaveBar.vue-Bo-usfmq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./useContainer-DGxftqyG.js";import"./PencilSquareIcon-TMd81OuA.js";import"./CheckIcon-CI0eXWFB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const se={title:"Circuit DS/PageSaveBar",component:w,parameters:{layout:"fullscreen"},argTypes:{visible:{control:"boolean",description:"Controls whether the bar is shown"},saving:{control:"boolean",description:"Shows loading state on the save button"},saved:{control:"boolean",description:"Shows the saved confirmation state"},message:{control:"text",description:"Message text displayed in the bar"},saveLabel:{control:"text",description:"Label for the save button"},discardLabel:{control:"text",description:"Label for the discard button"},savedLabel:{control:"text",description:"Label for the saved confirmation"}}},r={args:{visible:!0,saving:!1,saved:!1}},o={args:{visible:!0,saving:!0,saved:!1}},n={args:{visible:!0,saving:!1,saved:!0}},m={render:()=>V({components:{PageSaveBar:w,Button:L,InputText:P,FormField:B},setup(){const a=l("John"),s=l("Doe"),t=l("john.doe@example.com"),e={firstName:a.value,lastName:s.value,email:t.value},i=l(!1),d=l(!1),u=l(!1);function C(){i.value=a.value!==e.firstName||s.value!==e.lastName||t.value!==e.email}y([a,s,t],C);function T(){d.value=!0,setTimeout(()=>{e.firstName=a.value,e.lastName=s.value,e.email=t.value,d.value=!1,u.value=!0,i.value=!1,setTimeout(()=>{u.value=!1},2e3)},1500)}function D(){a.value=e.firstName,s.value=e.lastName,t.value=e.email,i.value=!1}return{firstName:a,lastName:s,email:t,hasChanges:i,isSaving:d,isSaved:u,handleSave:T,handleDiscard:D}},template:`
        <div class="bg-neutral-base w-screen h-screen p-8 overflow-auto">
          <div class="max-w-2xl mx-auto">
            <h1 class="text-heading-2 text-neutral-base mb-2">User Profile</h1>
            <p class="text-body-md text-neutral-subtle mb-6">
              Edit any field below to trigger the save bar.
            </p>

            <div class="grid grid-cols-2 gap-x-6 gap-y-4">
              <FormField label="First Name">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="firstName" class="w-full" />
                </template>
              </FormField>
              <FormField label="Last Name">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="lastName" class="w-full" />
                </template>
              </FormField>
              <FormField label="Email" class="col-span-2">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="email" class="w-full" />
                </template>
              </FormField>
            </div>
          </div>

          <PageSaveBar
            :visible="hasChanges"
            :saving="isSaving"
            :saved="isSaved"
            @save="handleSave"
            @discard="handleDiscard"
          />
        </div>
      `})};var v,c,p;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    visible: true,
    saving: false,
    saved: false
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,g,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    visible: true,
    saving: true,
    saved: false
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,N,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    visible: true,
    saving: false,
    saved: true
  }
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var x,F,I;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => defineComponent({
    components: {
      PageSaveBar,
      Button,
      InputText,
      FormField
    },
    setup() {
      const firstName = ref('John');
      const lastName = ref('Doe');
      const email = ref('john.doe@example.com');
      const originalValues = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value
      };
      const hasChanges = ref(false);
      const isSaving = ref(false);
      const isSaved = ref(false);
      function checkChanges() {
        hasChanges.value = firstName.value !== originalValues.firstName || lastName.value !== originalValues.lastName || email.value !== originalValues.email;
      }
      watch([firstName, lastName, email], checkChanges);
      function handleSave() {
        isSaving.value = true;
        setTimeout(() => {
          originalValues.firstName = firstName.value;
          originalValues.lastName = lastName.value;
          originalValues.email = email.value;
          isSaving.value = false;
          isSaved.value = true;
          hasChanges.value = false;
          setTimeout(() => {
            isSaved.value = false;
          }, 2000);
        }, 1500);
      }
      function handleDiscard() {
        firstName.value = originalValues.firstName;
        lastName.value = originalValues.lastName;
        email.value = originalValues.email;
        hasChanges.value = false;
      }
      return {
        firstName,
        lastName,
        email,
        hasChanges,
        isSaving,
        isSaved,
        handleSave,
        handleDiscard
      };
    },
    template: \`
        <div class="bg-neutral-base w-screen h-screen p-8 overflow-auto">
          <div class="max-w-2xl mx-auto">
            <h1 class="text-heading-2 text-neutral-base mb-2">User Profile</h1>
            <p class="text-body-md text-neutral-subtle mb-6">
              Edit any field below to trigger the save bar.
            </p>

            <div class="grid grid-cols-2 gap-x-6 gap-y-4">
              <FormField label="First Name">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="firstName" class="w-full" />
                </template>
              </FormField>
              <FormField label="Last Name">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="lastName" class="w-full" />
                </template>
              </FormField>
              <FormField label="Email" class="col-span-2">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="email" class="w-full" />
                </template>
              </FormField>
            </div>
          </div>

          <PageSaveBar
            :visible="hasChanges"
            :saving="isSaving"
            :saved="isSaved"
            @save="handleSave"
            @discard="handleDiscard"
          />
        </div>
      \`
  })
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const te=["Default","Saving","Saved","InteractiveDemo"];export{r as Default,m as InteractiveDemo,n as Saved,o as Saving,te as __namedExportsOrder,se as default};
