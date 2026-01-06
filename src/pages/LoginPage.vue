<template>
  <main class="app__main login__main">
    <section class="row justify-content-center w-100">
      <!-- pour ouvrire les formulairs en dessus de la page d'accueil  -->
  <div v-if="isModalOpen" class="modal-overlay">
  
    <div class="modal-container">
      <section class="modal-content">
        <!-- Bouton fermer X -->
        <button class="modal-close" @click="closeModal">
          ✕
        </button>

        <h2 class="modal-title">
          Connectez-vous à votre<br />compte ou inscrivez-vous <RouterLink to="/register">Ici</RouterLink>
          <div class="my-3">
       
      </div>
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
  </section>
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
const isModalOpen = ref(true); // Modal ouvert par défaut

const closeModal = () => {
  isModalOpen.value = false;
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
/* Fond semi-transparent qui couvre la page */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}


.modal-container {
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 400px;
  padding: 30px;
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


.modal-content {
  position: relative;
}


.modal-close {
  position: absolute;
  top: -10px;
  right: -10px;
  background: white;
  border: 2px solid #D4AF37;
  color: #D4AF37;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms;
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
  margin-bottom: 20px;
  line-height: 1.4;
}


.btn-gold {
  background-color: #D4AF37 !important;
  border: none !important;
  color: white !important;
  font-weight: bold;
  border-radius: 4px;
}

.btn-gold:hover {
  background-color: #C9A027 !important;
}

.btn-gold-outline {
  background-color: transparent !important;
  border: 2px solid #D4AF37 !important;
  color: #D4AF37 !important;
  font-weight: bold;
  border-radius: 4px;
}

.btn-gold-outline:hover {
  background-color: rgba(212, 175, 55, 0.1) !important;
}

.login__message {
  font-size: 14px;
}


</style>