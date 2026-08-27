import{r as t}from"./iframe-DSI7I_YQ.js";import"./RichText.vue-DARNTLdh.js";import{_ as l}from"./FormField.vue-DvIDnTXZ.js";import{_ as e}from"./CircuitFileUpload-BMSzPX5s.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./DocumentIcon-BSqpahuW.js";import"./CloudArrowUpIcon-BObGHQY8.js";const p="avif, doc, docx, gif, ico, jpeg, jpg, json, key, lic, mov, mp3, mp4, ogg, pdf, png, rar, rtf, svg, txt, wav, webm, webp, xls, .xlsx, .xml, zip",G={title:"Circuit DS/Custom Components/CircuitFileUpload",component:e,parameters:{layout:"padded"}},i={render:()=>({components:{CircuitFileUpload:e,FormField:l},setup(){return{files:t([]),DEFAULT_SUPPORTED_FORMATS:p}},template:`
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    `})},a={render:()=>({components:{CircuitFileUpload:e,FormField:l},setup(){return{files:t([]),DEFAULT_SUPPORTED_FORMATS:p}},template:`
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              preview-drag-state
              preview-drag-file-name="filename.jpeg"
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    `})},o={render:()=>({components:{CircuitFileUpload:e,FormField:l},setup(){return{files:t([{name:"filename.csv",size:14336},{name:"filename.csv",size:14336}]),DEFAULT_SUPPORTED_FORMATS:p}},template:`
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    `})},n={render:()=>({components:{CircuitFileUpload:e,FormField:l},setup(){return{fileName:t(null)}},template:`
      <div class="max-w-2xl">
        <FormField
          label="Base64-Encoded Certificate"
          label-tooltip="Upload a certificate file."
        >
          <template #default>
            <CircuitFileUpload
              v-model="fileName"
              accept=".cer,.pem,.p12,.der,.crt"
              supported-formats="cer, pem, p12, der, crt"
            />
          </template>
        </FormField>
      </div>
    `})},m={render:()=>({components:{CircuitFileUpload:e,FormField:l},setup(){return{fileName:t("company-root-ca.cer")}},template:`
      <div class="max-w-2xl">
        <FormField label="Base64-Encoded Certificate">
          <template #default>
            <CircuitFileUpload
              v-model="fileName"
              accept=".cer,.pem,.p12,.der,.crt"
              supported-formats="cer, pem, p12, der, crt"
            />
          </template>
        </FormField>
      </div>
    `})};var s,d,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CircuitFileUpload,
      FormField
    },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return {
        files,
        DEFAULT_SUPPORTED_FORMATS
      };
    },
    template: \`
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var F,u,f;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CircuitFileUpload,
      FormField
    },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return {
        files,
        DEFAULT_SUPPORTED_FORMATS
      };
    },
    template: \`
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              preview-drag-state
              preview-drag-file-name="filename.jpeg"
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var U,v,C;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CircuitFileUpload,
      FormField
    },
    setup() {
      const files = ref<CircuitUploadFile[]>([{
        name: 'filename.csv',
        size: 14 * 1024
      }, {
        name: 'filename.csv',
        size: 14 * 1024
      }]);
      return {
        files,
        DEFAULT_SUPPORTED_FORMATS
      };
    },
    template: \`
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,T,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CircuitFileUpload,
      FormField
    },
    setup() {
      const fileName = ref<string | null>(null);
      return {
        fileName
      };
    },
    template: \`
      <div class="max-w-2xl">
        <FormField
          label="Base64-Encoded Certificate"
          label-tooltip="Upload a certificate file."
        >
          <template #default>
            <CircuitFileUpload
              v-model="fileName"
              accept=".cer,.pem,.p12,.der,.crt"
              supported-formats="cer, pem, p12, der, crt"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var _,D,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CircuitFileUpload,
      FormField
    },
    setup() {
      const fileName = ref<string | null>('company-root-ca.cer');
      return {
        fileName
      };
    },
    template: \`
      <div class="max-w-2xl">
        <FormField label="Base64-Encoded Certificate">
          <template #default>
            <CircuitFileUpload
              v-model="fileName"
              accept=".cer,.pem,.p12,.der,.crt"
              supported-formats="cer, pem, p12, der, crt"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const H=["Default","DragState","FileSelected","CertificateUpload","CertificateSelected"];export{m as CertificateSelected,n as CertificateUpload,i as Default,a as DragState,o as FileSelected,H as __namedExportsOrder,G as default};
