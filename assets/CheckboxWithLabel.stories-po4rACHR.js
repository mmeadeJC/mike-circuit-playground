import{r as c}from"./iframe-BF79XtSp.js";import{_ as o}from"./CheckboxWithLabel.vue-BXWhMwWQ.js";import"./RichText.vue-CqGWfsH6.js";import{r as m}from"./InformationCircleIcon-Bb4ZZsW1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-P-Yy9vDb.js";import"./index-CR4bzIFl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-NvGJIH0G.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-ZhWAdK_X.js";const L={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Checkbox With Label",component:o,parameters:{layout:"padded"}},e={name:"Simple label",render:()=>({components:{CheckboxWithLabel:o},setup(){return{autoJoin:c(!0)}},template:`
      <div class="max-w-3xl">
        <CheckboxWithLabel
          v-model="autoJoin"
          inputId="checkbox-auto-join"
          :binary="true"
        >
          <template #label>Auto join this network</template>
        </CheckboxWithLabel>
      </div>
    `})},t={name:"With info tooltip",render:()=>({components:{CheckboxWithLabel:o,InformationCircleIcon:m},setup(){return{showRecoveryKey:c(!1)}},template:`
      <div class="max-w-3xl">
        <CheckboxWithLabel
          v-model="showRecoveryKey"
          inputId="checkbox-recovery-key"
          :binary="true"
        >
          <template #label>
            <span class="inline-flex items-center gap-1">
              <span>Show the FileVault Recovery Key to the user when enabled</span>
              <button
                type="button"
                class="rounded-full text-neutral-subtle hover:text-neutral-base"
                aria-label="More information"
                v-tooltip.top="'When enabled, the recovery key is shown to the user after FileVault is turned on.'"
              >
                <InformationCircleIcon class="size-4" />
              </button>
            </span>
          </template>
        </CheckboxWithLabel>
      </div>
    `})};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Simple label',
  render: () => ({
    components: {
      CheckboxWithLabel
    },
    setup() {
      const autoJoin = ref(true);
      return {
        autoJoin
      };
    },
    template: \`
      <div class="max-w-3xl">
        <CheckboxWithLabel
          v-model="autoJoin"
          inputId="checkbox-auto-join"
          :binary="true"
        >
          <template #label>Auto join this network</template>
        </CheckboxWithLabel>
      </div>
    \`
  })
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,l,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'With info tooltip',
  render: () => ({
    components: {
      CheckboxWithLabel,
      InformationCircleIcon
    },
    setup() {
      const showRecoveryKey = ref(false);
      return {
        showRecoveryKey
      };
    },
    template: \`
      <div class="max-w-3xl">
        <CheckboxWithLabel
          v-model="showRecoveryKey"
          inputId="checkbox-recovery-key"
          :binary="true"
        >
          <template #label>
            <span class="inline-flex items-center gap-1">
              <span>Show the FileVault Recovery Key to the user when enabled</span>
              <button
                type="button"
                class="rounded-full text-neutral-subtle hover:text-neutral-base"
                aria-label="More information"
                v-tooltip.top="'When enabled, the recovery key is shown to the user after FileVault is turned on.'"
              >
                <InformationCircleIcon class="size-4" />
              </button>
            </span>
          </template>
        </CheckboxWithLabel>
      </div>
    \`
  })
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const K=["Default","WithInfoTooltip"];export{e as Default,t as WithInfoTooltip,K as __namedExportsOrder,L as default};
