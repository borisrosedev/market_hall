<template>
  <main class="app__main login__main">
    <div class="modal-overlay">
      <div class="modal-container">
        <section class="modal-content">

          <button class="modal-close" @click="closeModal">✕</button>

          <h2 class="modal-title">
            Connectez-vous à votre<br />
            compte ou
            <RouterLink to="/register">inscrivez-vous</RouterLink>
          </h2>

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
      </div>
    </div>
  </main>
</template>


<script setup lang="ts">
import { ref } from "vue";
import CustomForm from "../components/shared-components/CustomForm.vue";
import type { FormTextFieldInterface } from "../interfaces/form-interfaces/FomTextFieldInterface";
import { reactive } from "vue";
import type { CustomButtonInterface } from "../interfaces/shared-interfaces/CustomButtonInterface";
import type { CustomMessageInterface } from "../interfaces/shared-interfaces/CustomMessageInterface";
import { useUserAuth } from "../composables/useUserAuth"
import { useRouter } from "vue-router"

const router = useRouter()
const closeModal = () => {
  router.push('/')
}


const { id, buttons, fields } = {
  id: "login-form",
  buttons: [
    {
      content: "Continuer",
      type: "submit",
      id: 'submit-button',
      classNames: "btn-gold me-3",
    },
    {
      content: "Réinitialiser",
      type: "reset",
      id: 'reset-button',
      classNames: "btn-gold-outline",
    },
  ] as CustomButtonInterface[],

  fields: [
    {
      id: "email",
      type: "email",
      labelContent: "E-mail",
      heldId: "emailHelp",
      helpContent: "Ex: john@doe.com",
    },
    {
      id: "password",
      type: "password",
      labelContent: "Mot de passe",
      helpId: "passwordHelp",
      helpContent: "Au moins 12 caractères, 1 symbole, 1 chiffre...",
    },
  ] as FormTextFieldInterface[],
};

const messages = ref<CustomMessageInterface[]>([]);
const showButtons = ref<boolean>(true)
const fieldsValues = reactive<{ email?: string; password?: string }>({});

function onFieldUpdated(
  { name, value }: { name: keyof typeof fieldsValues; value: string }
) {
  fieldsValues[name] = value;
}

function onReset() {
  fieldsValues.email = "";
  fieldsValues.password = "";
  messages.value = [];
}

function onNoPassword(){
  const mess = messages.value.find(
      (mess: CustomMessageInterface) =>
        mess.content == "Vous avez oublié le mot de passe"
    );
    if (!mess) {
      messages.value.push({
        classNames: "text-danger login__message",
        content: "Vous avez oublié le mot de passe",
      });
    }
}

function onNoEmail(){
  const mess = messages.value.find(
      (mess: CustomMessageInterface) => mess.content == "Vous avez oublié l'email"
    );
    if (!mess) {
      messages.value.push({
        classNames: "text-danger login__message",
        content: "Vous avez oublié l'email",
      });
    }
}

function onNoInputs() {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "Vous avez oublié l'email" &&
        mess.content !== "Vous avez oublié le mot de passe"
    );
    const mess = messages.value.find(
      (mess: CustomMessageInterface) => mess.content == "Remplissez le formulaire"
    );
    if (!mess) {
      messages.value.push({
        classNames: "text-danger login__message",
        content: "Remplissez le formulaire",
      });
    }
    showButtons.value = true
    return;
}

async function onCompleteForm(fieldsValues : any) {
  showButtons.value = false
    
    messages.value = [];
    const { loginUser } = useUserAuth()
    const isConnected = await loginUser({ email: fieldsValues.email, password: fieldsValues.password })
    if(isConnected.value == true){
      onReset()
      messages.value.push({
          content: "Connexion réussie - Redirection en 3 secondes",
          classNames: "text-success login__message"
      })
      setTimeout(() => {
        router.push('/dashboard')
        return
      }, 3000)
     
    } else {
       messages.value.push({
          content: "Erreur de connexion - Veuillez réessayer",
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
        mess.content !== "Vous avez oublié l'email" &&
        mess.content !== "Remplissez le formulaire"
    );
  }

  if (fieldsValues.password && !fieldsValues.email) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "Vous avez oublié le mot de passe" &&
        mess.content !== "Remplissez le formulaire"
    );
  }

  if (fieldsValues.email && fieldsValues.password) {
      onCompleteForm(fieldsValues)
  }

  showButtons.value = true
}
</script>

<style lang="css">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.modal-container {
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  padding: 50px;
  margin: 0;
  animation: slideIn 300ms ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border: 2px solid #D4AF37;
  color: #D4AF37;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all 0.2s;
}

.modal-close:hover {
  background: #D4AF37;
  color: white;
}

.modal-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  line-height: 1.4;
}

.modal-container .form-control {
  width: 100%;
  padding: 15px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 45px;
}

.form-control:focus {
  outline: none;
  border-color: #D4AF37;
  box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
}

.modal-container .form-text {
  width: 100%;
  font-size: 13px;
  color: #6e7071;
  margin-top: 6px;
  line-height: 1.4;
}

.modal-container .form-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

.modal-container .form-buttons > * {
  flex: 1;
  min-width: 150px;
  min-height: 50px;
}

.modal-container .btn-gold,
.modal-container .btn-gold-outline {
  width: 100%;
  padding: 12px 20px;
  font-weight: bold;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.modal-container .btn-gold {
  background-color: #D4AF37;
  color: white;
}

.modal-container .btn-gold:hover {
  background-color: #C9A027;
}

.modal-container .btn-gold-outline {
  background-color: transparent;
  border: 2px solid #dc3545;
  color: #dc3545;
}

.modal-container .btn-gold-outline:hover {
  background-color: #dc3545;
  color: white;
}

.btn-outline-danger {
  border: 2px solid #dc3545;
}

.modal-container form {
  width: 100%;
}

@media (max-width: 768px) {
  .modal-container {
    padding: 30px 20px;
    width: 95%;
  }
  
  .modal-container .form-buttons {
    flex-direction: column;
    gap: 10px;
  }
  
  .modal-container .form-buttons > * {
    width: 100%;
    min-width: 100%;
  }

  .modal-container .btn-gold,
  .modal-container .btn-gold-outline {
    width: 100%;
    min-height: 45px;
  }

  .modal-container .form-control {
    min-height: 40px;
    font-size: 16px;
  }
}
</style> 