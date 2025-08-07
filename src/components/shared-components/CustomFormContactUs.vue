<!-- Attention idem pour le moment à CustomFormInterface.ts  -->

<template>
  <form
    :class="'col-12 col-xl-3 col-md-6 col-sm-8 ' + (classNames ?? '')"
    @submit.prevent="onSubmit"
    @reset="onReset"
  >
    <section>
      <FormTextField
        @on-input-updated="onFieldUpdated"
        v-for="(field, i) in fields"
        :key="i"
        :obj="field"
      />
    </section>
    <section v-if="showButtons">
      <CustomButton v-for="(btn, i) in buttons" :obj="btn" :key="i" />
    </section>
    <section
      class="my-3 d-flex flex-column"
      style="transition: height 300ms ease-in-out"
    >
      <CustomMessage
        v-for="(message, i) in messages"
        :key="i"
        :obj="message"
        v-if="messages && messages.length > 0"
      />
    </section>
  </form>
</template>
<script lang="ts" setup>
import FormTextField from "../form-components/FormTextField.vue";
import CustomButton from "./CustomButton.vue";
import CustomMessage from "./CustomMessage.vue";
import type { CustomMessageInterface } from "../../interfaces/shared-interfaces/CustomMessageInterface";
import type {
  CustomFormHandlersType,
  CustomFormInterface,
} from "../../interfaces/shared-interfaces/CustomFormInterface";

defineProps<CustomFormInterface & CustomFormHandlersType>();
const emit = defineEmits(["onFieldUpdated"]);

const onFieldUpdated = (obj: any) => {
  emit("onFieldUpdated", obj);
};
</script>
