import"./iframe-DSI7I_YQ.js";import"./RichText.vue-DARNTLdh.js";import{_ as t}from"./LinkText.vue-la98-pF0.js";import"./preload-helper-Dp1pzeXC.js";import"./ArrowRightIcon-sh-7-hR7.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Link Text",component:t,parameters:{layout:"padded"}},e={name:"External KB link",render:()=>({components:{LinkText:t},template:`
      <LinkText
        label="JumpCloud KB Article"
        href="#"
        target="_blank"
      />
    `})},n={name:"Inline policy link",render:()=>({components:{LinkText:t},template:`
      <p class="text-body-md text-neutral-subtle m-0">
        Applies to
        <LinkText
          label="all JumpCloud supported operating systems"
          href="#"
          target="_blank"
          :showIcon="false"
          customClass="inline"
        />.
      </p>
    `})};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'External KB link',
  render: () => ({
    components: {
      LinkText
    },
    template: \`
      <LinkText
        label="JumpCloud KB Article"
        href="#"
        target="_blank"
      />
    \`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var l,s,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Inline policy link',
  render: () => ({
    components: {
      LinkText
    },
    template: \`
      <p class="text-body-md text-neutral-subtle m-0">
        Applies to
        <LinkText
          label="all JumpCloud supported operating systems"
          href="#"
          target="_blank"
          :showIcon="false"
          customClass="inline"
        />.
      </p>
    \`
  })
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["ExternalKbLink","InlinePolicyLink"];export{e as ExternalKbLink,n as InlinePolicyLink,x as __namedExportsOrder,k as default};
