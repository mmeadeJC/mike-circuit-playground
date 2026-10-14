import{r as m}from"./iframe-DnhA1Jsm.js";import"./RichText.vue-BuoexALv.js";import{_ as s}from"./FormField.vue-mRh6rdEv.js";import{_ as t}from"./CircuitFileUpload-BUeww2wT.js";import{l as c}from"./policyMigrationComponentConstants-BSeo4Py0.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./DocumentIcon-cJz5qgub.js";import"./CloudArrowUpIcon-C9ofDZB-.js";import"./ShieldCheckIcon-G-yjo0m6.js";const h={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Upload/Circuit File Upload",component:t,parameters:{layout:"padded"}},e={name:"Certificate upload",render:()=>({components:{CircuitFileUpload:t,FormField:s},setup(){return{files:m([]),certificateSupportedFormats:c}},template:`
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
