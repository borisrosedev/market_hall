<template>
  <main class="app__main login__main">
    <section class="row justify-content-center w-100">
      <CustomForm
        :id="id"
        @on-field-updated="onFieldUpdated"
        :fields="fields"
        :buttons="buttons"
        :messages="messages"
        :onReset="onReset"
        :onSubmit="onSubmit"
        :show-buttons="showButtons"
      />
    </section>
    <section class="my-3 row justify-content-center w-100">
      <p class="col-12 col-xl-3 col-md-6 col-sm-8 fs-6">
        No account ? Sign up <RouterLink to="/register">here</RouterLink>
      </p>
    </section>
  </main>
</template>
<script setup lang="ts">
import CustomForm from "../components/shared-components/CustomForm.vue";
import type { FormTextFieldInterface } from "../interfaces/form-interfaces/FomTextFieldInterface";
import { type Reactive, reactive, ref } from "vue";
import type { CustomButtonInterface } from "../interfaces/shared-interfaces/CustomButtonInterface";
import type { CustomMessageInterface } from "../interfaces/shared-interfaces/CustomMessageInterface";
import { useUserAuth } from "../composables/useUserAuth"
import { useRouter } from "vue-router"

//--------------------------COMPOSABLES------------------

const router = useRouter()

//-----------------------CLASSIC OBJECTS---------------------------
const { id, buttons, fields } = {
  id: "login-form",
  buttons: [
    {
      content: "Submit",
      type: "submit",
      id: 'submit-button',
      classNames: "btn-primary me-3",
    },
    {
      content: "Reset",
      type: "reset",
      id: 'reset-button',
      classNames: "btn-outline-danger",
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
      id: "password",
      type: "password",
      labelContent: "Password",
      helpId: "passwordHelp",
      helpContent:
        "Your password should have at least 12 characters, one symbol, one number ...",
    },
  ] as FormTextFieldInterface[],
};


//-------------------------REACTIVE OBJECTS-----------------------------
const messages = ref<CustomMessageInterface[]>([]);
const showButtons = ref<boolean>(true)
const fieldsValues = reactive<{ email?: string; password?: string }>({}) ;



//-------------------------- HANDLERS --------------------------------------

const onFieldUpdated = ({ value, name }) => {
  fieldsValues[name] = value;
};

function onReset() {
  fieldsValues.email = "";
  fieldsValues.password = "";
  messages.value = [];
}


function onNoPassword(){
  const mess = messages.value.find(
      (mess: CustomMessageInterface) =>
        mess.content == "You forgot the password"
    );
    if (!mess) {
      messages.value.push({
        classNames: "text-danger login__message",
        content: "You forgot the password",
      });
    }
}

function onNoEmail(){
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
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the email" &&
        mess.content !== "Your forget the password"
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
    showButtons.value = true
    return;
  
}


async function onCompleteForm(fieldsValues:Reactive<{ email: string; password: string }>) {
  showButtons.value = false
    messages.value = [];
    const { loginUser } = useUserAuth()
    const isConnected = await loginUser({ email: fieldsValues.email, password: fieldsValues.password })
    if(isConnected){
      onReset()
      messages.value.push({
          content: "Connection succeeded - Redirection to Dashboard in 3 secondes",
          classNames: "text-success login__message"
      })
      setTimeout(() => {
        router.push('/dashboard')
        return
      }, 3000)
     
    } else {
       messages.value.push({
          content: "Failed to log in - Retry",
          classNames: "text-danger login__message"
       })
    }
}

async function onSubmit() {
  showButtons.value = false
  
  if (!fieldsValues.email && !fieldsValues.password) {
      onNoInputs()
  }

  if (!fieldsValues.email) {
      onNoEmail()
  }

  if (!fieldsValues.password) {
      onNoPassword()
  }

  if (!fieldsValues.password && fieldsValues.email) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the email" &&
        mess.content !== "Fill in the form"
    );
  }

  if (fieldsValues.password && !fieldsValues.email) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the password" &&
        mess.content !== "Fill in the form"
    );
  }

  if (fieldsValues.email && fieldsValues.password) {
      onCompleteForm(fieldsValues as Reactive<{ email: string; password: string }>)
  }

  showButtons.value = true
}
</script>
<style lang="css">
.login__main {
  background-color: rgba(139, 69, 19, 0.3);
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login__message {
  font-size: 14px;
}
</style>
