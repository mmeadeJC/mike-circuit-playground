import{r as m}from"./iframe-DuzLv9Pd.js";import"./RichText.vue-D4MvUk45.js";import{_ as s}from"./FormField.vue-CblrQISo.js";import{_ as t}from"./CircuitFileUpload-BCStRagr.js";import{l as c}from"./policyMigrationComponentConstants-DKtyczDC.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./DocumentIcon-BB7-M64P.js";import"./CloudArrowUpIcon-CRE54MAg.js";import"./ShieldCheckIcon-BpS1grCD.js";const h={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Upload/Circuit File Upload",component:t,parameters:{layout:"padded"}},e={name:"Certificate upload",render:()=>({components:{CircuitFileUpload:t,FormField:s},setup(){return{files:m([]),certificateSupportedFormats:c}},template:`
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
