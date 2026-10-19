import{d as q,r as p,a0 as w,k as n,m as t}from"./iframe-CJNlUSJO.js";import{s as J}from"./index-CzaTbvQ5.js";import{s as N}from"./index-DqMC5tMH.js";import{s as O}from"./index-CK3JQGnr.js";import{s as U}from"./index-Dv8f6L-g.js";import"./RichText.vue-CLPxRa2P.js";import{_ as D}from"./ToggleSwitch.vue-Tl2dScYI.js";import{_ as Y}from"./FormField.vue-DokXCbml.js";import{_ as W}from"./MessageNotification.vue-C83opUOC.js";import{_ as H}from"./AppNavigation.vue-DcH97lTt.js";import{_ as G}from"./PageHeader.vue-DhJ1GZXF.js";import{P as V}from"./PageSaveBar.vue-ZkzgRMby.js";import{b as K,e as Q}from"./index-Bb-Am5iU.js";import{_ as X}from"./AdminTopBar-BIysc9Tr.js";import{r as Z}from"./ArrowRightStartOnRectangleIcon-CLCUEpzv.js";import{r as ee}from"./ArrowTopRightOnSquareIcon-Cd_6qSPk.js";import{r as te,a as ae}from"./RocketLaunchIcon-MP9dRmf5.js";import{r as ie,a as oe}from"./HomeIcon-DGihxR32.js";import{r as se}from"./UserIcon-B9-rHRsZ.js";import{r as re}from"./UsersIcon-oaPeND-z.js";import{r as le}from"./UserGroupIcon-C-0WA-Ss.js";import{r as ne}from"./CommandLineIcon-BlUqAMc5.js";import{r as me}from"./ShieldCheckIcon-BkfH9kvS.js";import{r as pe}from"./Cog6ToothIcon-BCMOD4VN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-BBDD1QfU.js";import"./index-TgrN5p_g.js";import"./index-CtMg5eIS.js";import"./index-Do-nvtb2.js";import"./index-DNoP2_Hj.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./index-BGmcZnfZ.js";import"./FlagIcon-xEoXMcNx.js";import"./index-Cy2jNuCI.js";import"./index-Dzg4DU0m.js";import"./index-4T4mPLxV.js";import"./ChevronRightIcon-9Bjzgkk8.js";import"./index-B0m5ICal.js";import"./index-Dsw3nu2T.js";import"./index--qYgJinF.js";import"./index-Dw453XQ1.js";import"./Dropdown.vue-C4EK6U1h.js";import"./EllipsisHorizontalIcon-CReXKJ2c.js";import"./useContainer-B_1ygOmR.js";import"./PencilSquareIcon-C2zE7SZM.js";import"./CheckIcon-CnYI-wva.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-G7cLCde7.js";import"./index-87h8nido.js";import"./AiAgentButton.vue-BVYZC-a5.js";import"./ArrowLeftIcon-ZppuD48h.js";const de=""+new URL("afc-richmond-crest-LF9ujUeW.png",import.meta.url).href,ce=[{label:"Get Started",leftIcon:t(te)},{label:"Home",leftIcon:t(ie)},{label:"Alerts",leftIcon:t(oe),count:25},{label:"User Management",leftIcon:t(le),items:[{label:"Users",leftIcon:t(se)},{label:"User Groups",leftIcon:t(re)}]},{label:"Device Management",leftIcon:t(K),items:[{label:"Devices"},{label:"Commands",leftIcon:t(ne)}]},{label:"Access",leftIcon:t(Q),items:[{label:"SSO Applications"}]},{label:"Security",leftIcon:t(me),items:[{label:"MFA Configurations"}]},{label:"Insights",leftIcon:t(ae),items:[{label:"Reports"}]},{label:"Settings",leftIcon:t(pe)}],ue=[{label:"Mike Meade",itemType:"profile_compact",initials:"MM",name:"Mike Meade",items:[{label:"Logout",rightIcon:t(Z)},{separator:!0},{label:"Launch User Portal",rightIcon:t(ee)}]}],fe=[{label:"Organization Profile",value:"org"},{label:"Notification Channels",value:"notifications"},{label:"Security",value:"security"},{label:"Connectors",value:"connectors"},{label:"Administrators",value:"admins"},{label:"Service Accounts",value:"service-accounts"},{label:"Customize Email",value:"email"},{label:"JumpCloud AI",value:"ai"},{label:"Features",value:"features"},{label:"Automation Variables",value:"variables"}],m=[{id:"pw-expiration",name:"Password Expiration Warning",description:"This email encourages users to reset their password before an upcoming expiration date.",subject:"JumpCloud Password Expiration Warning",message:`Your JumpCloud account password for email #{user_email} will expire soon. Expiration date: #{expiration_day}
After this you could be denied access to critical resources.
Click Reset Password to log in to the User Portal and update your password now.`,defaultCta:"Reset Password",footer:"If you have questions about this email, contact your JumpCloud administrator #{admin_email_link}.",ctaRequired:!1,ctaLine:"Click Reset Password to log in to the User Portal and update your password now."},{id:"account-activation",name:"Account Activation",description:"This email lets new users activate their account and set an initial password.",subject:"Activate your JumpCloud account",message:`Welcome to JumpCloud! Your administrator created an account for #{user_email}.
Activate it to get started.`,defaultCta:"Activate Account",footer:"If you did not expect this email, contact #{admin_email_link}.",ctaRequired:!0,ctaLine:"Activate it to get started."}],ge=q({name:"CustomizeEmailCta",components:{AppNavigation:H,PageHeader:G,AdminTopBar:X,FormField:Y,ToggleSwitch:D,MessageNotification:W,PageSaveBar:V,PvButton:J,InputText:N,Textarea:U,Select:O},props:{initialShowCta:{type:Boolean,default:!0}},setup(_){const j=p("email"),i=p(m[0].id),u=n(()=>m.find(e=>e.id===i.value)),F=(e,a)=>e.split(`
`).filter(r=>r.trim()!==a).join(`
`),f=e=>{const a=e.ctaRequired?!0:_.initialShowCta;return{subject:e.subject,message:a?e.message:F(e.message,e.ctaLine),ctaLabel:e.defaultCta,footer:e.footer,showCta:a}},g=w(Object.fromEntries(m.map(e=>[e.id,f(e)]))),v=w(Object.fromEntries(m.map(e=>[e.id,JSON.stringify(f(e))]))),o=n(()=>g[i.value]),P=n(()=>JSON.stringify(o.value)!==v[i.value]),b=p(!1),A=p(!0),L=n(()=>o.value.message.toLowerCase().includes(o.value.ctaLabel.trim().toLowerCase())&&o.value.ctaLabel.trim().length>0),x={};function M(e){const a=o.value,r=u.value;a.showCta=e;const s=a.message.split(`
`);if(e){if(s.some(R=>R.trim()===r.ctaLine))return;const{line:l,index:h}=x[r.id]??{line:r.ctaLine,index:s.length};s.splice(Math.min(h,s.length),0,l)}else{const l=s.findIndex(h=>h.trim()===r.ctaLine);if(l===-1)return;x[r.id]={line:s[l],index:l},s.splice(l,1)}a.message=s.join(`
`)}function $(){v[i.value]=JSON.stringify(o.value),b.value=!0,setTimeout(()=>b.value=!1,2e3)}function z(){Object.assign(g[i.value],JSON.parse(v[i.value]))}function B(){Object.assign(g[i.value],f(u.value))}const E=n(()=>o.value.message.split(`
`));return{menuItems:ce,profileMenuItems:ue,settingsTabs:fe,templates:m,activeTab:j,templateId:i,template:u,form:o,isDirty:P,saved:b,showPreview:A,messageMentionsButton:L,messageLines:E,splitTokens:e=>e.split(/(#\{[^}]+\})/).filter(Boolean).map(a=>({text:a,token:/^#\{[^}]+\}$/.test(a)})),crest:de,save:$,setShowCta:M,discard:z,resetToDefault:B}},template:`
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="settings"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto bg-neutral-surface_deep relative">
        <AdminTopBar />
        <PageHeader title="Settings" :tabs="settingsTabs" v-model:activeTab="activeTab" class="shrink-0" />

        <div class="p-6 flex flex-col gap-4">
          <MessageNotification
            severity="info"
            detail="Email Customization is a paid and opt-in feature."
          />

          <div class="grid grid-cols-2 gap-6 items-start">
            <!-- Editor -->
            <div class="bg-neutral-base border border-neutral-default_solid rounded-md p-6 flex flex-col gap-6">
              <section class="flex flex-col gap-3">
                <h2 style="font-size:16px; font-weight:600; color:#1e2733; margin:0;">Choose a template</h2>
                <FormField label="Email Template">
                  <template #default="{ inputId }">
                    <Select
                      :id="inputId"
                      v-model="templateId"
                      :options="templates"
                      option-label="name"
                      option-value="id"
                      class="w-full!"
                    />
                  </template>
                </FormField>
                <p class="text-body-sm text-neutral-subtle">{{ template.description }}</p>
              </section>

              <section class="flex flex-col gap-4">
                <h2 style="font-size:16px; font-weight:600; color:#1e2733; margin:0;">Email Content</h2>

                <FormField label="Subject" required>
                  <template #default="{ inputId }">
                    <InputText :id="inputId" v-model="form.subject" class="w-full" />
                  </template>
                </FormField>

                <FormField label="Message" required>
                  <template #default="{ inputId }">
                    <Textarea :id="inputId" v-model="form.message" rows="5" class="w-full" />
                  </template>
                </FormField>

                <!-- Call to action: toggle + progressive disclosure -->
                <div class="flex flex-col gap-3 rounded-md border border-neutral-default_solid p-4">
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex flex-col gap-1 min-w-0">
                      <span class="text-body-md text-neutral-base">Show call-to-action button</span>
                      <span class="text-body-sm text-neutral-subtle">
                        <template v-if="template.ctaRequired">
                          This button is required for the {{ template.name }} email and can't be removed.
                        </template>
                        <template v-else>
                          Include a button that links recipients to the next step.
                        </template>
                      </span>
                    </div>
                    <ToggleSwitch
                      
                      :model-value="form.showCta"
                      @update:model-value="setShowCta"
                      :disabled="template.ctaRequired"
                      aria-label="Show call-to-action button"
                    />
                  </div>

                  <FormField v-if="form.showCta" label="Button Call to Action" required>
                    <template #default="{ inputId }">
                      <InputText :id="inputId" v-model="form.ctaLabel" class="w-full" />
                    </template>
                  </FormField>

                  <MessageNotification
                    v-else-if="messageMentionsButton"
                    severity="warning"
                    detail="Your message still refers to the button. Review it before saving."
                  />
                </div>

                <FormField label="Footer" required>
                  <template #default="{ inputId }">
                    <Textarea :id="inputId" v-model="form.footer" rows="2" class="w-full" />
                  </template>
                </FormField>

                <div>
                  <PvButton label="Reset To Default Content" severity="secondary" variant="outlined" size="small" @click="resetToDefault" />
                </div>
              </section>
            </div>

            <!-- Preview: sizes and colors measured from the live Customize Email preview (email markup, so inline) -->
            <div class="flex flex-col" style="background:#f7f7fb; padding:0 0 24px;">
              <div class="flex items-center justify-between" style="height:50px;">
                <h2 style="font-size:16px; font-weight:600; color:#1e2733; margin:0;">Template Preview</h2>
                <ToggleSwitch v-model="showPreview" label="show preview" />
              </div>
              <div v-if="showPreview" class="flex flex-col" style="color:#1e2733; font-size:13px; line-height:19.5px;">
                <div style="background:#fff; height:48px; padding:0 15px; display:flex; align-items:center;">
                  <span><strong>Subject:</strong>&nbsp; {{ form.subject }}</span>
                </div>
                <div style="margin-top:15px;">
                  <div style="background:#e5e9ea; height:30px; padding:0 15px; display:flex; align-items:center;">
                    <span><strong>Title:</strong>&nbsp; {{ form.subject }}</span>
                  </div>
                  <div style="background:#f2f3f4; height:26px; padding:0 15px; display:flex; align-items:center;">
                    <span>This {{ form.subject }} was generated by your Admin.</span>
                  </div>
                </div>
                <div style="background:#fff; padding:30px 15px 30px;">
                  <img :src="crest" alt="" style="display:block; width:116px; height:auto;" />
                  <h3 style="font-size:18px; line-height:24px; font-weight:600; margin:36px 0 0;">{{ form.subject }}</h3>
                  <div style="margin-top:18px;">
                    <p v-for="(line, i) in messageLines" :key="i" style="margin:0 0 17px;">
                      <template v-for="(seg, j) in splitTokens(line)" :key="j"><span v-if="seg.token" style="border-bottom:2px dotted #4fbdb8;">{{ seg.text }}</span><template v-else>{{ seg.text }}</template></template>
                    </p>
                  </div>
                  <div v-if="form.showCta && form.ctaLabel.trim()" data-testid="preview-cta" style="margin-top:18px;">
                    <span style="display:inline-block; background:#5bbfba; color:#1e2733; font-weight:600; padding:0 18px; height:37px; line-height:37px; border-radius:3px;">{{ form.ctaLabel }}</span>
                  </div>
                  <p style="margin:36px 0 0; line-height:18px;">
                    <template v-for="(seg, j) in splitTokens(form.footer)" :key="j"><span v-if="seg.token" style="border-bottom:2px dotted #4fbdb8;">{{ seg.text }}</span><template v-else>{{ seg.text }}</template></template>
                  </p>
                  <div style="margin-top:37px; height:31px; background:#3b4350; color:#7d8590; font-size:11px; font-weight:600; display:flex; align-items:center; justify-content:center;">Your email disclaimer can go here.</div>
                </div>
                <div style="background:#151b2b; color:#fff; height:70px; display:flex; align-items:center; justify-content:center; font-size:11px;">Powered by JumpCloud</div>
              </div>
            </div>
          </div>
        </div>

        <PageSaveBar
          :visible="isDirty"
          :saved="saved"
          message="You have unsaved changes"
          @save="save"
          @discard="discard"
        />
      </div>
    </div>
  `}),_t={title:"Projects/Mike's Playground/Settings/Customize Email - CTA Toggle",component:ge,parameters:{layout:"fullscreen"}},d={args:{initialShowCta:!0}},c={args:{initialShowCta:!1}};var y,C,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    initialShowCta: true
  }
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var S,T,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    initialShowCta: false
  }
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const jt=["ButtonShown","ButtonRemoved"];export{c as ButtonRemoved,d as ButtonShown,jt as __namedExportsOrder,_t as default};
