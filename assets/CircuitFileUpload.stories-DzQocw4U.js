import{r as m}from"./iframe-BF79XtSp.js";import"./RichText.vue-CqGWfsH6.js";import{_ as s}from"./FormField.vue-C69YWs2P.js";import{_ as t}from"./CircuitFileUpload-C6c8qmpG.js";import{l as c}from"./policyMigrationComponentConstants-BIkg6p9Q.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./DocumentIcon-qb1-QNtE.js";import"./CloudArrowUpIcon-K7pypRps.js";import"./ShieldCheckIcon-xpQZCNU8.js";const h={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Upload/Circuit File Upload",component:t,parameters:{layout:"padded"}},e={name:"Certificate upload",render:()=>({components:{CircuitFileUpload:t,FormField:s},setup(){return{files:m([]),certificateSupportedFormats:c}},template:`
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
