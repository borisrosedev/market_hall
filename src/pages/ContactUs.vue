<template>
  <header class="app__header">
    <section class="my-3 row justify-content-center w-100">
      <p>
        Nous envoyé un mail directement à
        <a href="mailto:antiquiteOcassion@antique.fr"
          >mail antiquiteOcassion@antique.fr</a
        >
      </p>
    </section>
  </header>
  <main class="app__main contactus__main">
    <section class="row justify-content-center w-100">
      <CustomForm
        @on-field-updated="onFormUpdated"
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
  <footer class="app__footer">
    <section class="my-3 row justify-content-center w-100">
      <p>
        Ou nous envoyé un mail directement à
        <a
          href="mailto:guillotboris@hotmail.com?subject=Claim subject&body=Client Number : XXXXXX "
          >mail antiquiteOcassion@antique.fr</a
        >
      </p>
    </section>
  </footer>
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
import contactus from "../services/contactus-service";
import { stringify } from "querystring";
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
      id: "email",
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
      textarea: true,
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
const msgRetour = ref<string[]>([]);
const showButtons = ref<boolean>(true);
const fieldsValues = reactive<{
  email: string;
  message: string;
  objectMail: string;
  messageClient: string;
  captcha?: string;
}>({
  email: "",
  message: "",
  objectMail: "",
  messageClient: "",
});

//-------------------------- HANDLERS --------------------------------------

function onFormUpdated({ name, value }) {
  fieldsValues[name] = value;
}
function onReset() {
  fieldsValues.message = "";
  fieldsValues.email = "";
  fieldsValues.objectMail = "";
  fieldsValues.messageClient = "";
  fieldsValues.captcha = "";
  messages.value = [];
  console.log(fieldsValues);
}
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
function onNoMessage() {
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "You forgot the message"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger login__message",
      content: "You forgot the message",
    });
  }
}

function onNoObjectMail() {
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "You forgot the object"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger login__message",
      content: "You forgot the object",
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
  fieldsValues: Reactive<{
    email: string;
    objectMail: string;
    messageClient: string;
    captcha?: string;
  }>
) {
  showButtons.value = false;
  messages.value = [];
  const { email, objectMail, messageClient } = fieldsValues;
  /*
  const { msgRetour } = await contactus.contact({
    email,
    objectMail,
    messageClient,
  });
  */
  if ("send email successfully" == "send email successfully") {
    messages.value.push({
      content: "Your message has been sent",
      classNames: "text-success contactus__message",
    });
    /*
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
  }*/
  } else {
    messages.value.push({
      content: "Failed to send message - Retry",
      classNames: "text-danger contactus__message",
    });
  }
}

async function onSubmit() {
  messages.value = [];
  showButtons.value = false;

  if (
    !fieldsValues.email &&
    !fieldsValues.messageClient &&
    !fieldsValues.objectMail
  ) {
    onNoInputs();
  }
  console.log(fieldsValues.email);

  if (!fieldsValues.email) {
    onNoEmail();
  }
  if (!fieldsValues.objectMail) {
    onNoObjectMail();
  }
  if (!fieldsValues.messageClient) {
    onNoMessage();
  }
  /*
  if (!fieldsValues.email) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the email" &&
        mess.content !== "Fill in the form"
    );
  }
*/
  if (
    fieldsValues.email &&
    fieldsValues.messageClient &&
    fieldsValues.objectMail
  ) {
    onCompleteForm(
      fieldsValues as Reactive<{
        email: string;
        objectMail: string;
        messageClient: string;
        captcha?: string;
      }>
    );
  } else {
    messages.value.push({
      content: "Fill in the form",
      classNames: "text-danger contactus__message",
    });
  }

  showButtons.value = true;
}
</script>
<style lang="css">
.contactus__main {
  background-color: rgba(139, 69, 19, 0.3);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 100px;
}

.contactus__message {
  font-size: 14px;
}

.app__footer,
.app_header {
  background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
  color: white;
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
}
</style>
