import{s as r}from"./index-CKnS-nTZ.js";import"./iframe-e359xqcE.js";import"./RichText.vue-DSFy4cWp.js";import{r as h}from"./EllipsisHorizontalIcon-CxnQmkwF.js";import{_ as e}from"./PageSection.vue-C0XULDUz.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./preload-helper-Dp1pzeXC.js";const A={title:"Circuit DS/PageSection",component:e,parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"Section title text"}}},n={args:{title:"Section Header"},render:t=>({components:{PageSection:e,Button:r,EllipsisHorizontalIcon:h},setup:()=>({args:t}),template:`
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">This is a sub-title slot</span>
          </template>
          <template #actions>
            <Button label="Button Label" severity="secondary" variant="outlined" />
            <Button severity="secondary" variant="outlined" rounded>
              <template #icon>
                <EllipsisHorizontalIcon class="size-5" />
              </template>
            </Button>
          </template>
        </PageSection>
      </div>
    `})},a={args:{title:"Users & Groups"},render:t=>({components:{PageSection:e},setup:()=>({args:t}),template:`
      <div style="width: 900px;">
        <PageSection v-bind="args" />
      </div>
    `})},s={args:{title:"Security Settings"},render:t=>({components:{PageSection:e,Button:r},setup:()=>({args:t}),template:`
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Configure security policies for your organization</span>
          </template>
        </PageSection>
      </div>
    `})},i={args:{title:"Team Members"},render:t=>({components:{PageSection:e,Button:r},setup:()=>({args:t}),template:`
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Manage team members and their permissions</span>
          </template>
          <template #actions>
            <Button label="Invite Member" severity="secondary" variant="outlined" />
            <Button label="Manage Roles" severity="secondary" variant="outlined" />
          </template>
        </PageSection>
      </div>
    `})},o={render:()=>({components:{PageSection:e,Button:r,EllipsisHorizontalIcon:h},template:`
      <div style="width: 900px;">
        <PageSection title="General Settings">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Basic configuration options</span>
          </template>
          <template #actions>
            <Button label="Edit" severity="secondary" variant="outlined" />
          </template>
        </PageSection>

        <div class="border-b border-neutral-default_solid" />

        <PageSection title="Security">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Security and access control settings</span>
          </template>
          <template #actions>
            <Button label="Configure" severity="secondary" variant="outlined" />
            <Button severity="secondary" variant="outlined" rounded>
              <template #icon>
                <EllipsisHorizontalIcon class="size-5" />
              </template>
            </Button>
          </template>
        </PageSection>

        <div class="border-b border-neutral-default_solid" />

        <PageSection title="Notifications">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Manage email and push notification preferences</span>
          </template>
        </PageSection>
      </div>
    `})};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Section Header'
  },
  render: args => ({
    components: {
      PageSection,
      Button,
      EllipsisHorizontalIcon
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">This is a sub-title slot</span>
          </template>
          <template #actions>
            <Button label="Button Label" severity="secondary" variant="outlined" />
            <Button severity="secondary" variant="outlined" rounded>
              <template #icon>
                <EllipsisHorizontalIcon class="size-5" />
              </template>
            </Button>
          </template>
        </PageSection>
      </div>
    \`
  })
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Users & Groups'
  },
  render: args => ({
    components: {
      PageSection
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 900px;">
        <PageSection v-bind="args" />
      </div>
    \`
  })
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Security Settings'
  },
  render: args => ({
    components: {
      PageSection,
      Button
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Configure security policies for your organization</span>
          </template>
        </PageSection>
      </div>
    \`
  })
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,S,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Team Members'
  },
  render: args => ({
    components: {
      PageSection,
      Button
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Manage team members and their permissions</span>
          </template>
          <template #actions>
            <Button label="Invite Member" severity="secondary" variant="outlined" />
            <Button label="Manage Roles" severity="secondary" variant="outlined" />
          </template>
        </PageSection>
      </div>
    \`
  })
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var P,B,f;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PageSection,
      Button,
      EllipsisHorizontalIcon
    },
    template: \`
      <div style="width: 900px;">
        <PageSection title="General Settings">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Basic configuration options</span>
          </template>
          <template #actions>
            <Button label="Edit" severity="secondary" variant="outlined" />
          </template>
        </PageSection>

        <div class="border-b border-neutral-default_solid" />

        <PageSection title="Security">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Security and access control settings</span>
          </template>
          <template #actions>
            <Button label="Configure" severity="secondary" variant="outlined" />
            <Button severity="secondary" variant="outlined" rounded>
              <template #icon>
                <EllipsisHorizontalIcon class="size-5" />
              </template>
            </Button>
          </template>
        </PageSection>

        <div class="border-b border-neutral-default_solid" />

        <PageSection title="Notifications">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Manage email and push notification preferences</span>
          </template>
        </PageSection>
      </div>
    \`
  })
}`,...(f=(B=o.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const L=["Default","TitleOnly","WithSubtitle","CustomActions","MultipleSections"];export{i as CustomActions,n as Default,o as MultipleSections,a as TitleOnly,s as WithSubtitle,L as __namedExportsOrder,A as default};
