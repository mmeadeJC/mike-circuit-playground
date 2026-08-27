import{d as Be,N as Pe,r,m as P,q as W,h,w as b,b as He,u as q,aw as Le,o as i,a as s,E as f,L as v,f as a,c as g,g as I,i as z,F as C,e as Q,k as l}from"./iframe--pVyazG9.js";import{s as Ve}from"./index-BFHwi_tq.js";import"./RichText.vue-BtNuFzRg.js";import{_ as Te}from"./DataTable.vue-DqH3c9Zg.js";import{_ as H}from"./DataTableCellText.vue-Cc7EfsFZ.js";import{_ as Oe}from"./AiSearchHeader-DZXXu46M.js";import{_ as y}from"./SectionHeader-B01_4CSN.js";import{_ as U}from"./SuggestionRow-C2VDnBsr.js";import{_ as j}from"./SearchItemRow-DHqyGcTp.js";import{_ as Fe}from"./AiSearchFooter-B-nVEgsz.js";import{_ as We}from"./SearchScopeSelectButton-CVQJKvab.js";import{_ as ze}from"./NoRecentSearches-C4VB9EYH.js";import{_ as Qe}from"./NoMatchesFound-CflDzrX_.js";import{_ as Ue}from"./NoAiResults-BsmbYXPO.js";import{m as je,a as Ke}from"./searchDialogMockData-aHmXS_4B.js";import{r as Je}from"./ArrowTopRightOnSquareIcon-dGbNogk4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtElKYVw.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./index-By2lxUOL.js";import"./index-DDTNvhH8.js";import"./index-BUzjRe-W.js";import"./Paginator.vue-a3fgflnh.js";import"./index-V_KBkFc6.js";import"./index-BlXOQGTr.js";import"./index-B-BOOr65.js";import"./index-DaGsjZDs.js";import"./index-BWGkmJ0o.js";import"./index-mLzRhsCG.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-Cr53P9D2.js";import"./index-Dd-vKo1S.js";import"./index-CvasHF5g.js";import"./ChevronRightIcon-Bvh2VZdW.js";import"./index-8lieu_W4.js";import"./index-BTlCJq6I.js";import"./index-BEGOK711.js";import"./index-DQv4vshS.js";import"./index-BlpXHy1l.js";import"./index-CxmVMPmr.js";import"./useDataTableSize-io0PgdVT.js";import"./index-C10Cm2bV.js";import"./HandThumbUpIcon-iNGDaoi1.js";import"./queryHighlightSegments-uZpkqz5r.js";import"./AiSearchActionButton-BBdODUDD.js";import"./ArrowDownTrayIcon-DW6KrGkH.js";import"./index-BHfnk6xR.js";import"./EmptyStateContainer-DWm9UuGQ.js";import"./no-result-found-BFJ_8lDZ.js";const Ge={class:"flex min-w-0 w-full items-center"},Xe={class:"flex min-h-0 flex-1 flex-col"},Ye={class:"min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"},Ze={class:"flex flex-col gap-4 px-2 pb-4 pt-4"},et={class:"flex flex-col gap-2"},tt={class:"self-start px-2"},st={class:"flex flex-col gap-4"},at={class:"flex flex-col"},it={class:"flex flex-col gap-0"},lt={class:"flex flex-col"},nt={class:"flex flex-col"},ot={class:"flex flex-col gap-0"},rt={class:"flex h-auto w-auto shrink-0 items-center justify-center"},ct={class:"flex flex-col flex-grow min-h-0"},ut={class:"flex flex-col flex-grow min-h-0 px-2 pt-[2px] pb-2"},mt={class:"flex flex-col"},pt={class:"flex flex-col gap-0"},dt={key:0,class:"flex flex-col gap-0"},ht={key:1,class:"flex flex-col gap-0"},u=Be({__name:"AiSearchDialogShell",props:Le({initialQuery:{default:void 0},initialAiResultMode:{type:Boolean,default:!1},initialHasAiResults:{type:Boolean,default:!0},initialHasRecentSearches:{type:Boolean,default:!0}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(m){const p=m,E=Pe(m,"visible"),c=r(p.initialQuery??""),L=r("all"),k=l(()=>c.value.trim().length>0),n=r(p.initialAiResultMode),M=r(p.initialAiResultMode?(p.initialQuery??"").trim():""),R=r(p.initialHasAiResults),V=l(()=>{const e=c.value.trim().toLowerCase();return e?Ke.filter(o=>o.title.toLowerCase().includes(e)||o.subtitle.toLowerCase().includes(e)):[]}),D=l(()=>k.value&&V.value.length===0),_e=["JumpCloud Admin Portal","Device compliance policies","SSO application setup"],Ae=l(()=>{const e=c.value.trim();return[`Show users who can access ${e}`,`List Devices where ${e} is installed`,`Show groups with ${e} permission assignments`]}),xe=[{user:"Alice Johnson",status:"Active",department:"Engineering"},{user:"Bob Smith",status:"Inactive",department:"Marketing"},{user:"Carol Davis",status:"Active",department:"Sales"},{user:"David Wilson",status:"Active",department:"Engineering"},{user:"Emma Brown",status:"Pending",department:"HR"},{user:"Frank Miller",status:"Active",department:"Finance"},{user:"Grace Lee",status:"Active",department:"Engineering"}],ke=[{field:"user",header:"Users",sortable:!1,component:P(H),componentProps:e=>({label:e.data.user})},{field:"status",header:"Status",sortable:!1,component:P(H),componentProps:e=>({label:e.data.status})},{field:"department",header:"Department",sortable:!1,component:P(H),componentProps:e=>({label:e.data.department})}],Re=l(()=>n.value&&R.value),De=l(()=>D.value&&!n.value),qe=l(()=>n.value&&!R.value),T=l(()=>k.value&&!n.value),N=l(()=>!k.value&&!n.value),Ie=l(()=>N.value&&p.initialHasRecentSearches),Ce=l(()=>N.value&&!p.initialHasRecentSearches),$e=l(()=>n.value);function Ee(){D.value&&F(c.value)}function O(e){F(e)}function F(e){n.value=!0,M.value=c.value.trim(),R.value=Me(e)}function B(){n.value=!1,M.value="",R.value=!0}W(c,e=>{n.value&&e.trim()!==M.value&&B()}),W(E,e=>{e||B()});function Me(e){return!e.toLowerCase().includes("empty")&&!e.toLowerCase().includes("none")}const Ne={root:{class:"!flex !max-h-[70vh] !flex-col !overflow-hidden !rounded-lg border border-neutral-default_solid bg-neutral-surface shadow-e100"},header:{class:"!shrink-0 !border-0 !p-0"},headerActions:{class:"!hidden"},content:{class:"!flex !min-h-0 !flex-1 !flex-col !overflow-hidden !bg-neutral-surface !p-0 !rounded-b-lg",style:"height: auto"}};return(e,o)=>(i(),h(q(Ve),He({visible:E.value,"onUpdate:visible":o[2]||(o[2]=t=>E.value=t),modal:"",position:"top",closable:!1,draggable:!1,style:{width:"560px",marginTop:"10vh",marginBottom:"10%"},pt:Ne},e.$attrs),{header:b(()=>[s("div",Ge,[o[3]||(o[3]=s("span",{class:"sr-only"},"AI Search",-1)),a(Oe,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=t=>c.value=t),class:"min-w-0 flex-1","show-ai-search-button":De.value,onEnterKey:Ee,onClear:B},null,8,["modelValue","show-ai-search-button"])])]),default:b(()=>[s("div",Xe,[s("div",Ye,[s("div",Ze,[s("div",et,[f(s("div",tt,[a(We,{modelValue:L.value,"onUpdate:modelValue":o[1]||(o[1]=t=>L.value=t),"show-counts":k.value,"show-zero-counts":D.value},null,8,["modelValue","show-counts","show-zero-counts"])],512),[[v,!n.value]]),s("div",st,[f(s("div",at,[a(y,{title:"Recent","show-icon":!1,"show-feedback":!1}),s("div",it,[(i(!0),g(C,null,I(q(je),(t,d)=>(i(),h(j,{key:d,variant:"recent",title:t.title,subtitle:t.subtitle,timestamp:t.timestamp},{icon:b(()=>[(i(),h(z(t.leadingIcon),{class:"size-4 shrink-0 text-icon-neutral-base","aria-hidden":"true"}))]),_:2},1032,["title","subtitle","timestamp"]))),128))])],512),[[v,Ie.value]]),f(s("div",lt,[a(y,{title:"Recent","show-icon":!1,"show-feedback":!1}),a(ze)],512),[[v,Ce.value]]),f(s("div",nt,[a(y,{title:"Result","show-icon":!1,"show-feedback":!1}),s("div",ot,[D.value?(i(),h(Qe,{key:0})):(i(!0),g(C,{key:1},I(V.value,(t,d)=>(i(),h(j,{key:`result-${d}`,variant:"result",title:t.title,subtitle:t.subtitle,"search-query":c.value,href:"#",target:"_blank",rel:"noopener noreferrer"},{icon:b(()=>[(i(),h(z(t.leadingIcon),{class:"size-4 shrink-0 text-icon-neutral-base","aria-hidden":"true"}))]),right:b(()=>[s("div",rt,[a(q(Je),{class:"size-3.5 text-icon-neutral-base","aria-hidden":"true"})])]),_:2},1032,["title","subtitle","search-query"]))),128))])],512),[[v,T.value]]),f(s("div",ct,[a(y,{title:"AI Result","show-icon":!0,"show-feedback":!0}),s("div",ut,[a(q(Te),{data:xe,columns:ke,"data-key":"user",paginator:!1,scrollable:"","scroll-height":"flex",class:"w-full h-full"})])],512),[[v,Re.value]]),f(s("div",mt,[a(y,{title:"AI Result","show-icon":!0,"show-feedback":!1}),a(Ue)],512),[[v,qe.value]]),f(s("div",pt,[a(y,{title:"Suggestions","show-icon":!1,"show-feedback":!1}),N.value?(i(),g("div",dt,[(i(),g(C,null,I(_e,(t,d)=>a(U,{key:`sugg-static-${d}`,label:t,onClick:O},null,8,["label"])),64))])):Q("",!0),T.value?(i(),g("div",ht,[(i(!0),g(C,null,I(Ae.value,(t,d)=>(i(),h(U,{key:`sugg-typing-${d}`,label:t,"search-query":c.value,onClick:O},null,8,["label","search-query"]))),128))])):Q("",!0)],512),[[v,!n.value]])])])])]),a(Fe,{variant:$e.value?"ai-mode":"default"},null,8,["variant"])])]),_:1},16,["visible"]))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"AiSearchDialogShell",type:1,props:[{name:"initialQuery",global:!1,description:"Optional initial search text (e.g. Storybook “typing” state).",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:"undefined"},{name:"initialHasRecentSearches",global:!1,description:"When false, Recent shows empty-state copy instead of mock rows (Storybook).",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"initialAiResultMode",global:!1,description:"Demo prop: Start in AI result mode (for Storybook stories).",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"initialHasAiResults",global:!1,description:"Demo prop: Set initial AI result data state (for Storybook stories).",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"visible",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"update:visible",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:visible", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[],exposed:[{name:"initialQuery",type:"string",description:"Optional initial search text (e.g. Storybook “typing” state).",declarations:[],schema:"string"},{name:"initialHasRecentSearches",type:"boolean",description:"When false, Recent shows empty-state copy instead of mock rows (Storybook).",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"initialAiResultMode",type:"boolean",description:"Demo prop: Start in AI result mode (for Storybook stories).",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"initialHasAiResults",type:"boolean",description:"Demo prop: Set initial AI result data state (for Storybook stories).",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"visible",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/Users/mmeade/Desktop/Cursor Repo/mike-circuit-playground/src/stories/projects/sena-playground/components/ai-search-dialog/AiSearchDialogShell.vue"});const gs={title:"Projects/sena-playground/AI Search Dialog",component:u,parameters:{layout:"fullscreen",viewport:{defaultViewport:"responsive"}}},$={name:"Default",render:()=>({components:{AiSearchDialogShell:u},setup(){return{visible:r(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" />
      </div>
    `})},S={name:"No recent searches",render:()=>({components:{AiSearchDialogShell:u},setup(){return{visible:r(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell
          v-model:visible="visible"
          :initial-has-recent-searches="false"
        />
      </div>
    `})},w={name:"Typing state",render:()=>({components:{AiSearchDialogShell:u},setup(){return{visible:r(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    `})},_={name:"Typing, no matches",render:()=>({components:{AiSearchDialogShell:u},setup(){return{visible:r(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" initial-query="support" />
      </div>
    `})},A={name:"AI Result with Data",render:()=>({components:{AiSearchDialogShell:u},setup(){return{visible:r(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell 
          v-model:visible="visible" 
          initial-query="users in engineering"
          :initial-ai-result-mode="true"
          :initial-has-ai-results="true"
        />
      </div>
    `})},x={name:"AI Result Empty",render:()=>({components:{AiSearchDialogShell:u},setup(){return{visible:r(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell 
          v-model:visible="visible" 
          initial-query="empty query"
          :initial-ai-result-mode="true"
          :initial-has-ai-results="false"
        />
      </div>
    `})};var K,J,G;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Default',
  render: () => ({
    components: {
      AiSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" />
      </div>
    \`
  })
}`,...(G=(J=$.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var X,Y,Z,ee,te;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'No recent searches',
  render: () => ({
    components: {
      AiSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell
          v-model:visible="visible"
          :initial-has-recent-searches="false"
        />
      </div>
    \`
  })
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Scope chips + Recent placeholder + static Suggestions + default footer.",...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var se,ae,ie,le,ne;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Typing state',
  render: () => ({
    components: {
      AiSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    \`
  })
}`,...(ie=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:"Opens with a query: Recent hidden, Result + Suggestions, scope labels show mock counts.",...(ne=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ne.description}}};var oe,re,ce,ue,me;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Typing, no matches',
  render: () => ({
    components: {
      AiSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" initial-query="support" />
      </div>
    \`
  })
}`,...(ce=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ce.source},description:{story:'Typing with no mock matches (query is not "Slack"); empty Result copy + header AI Search outline button.',...(me=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var pe,de,he,fe,ve;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'AI Result with Data',
  render: () => ({
    components: {
      AiSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell 
          v-model:visible="visible" 
          initial-query="users in engineering"
          :initial-ai-result-mode="true"
          :initial-has-ai-results="true"
        />
      </div>
    \`
  })
}`,...(he=(de=A.parameters)==null?void 0:de.docs)==null?void 0:he.source},description:{story:"AI Result state with data showing table and AI mode footer.",...(ve=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ve.description}}};var ge,ye,be,Se,we;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'AI Result Empty',
  render: () => ({
    components: {
      AiSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell 
          v-model:visible="visible" 
          initial-query="empty query"
          :initial-ai-result-mode="true"
          :initial-has-ai-results="false"
        />
      </div>
    \`
  })
}`,...(be=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:be.source},description:{story:"AI Result state with no data showing empty message and AI mode footer.",...(we=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:we.description}}};const ys=["Default","NoRecentSearches","Typing","TypingNoMatches","AiResultWithData","AiResultEmpty"];export{x as AiResultEmpty,A as AiResultWithData,$ as Default,S as NoRecentSearches,w as Typing,_ as TypingNoMatches,ys as __namedExportsOrder,gs as default};
