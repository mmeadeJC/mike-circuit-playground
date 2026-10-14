import{r as m}from"./iframe-600w3n4H.js";import"./RichText.vue-CqDMFobT.js";import{_ as s}from"./FormField.vue-9Bh63gOi.js";import{_ as t}from"./CircuitFileUpload-6mpma884.js";import{l as c}from"./policyMigrationComponentConstants-By4Q4wXb.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./DocumentIcon-BvXeQs0S.js";import"./CloudArrowUpIcon-BgTxMZeP.js";import"./ShieldCheckIcon-BytxG3nK.js";const h={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Upload/Circuit File Upload",component:t,parameters:{layout:"padded"}},e={name:"Certificate upload",render:()=>({components:{CircuitFileUpload:t,FormField:s},setup(){return{files:m([]),certificateSupportedFormats:c}},template:`
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
