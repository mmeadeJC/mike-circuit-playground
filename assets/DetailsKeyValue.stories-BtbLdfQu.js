import{d as x}from"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{r as S}from"./CheckCircleIcon-Ctb-iWK2.js";import{_ as g}from"./KeyValue.vue-rjEhFViA.js";import{r as y}from"./ExclamationTriangleIcon-uPO_hbeV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUoDpPp7.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";const I={title:"Circuit DS/KeyValue",component:g,argTypes:{label:{control:"text",description:"The key/label text displayed on the left"},value:{control:"text",description:'The value text displayed on the right (shows "--" when empty)'},testId:{control:"text",description:"Optional data-test-id attribute"}}},e={args:{label:"Operating System",value:"macOS 15.3 Sequoia"}},a={args:{label:"Serial Number",value:void 0}},t={args:{label:"Status",value:"Active",icon:S,iconColor:"text-success-base"}},l={render:()=>x({components:{KeyValue:g},setup(){return{items:[{label:"Display Name",value:"Burak's MacBook Pro"},{label:"Operating System",value:"macOS 15.3 Sequoia"},{label:"Status",value:"Active",icon:S,iconColor:"text-success-base"},{label:"Serial Number",value:"C02ZN1MDLVDM"},{label:"Last Contact",value:"2 minutes ago"},{label:"Enrollment Date",value:"January 15, 2025"},{label:"Risk Level",value:"Medium",icon:y,iconColor:"text-warning-base"},{label:"Notes",value:void 0}]}},template:`
        <div class="flex flex-col gap-3 p-6">
          <KeyValue
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
            :value="item.value"
            :icon="item.icon"
            :icon-color="item.iconColor"
          />
        </div>
      `})};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Operating System',
    value: 'macOS 15.3 Sequoia'
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,n,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Serial Number',
    value: undefined
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Status',
    value: 'Active',
    icon: CheckCircleIcon,
    iconColor: 'text-success-base'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,v,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => defineComponent({
    components: {
      KeyValue
    },
    setup() {
      const items = [{
        label: 'Display Name',
        value: 'Burak\\'s MacBook Pro'
      }, {
        label: 'Operating System',
        value: 'macOS 15.3 Sequoia'
      }, {
        label: 'Status',
        value: 'Active',
        icon: CheckCircleIcon,
        iconColor: 'text-success-base'
      }, {
        label: 'Serial Number',
        value: 'C02ZN1MDLVDM'
      }, {
        label: 'Last Contact',
        value: '2 minutes ago'
      }, {
        label: 'Enrollment Date',
        value: 'January 15, 2025'
      }, {
        label: 'Risk Level',
        value: 'Medium',
        icon: ExclamationTriangleIcon,
        iconColor: 'text-warning-base'
      }, {
        label: 'Notes',
        value: undefined
      }];
      return {
        items
      };
    },
    template: \`
        <div class="flex flex-col gap-3 p-6">
          <KeyValue
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
            :value="item.value"
            :icon="item.icon"
            :icon-color="item.iconColor"
          />
        </div>
      \`
  })
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const L=["Default","EmptyValue","WithIcon","Multiple"];export{e as Default,a as EmptyValue,l as Multiple,t as WithIcon,L as __namedExportsOrder,I as default};
