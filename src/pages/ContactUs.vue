<template>
  <main class="app__main contactus__main">
    <section class="row justify-content-center w-100">
      <CustomForm
        :id="id"
        :fields="fields"
        :buttons="buttons"
        :messages="messages"
        :onSubmit="onSubmit"
        :show-buttons="showButtons"
      />
    </section>

    <section class="my-3 row justify-content-center w-100">
      <p class="col-12 col-xl-3 col-md-6 col-sm-8 fs-6">
        Come back to the landing page <RouterLink to="/">ici</RouterLink>
      </p>
    </section>
  </main>
</template>
<script setup lang="ts">
import CustomForm from "../components/shared-components/CustomForm.vue";
//import CustomFormContactUs from "../components/shared-components/CustomFormContactUs.vue";
import type { FormTextFieldInterface } from "../interfaces/form-interfaces/FomTextFieldInterface";
import { type Reactive, reactive, ref } from "vue";
import type { CustomButtonInterface } from "../interfaces/shared-interfaces/CustomButtonInterface";
import type { CustomMessageInterface } from "../interfaces/shared-interfaces/CustomMessageInterface";
import { useUserAuth } from "../composables/useUserAuth";
import { useRouter } from "vue-router";

//--------------------------COMPOSABLES------------------

const router = useRouter();

//-----------------------CLASSIC OBJECTS---------------------------
const { id, buttons, fields } = {
  id: "contact-form",
  buttons: [
    {
      content: "Contact Us",
      type: "submit",
      classNames: "btn-primary me-3",
    },
  ] as CustomButtonInterface[],

  fields: [
    {
      id: "contactEmail",
      type: "email",
      labelContent: "Email",
      heldId: "emailHelp",
      helpContent: "Ex: john@doe.com",
    },
    {
      id: "objectMail",
      type: "objectMail",
      labelContent: "Object",
      heldId: "objectHelp",
      helpContent: "What is your issue ?",
    },
    {
      id: "messageClient",
      type: "messageClient",
      labelContent: "Message",
      heldId: "messageHelp",
      helpContent: "Briefly describe your issue",
    },
    {
      id: "captcha",
      type: "cptcha",
      labelContent: "Captcha",
      helpId: "cptchaHelp",
      helpContent: "You don't be a robot ...",
    },
  ] as unknown as FormTextFieldInterface[],
};

//-------------------------REACTIVE OBJECTS-----------------------------
const messages = ref<CustomMessageInterface[]>([]);
const showButtons = ref<boolean>(true);
const fieldsValues = reactive<{
  email: string;
  message?: string;
  objectMail: string;
  messageClient: string;
  captcha?: string;
}>({
  email: "",
  objectMail: "",
  messageClient: "",
});

//-------------------------- HANDLERS --------------------------------------

const onFieldUpdated = ({ value, name }) => {
  fieldsValues[name] = value;
};

function onNoEmail() {
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "You forgot the email"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger login__message",
      content: "You forgot the email",
    });
  }
}

function onNoInputs() {
  messages.value = messages.value.filter(
    (mess: CustomMessageInterface) => mess.content !== "You forgot the email"
  );
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "Fill in the form"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger login__message",
      content: "Fill in the form",
    });
  }
  showButtons.value = true;
  return;
}

async function onCompleteForm(
  fieldsValues: Reactive<{ email: string; password: string }>
) {
  showButtons.value = false;
  messages.value = [];
  const { loginUser } = useUserAuth();
  const isConnected = await loginUser({
    email: fieldsValues.email,
    password: fieldsValues.password,
  });
  if (isConnected) {
    messages.value.push({
      content: "Connection succeeded - Redirection to Dashboard in 3 secondes",
      classNames: "text-success login__message",
    });
    setTimeout(() => {
      router.push("/dashboard");
      return;
    }, 3000);
  } else {
    messages.value.push({
      content: "Failed to log in - Retry",
      classNames: "text-danger login__message",
    });
  }
}

async function onSubmit() {
  showButtons.value = false;

  if (!fieldsValues.email && !messages.value) {
    onNoInputs();
  }

  if (!fieldsValues.email) {
    onNoEmail();
  }

  if (!fieldsValues.email) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the email" &&
        mess.content !== "Fill in the form"
    );
  }

  if (fieldsValues.email && fieldsValues.message) {
    onCompleteForm(
      fieldsValues as Reactive<{
        email: string;
        password: string;
        objectMail: string;
        messageClient: string;
        captcha?: string;
      }>
    );
  }

  showButtons.value = true;
}
</script>
<style lang="css">
.contactus__main {
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.contactus__message {
  font-size: 14px;
}
</style>
