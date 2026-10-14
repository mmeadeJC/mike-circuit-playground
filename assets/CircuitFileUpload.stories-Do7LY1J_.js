import{r as m}from"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as s}from"./FormField.vue-CsyFfyrv.js";import{_ as t}from"./CircuitFileUpload-BW3vAPF9.js";import{l as c}from"./policyMigrationComponentConstants-BMFlZuaS.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./DocumentIcon-CS5L1jCs.js";import"./CloudArrowUpIcon-BxwQ4YFe.js";import"./ShieldCheckIcon-CQlKNWxZ.js";const h={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Upload/Circuit File Upload",component:t,parameters:{layout:"padded"}},e={name:"Certificate upload",render:()=>({components:{CircuitFileUpload:t,FormField:s},setup(){return{files:m([]),certificateSupportedFormats:c}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Upload certificate">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              :supported-formats="certificateSupportedFormats"
            />
          </template>
        </FormField>
      </div>
    `})},o={name:"Configuration profile upload",render:()=>({components:{CircuitFileUpload:t,FormField:s},setup(){return{files:m([])}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Upload configuration profile">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              accept=".mobileconfig"
              supported-formats=".mobileconfig"
            />
          </template>
        </FormField>
      </div>
    `})};var i,r,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Certificate upload',
  render: () => ({
    components: {
      CircuitFileUpload,
      FormField
    },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return {
        files,
        certificateSupportedFormats
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Upload certificate">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              :supported-formats="certificateSupportedFormats"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var a,n,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Configuration profile upload',
  render: () => ({
    components: {
      CircuitFileUpload,
      FormField
    },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return {
        files
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Upload configuration profile">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              accept=".mobileconfig"
              supported-formats=".mobileconfig"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const q=["CertificateUpload","ProfileUpload"];export{e as CertificateUpload,o as ProfileUpload,q as __namedExportsOrder,h as default};
