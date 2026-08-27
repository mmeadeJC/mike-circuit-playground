import{m as t,r as N}from"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as e}from"./DataTable.vue-DqH3c9Zg.js";import{_ as r}from"./DataTableCellText.vue-Cc7EfsFZ.js";import{_ as Q}from"./DataTableCellLink.vue-DCIiMIR1.js";import{_ as b}from"./DataTableCellStatus.vue-CD1yWqI9.js";import{_ as R}from"./DataTableCellAction.vue-BHKasth6.js";import{r as V}from"./PencilSquareIcon-DNTaoy60.js";import{r as G}from"./TrashIcon-n8-NWlXQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-6pJfhDGj.js";import"./Paginator.vue-a3fgflnh.js";import"./index-DgH38Tqr.js";import"./index-V_KBkFc6.js";import"./index-BlXOQGTr.js";import"./index-B-BOOr65.js";import"./index-DaGsjZDs.js";import"./index-CtElKYVw.js";import"./index-BWGkmJ0o.js";import"./index-mLzRhsCG.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-ZhWAdK_X.js";import"./index-Cr53P9D2.js";import"./index-DDTNvhH8.js";import"./index-Dd-vKo1S.js";import"./index-CvasHF5g.js";import"./ChevronRightIcon-Bvh2VZdW.js";import"./index-8lieu_W4.js";import"./index-awHdwFoC.js";import"./index-Ck1qSbo1.js";import"./index-BTlCJq6I.js";import"./index-BEGOK711.js";import"./index-DQv4vshS.js";import"./index-BlpXHy1l.js";import"./index-By2lxUOL.js";import"./index-CxmVMPmr.js";import"./useDataTableSize-io0PgdVT.js";import"./LinkText.vue-BKb948uI.js";import"./ArrowRightIcon-DFyskfUp.js";import"./index-CG-HcpwM.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./index-B2GG8oKH.js";import"./EllipsisHorizontalIcon-vlhJGnpU.js";const Ma={title:"Circuit DS/Components/DataTable",component:e,tags:["autodocs"]},s=[{code:"001",name:"Product 1",category:"Category A",quantity:10,status:"Active",tags:["Tag A","Tag B"]},{code:"002",name:"Product 2",category:"Category B",quantity:20,status:"Inactive",tags:["Tag B"]},{code:"003",name:"Product 3",category:"Category A",quantity:15,status:"Active",tags:["Tag A","Tag B","Tag C"]},{code:"004",name:"Product 4",category:"Category C",quantity:8,status:"Pending",tags:["Tag C"]},{code:"005",name:"Product 5",category:"Category B",quantity:12,status:"Active",tags:["Tag A"]}],o=[{field:"code",header:"Code",sortable:!0,component:t(r),componentProps:a=>({label:a.data.code})},{field:"name",header:"Name",sortable:!0,component:t(r),componentProps:a=>({label:a.data.name})},{field:"category",header:"Category",sortable:!0,component:t(r),componentProps:a=>({label:a.data.category})},{field:"quantity",header:"Quantity",sortable:!0,component:t(r),componentProps:a=>({label:a.data.quantity})}],l={render:a=>({components:{DataTable:e},setup(){return{args:a,products:s,defaultColumns:o}},template:`
      <DataTable :columns="defaultColumns" :data="products" v-bind="args" />
    `}),args:{}},O=[{field:"code",header:"Code",sortable:!0,component:t(r),componentProps:a=>({label:a.data.code})},{field:"name",header:"Name",sortable:!0,component:t(Q),componentProps:a=>({label:a.data.name,href:"#"})},{field:"category",header:"Category",component:t(r),componentProps:a=>({label:a.data.category})},{field:"quantity",header:"Qty",component:t(r),componentProps:a=>({label:a.data.quantity})},{field:"status",header:"Status",component:t(b),componentProps:a=>({type:"Status",statusLabel:a.data.status})},{field:"tags",header:"Tags",component:t(b),componentProps:a=>({type:"Tags",tags:a.data.tags,maxVisibleTags:3})},{field:"actions",header:"Actions",component:t(R),componentProps:()=>({type:"Button Group",iconButtons:[{icon:t(V),ariaLabel:"Edit"},{icon:t(G),ariaLabel:"Delete"}],maxVisibleIconButtons:3})}],m={render:a=>({components:{DataTable:e},setup(){return{args:a,products:s,allCellTypesColumns:O}},template:`
      <DataTable :columns="allCellTypesColumns" :data="products" v-bind="args" />
    `}),args:{}},p={render:a=>({components:{DataTable:e},setup(){return{args:a,products:s,defaultColumns:o}},template:`
      <DataTable :columns="defaultColumns" :data="products" :card="true" v-bind="args" />
    `}),args:{}},d={render:a=>({components:{DataTable:e},setup(){return{args:a,products:s,defaultColumns:o}},template:`
      <DataTable :columns="defaultColumns" :data="products" size="small" v-bind="args" />
    `}),args:{}},c={render:a=>({components:{DataTable:e},setup(){return{args:a,products:s,defaultColumns:o}},template:`
      <DataTable :columns="defaultColumns" :data="products" :expander="true" v-bind="args">
        <template #expansion="{ data }">
          <div class="p-4 text-body-md text-neutral-base">
            <p><strong>Product:</strong> {{ data.name }}</p>
            <p><strong>Category:</strong> {{ data.category }}</p>
            <p><strong>Tags:</strong> {{ data.tags?.join(', ') }}</p>
          </div>
        </template>
      </DataTable>
    `}),args:{}},F=Array.from({length:50},(a,n)=>({code:String(n+1).padStart(3,"0"),name:`Product ${n+1}`,category:`Category ${String.fromCharCode(65+n%3)}`,quantity:10+n%20,status:["Active","Inactive","Pending"][n%3],tags:["Tag A","Tag B","Tag C"].slice(0,n%3+1)})),u={render:a=>({components:{DataTable:e},setup(){return{args:a,manyProducts:F,defaultColumns:o}},template:`
      <DataTable :columns="defaultColumns" :data="manyProducts" :paginator="true" :rows="10" v-bind="args" />
    `}),args:{}},i={render:a=>({components:{DataTable:e},setup(){const n=N([]);return{args:a,products:s,defaultColumns:o,selection:n}},template:`
      <DataTable
        :columns="defaultColumns"
        :data="products"
        selectionMode="multiple"
        v-model:selection="selection"
        v-bind="args"
      />
    `}),args:{}},g={render:a=>({components:{DataTable:e},setup(){return{args:a,defaultColumns:o}},template:`
      <DataTable :columns="defaultColumns" :data="[]" :loading="true" v-bind="args" />
    `}),args:{}};var T,f,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      return {
        args,
        products,
        defaultColumns
      };
    },
    template: \`
      <DataTable :columns="defaultColumns" :data="products" v-bind="args" />
    \`
  }),
  args: {}
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,D,v;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      return {
        args,
        products,
        allCellTypesColumns
      };
    },
    template: \`
      <DataTable :columns="allCellTypesColumns" :data="products" v-bind="args" />
    \`
  }),
  args: {}
}`,...(v=(D=m.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var P,h,S;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      return {
        args,
        products,
        defaultColumns
      };
    },
    template: \`
      <DataTable :columns="defaultColumns" :data="products" :card="true" v-bind="args" />
    \`
  }),
  args: {}
}`,...(S=(h=p.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var _,x,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      return {
        args,
        products,
        defaultColumns
      };
    },
    template: \`
      <DataTable :columns="defaultColumns" :data="products" size="small" v-bind="args" />
    \`
  }),
  args: {}
}`,...(A=(x=d.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var q,B,W;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      return {
        args,
        products,
        defaultColumns
      };
    },
    template: \`
      <DataTable :columns="defaultColumns" :data="products" :expander="true" v-bind="args">
        <template #expansion="{ data }">
          <div class="p-4 text-body-md text-neutral-base">
            <p><strong>Product:</strong> {{ data.name }}</p>
            <p><strong>Category:</strong> {{ data.category }}</p>
            <p><strong>Tags:</strong> {{ data.tags?.join(', ') }}</p>
          </div>
        </template>
      </DataTable>
    \`
  }),
  args: {}
}`,...(W=(B=c.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var $,L,w;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      return {
        args,
        manyProducts,
        defaultColumns
      };
    },
    template: \`
      <DataTable :columns="defaultColumns" :data="manyProducts" :paginator="true" :rows="10" v-bind="args" />
    \`
  }),
  args: {}
}`,...(w=(L=u.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var z,E,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      const selection = ref<Record<string, unknown>[]>([]);
      return {
        args,
        products,
        defaultColumns,
        selection
      };
    },
    template: \`
      <DataTable
        :columns="defaultColumns"
        :data="products"
        selectionMode="multiple"
        v-model:selection="selection"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var j,k,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataTable
    },
    setup() {
      return {
        args,
        defaultColumns
      };
    },
    template: \`
      <DataTable :columns="defaultColumns" :data="[]" :loading="true" v-bind="args" />
    \`
  }),
  args: {}
}`,...(M=(k=g.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const Na=["Default","AllCellTypes","WithCardStyle","SmallSize","WithExpansion","WithPagination","WithSelection","Loading"];export{m as AllCellTypes,l as Default,g as Loading,d as SmallSize,p as WithCardStyle,c as WithExpansion,u as WithPagination,i as WithSelection,Na as __namedExportsOrder,Ma as default};
