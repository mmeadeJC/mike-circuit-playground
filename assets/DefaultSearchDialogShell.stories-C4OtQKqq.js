import{d as ee,N as se,r as c,h as r,w as o,b as te,u as y,aw as ae,o as l,a as s,f as a,E as _,L as w,c as N,g as T,F as V,v as le,k as p,i as $}from"./iframe-DnhA1Jsm.js";import{s as ne}from"./index-CkUOowPH.js";import{_ as ie}from"./AiSearchFooter-B7JZ9MtU.js";import{_ as re}from"./AiSearchHeader-DDI7hm3I.js";import{_ as x}from"./SectionHeader-BlUwMErY.js";import{_ as C}from"./SearchItemRow-CGTT1BD_.js";import{_ as oe}from"./SearchScopeSelectButton-BRKBl3iD.js";import{_ as ce}from"./NoRecentSearches-BIQCLPSC.js";import{_ as de}from"./NoMatchesFound-D6i4Ckn2.js";import{m as me,a as ue}from"./searchDialogMockData-BsBNX4gY.js";import{r as pe}from"./ArrowTopRightOnSquareIcon-Ckxu5vwN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-l3Tk4em_.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-BB-DZxHZ.js";import"./index-BFiFYGtt.js";import"./index-TOe8dN6-.js";import"./AiSearchActionButton-_gPE8Iph.js";import"./ArrowDownTrayIcon-CJcpf1BH.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-DuIWmi4D.js";import"./HandThumbUpIcon-CAbSt-jY.js";import"./queryHighlightSegments-CEEnXSWr.js";import"./index-DqjS6dfD.js";import"./EmptyStateContainer-CU8wb4pp.js";import"./no-result-found-BFJ_8lDZ.js";const fe={class:"flex min-w-0 w-full items-center"},he={class:"flex min-h-0 flex-1 flex-col"},ve={class:"min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"},ye={class:"flex flex-col gap-4 px-2 pb-4 pt-4"},be={class:"flex flex-col gap-2"},ge={class:"self-start px-2"},Se={class:"flex flex-col gap-4"},_e={class:"flex flex-col"},we={class:"flex flex-col gap-0"},xe={class:"flex flex-col"},De={class:"flex flex-col"},ke={class:"flex flex-col gap-0"},Re={class:"flex h-auto w-auto shrink-0 items-center justify-center"},n=ee({__name:"DefaultSearchDialogShell",props:ae({initialQuery:{default:void 0},initialHasRecentSearches:{type:Boolean,default:!0}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(i){const g=i,D=se(i,"visible"),d=c(g.initialQuery??""),k=c("all"),m=p(()=>d.value.trim().length>0),R=p(()=>{const u=d.value.trim().toLowerCase();return u?ue.filter(t=>t.title.toLowerCase().includes(u)||t.subtitle.toLowerCase().includes(u)):[]}),q=p(()=>m.value&&R.value.length===0),X=p(()=>!m.value&&g.initialHasRecentSearches),Y=p(()=>!m.value&&!g.initialHasRecentSearches),Z={root:{class:"!flex !max-h-[70vh] !flex-col !overflow-hidden !rounded-lg border border-neutral-default_solid bg-neutral-surface shadow-e100"},header:{class:"!shrink-0 !border-0 !p-0"},headerActions:{class:"!hidden"},content:{class:"!flex !min-h-0 !flex-1 !flex-col !overflow-hidden !bg-neutral-surface !p-0 !rounded-b-lg",style:"height: auto"}};return(u,t)=>(l(),r(y(ne),te({visible:D.value,"onUpdate:visible":t[2]||(t[2]=e=>D.value=e),modal:"",position:"top",closable:!1,draggable:!1,style:{width:"560px",marginTop:"10vh",marginBottom:"10%"},pt:Z},u.$attrs),{header:o(()=>[s("div",fe,[t[3]||(t[3]=s("span",{class:"sr-only"},"Default Search",-1)),a(re,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),class:"min-w-0 flex-1","enable-enter-key":!1},{leading:o(()=>[a(y(le),{class:"size-4 shrink-0 text-neutral-base","aria-hidden":"true"})]),_:1},8,["modelValue"])])]),default:o(()=>[s("div",he,[s("div",ve,[s("div",ye,[s("div",be,[s("div",ge,[a(oe,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value=e),"show-counts":m.value,"show-zero-counts":q.value},null,8,["modelValue","show-counts","show-zero-counts"])]),s("div",Se,[_(s("div",_e,[a(x,{title:"Recent","show-icon":!1,"show-feedback":!1}),s("div",we,[(l(!0),N(V,null,T(y(me),(e,S)=>(l(),r(C,{key:S,variant:"recent",title:e.title,subtitle:e.subtitle,timestamp:e.timestamp},{icon:o(()=>[(l(),r($(e.leadingIcon),{class:"size-4 shrink-0 text-icon-neutral-base","aria-hidden":"true"}))]),_:2},1032,["title","subtitle","timestamp"]))),128))])],512),[[w,X.value]]),_(s("div",xe,[a(x,{title:"Recent","show-icon":!1,"show-feedback":!1}),a(ce)],512),[[w,Y.value]]),_(s("div",De,[a(x,{title:"Result","show-icon":!1,"show-feedback":!1}),s("div",ke,[q.value?(l(),r(de,{key:0,message:"No matches found."})):(l(!0),N(V,{key:1},T(R.value,(e,S)=>(l(),r(C,{key:`result-${S}`,variant:"result",title:e.title,subtitle:e.subtitle,"search-query":d.value,href:"#",target:"_blank",rel:"noopener noreferrer"},{icon:o(()=>[(l(),r($(e.leadingIcon),{class:"size-4 shrink-0 text-icon-neutral-base","aria-hidden":"true"}))]),right:o(()=>[s("div",Re,[a(y(pe),{class:"size-3.5 text-icon-neutral-base","aria-hidden":"true"})])]),_:2},1032,["title","subtitle","search-query"]))),128))])],512),[[w,m.value]])])])])]),a(ie,{variant:"default"})])]),_:1},16,["visible"]))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"DefaultSearchDialogShell",type:1,props:[{name:"initialQuery",global:!1,description:"Optional initial search text (e.g. Storybook typing state).",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:"undefined"},{name:"initialHasRecentSearches",global:!1,description:"When false, Recent shows empty-state copy instead of mock rows.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"visible",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"update:visible",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:visible", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[],exposed:[{name:"initialQuery",type:"string",description:"Optional initial search text (e.g. Storybook typing state).",declarations:[],schema:"string"},{name:"initialHasRecentSearches",type:"boolean",description:"When false, Recent shows empty-state copy instead of mock rows.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"visible",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/private/tmp/claude-501/-Users-mmeade-code-mike-circuit-playground/ceec079d-8686-4c12-a3d4-de855aae2d47/scratchpad/deploywt/src/stories/projects/sena-playground/components/default-search-dialog/DefaultSearchDialogShell.vue"});const rs={title:"Projects/sena-playground/Default Search Dialog",component:n,parameters:{layout:"fullscreen",viewport:{defaultViewport:"responsive"}}},b={name:"Default",render:()=>({components:{DefaultSearchDialogShell:n},setup(){return{visible:c(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" />
      </div>
    `})},f={name:"No recent searches",render:()=>({components:{DefaultSearchDialogShell:n},setup(){return{visible:c(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell
          v-model:visible="visible"
          :initial-has-recent-searches="false"
        />
      </div>
    `})},h={name:"Typing state",render:()=>({components:{DefaultSearchDialogShell:n},setup(){return{visible:c(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    `})},v={name:"Typing, no matches",render:()=>({components:{DefaultSearchDialogShell:n},setup(){return{visible:c(!0)}},template:`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="xyzabc" />
      </div>
    `})};var z,B,P;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Default',
  render: () => ({
    components: {
      DefaultSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" />
      </div>
    \`
  })
}`,...(P=(B=b.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var O,I,M,H,L;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'No recent searches',
  render: () => ({
    components: {
      DefaultSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell
          v-model:visible="visible"
          :initial-has-recent-searches="false"
        />
      </div>
    \`
  })
}`,...(M=(I=f.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:"Recent section lists mock searches; scope filter visible.",...(L=(H=f.parameters)==null?void 0:H.docs)==null?void 0:L.description}}};var j,E,Q,U,F;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Typing state',
  render: () => ({
    components: {
      DefaultSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    \`
  })
}`,...(Q=(E=h.parameters)==null?void 0:E.docs)==null?void 0:Q.source},description:{story:"Opens with query matching mock directory rows.",...(F=(U=h.parameters)==null?void 0:U.docs)==null?void 0:F.description}}};var K,W,A,G,J;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Typing, no matches',
  render: () => ({
    components: {
      DefaultSearchDialogShell
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="xyzabc" />
      </div>
    \`
  })
}`,...(A=(W=v.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"Typing with no mock matches.",...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const os=["Default","NoRecentSearches","Typing","TypingNoMatches"];export{b as Default,f as NoRecentSearches,h as Typing,v as TypingNoMatches,os as __namedExportsOrder,rs as default};
