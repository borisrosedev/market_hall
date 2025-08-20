<template>

    <main class="app__main dashboard__main px-2">

    <section class="me-5 w-25">

        <div class="accordion" id="dashboard-information-accordion">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Introduction
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <span v-mix:fw.success="{ fw: 'bold'}">🎉 Welcome on your dashboard</span> 
                    <p>Here you can access your cart and account's settings</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Your settings
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
                <span>You can: </span>
                <ul>
                    <li>Edit your profile</li>
                    <li>Add a profile picture</li>
                    <li>Delete your account</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                🛍️ Your cart
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
                <span>Provided you have a cart's content, you can: </span>
                <ul>
                    <li>Show its content</li>
                    <li>Change its content</li>
                    <li>Delete its content</li>
                    <li>Proceed to payment</li>
                </ul>
            </div>
            </div>
        </div>
        </div>

    </section>
   
    <section class="d-flex align-items-start w-75">
         <section class="dashboard__user-info d-flex align-items-start w-50">
            <CustomCard 
                v-if="currentUser.id"
                
                :obj="{
                    url: `http://localhost:5000/static/files/${currentUser.photo_name}`,
                    classNames: 'w-50',
                    role: `${currentUser.role}`,
                    listItems: [
                        {
                            content: `Firstame: ${currentUser.firstname}`
                        },
                        {
                            content: `Lastame: ${currentUser.lastname}`
                        },
                        {
                            content: `Email: ${currentUser.lastname}`
                        }
                    ],
                    name: currentUser.fullname
                    
                }"
            >
                
            <section class="d-flex justify-content-between my-2 px-2">

                <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit Profile</button>
            
                <CustomButton
                    @click="confirmLogout"
                    :obj="{
                        content: 'Log out',
                        type: 'button',
                        classNames: 'btn-outline-danger'
                    }" 
                    
                />



            </section>
               
            
            </CustomCard>
        </section>
        <section class="dashboard__cart-info d-flex">
            <div v-if="!getCart.length" class="alert alert-primary d-flex flex-column" role="alert">
                <span v-mix.alert>Your cart is empty</span>
                <RouterLink class="btn btn-primary my-2" to="products">Get Products</RouterLink>
            </div>
        </section>

       
    </section>

    <CustomModal 
        title="Edit Profile"
        context="edit-user"
        modal-id="edit-modal" 
        :is-modal-form="true"
        form-id="'edit-form'" 
        :fields="editFormTextFields"
        :file-field="edtiFormFileField"
        
    />
    </main>

</template>

<script setup lang="ts">
import { currentUser, getCurrentUser } from "../../stores/user-store"
import CustomCard from "../../components/shared-components/CustomCard.vue"
import CustomButton from "../../components/shared-components/CustomButton.vue";
import CustomModal from "../../components/shared-components/CustomModal.vue";
import { useUserAuth } from "../../composables/useUserAuth"
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router"
import { useMessagesStore } from "../../stores/messages-store";
import { getUserCart, getCart } from "../../stores/cart-store";
const { showToast, hideToastNow } = useMessagesStore()

const { logoutUser } = useUserAuth()

const router = useRouter()


const edtiFormFileField = {
    id: 'file',
    accept: '.jpg, .jpeg, .png, .gif, .webp',
    labelContent: 'Upload a profile picture',
    helpId: 'file-help',
    helpContent: 'only .jpg, .jpeg, .png, .gif, .webp are allowed'

}

const editFormTextFields = [

    {
        labelContent: 'Firstname',
        id: "firstname",
        helpId: "firstname-help",
        type: 'text',
        helpContent: "Ex: joe"
    },
    {
        labelContent: 'Lastname',
        id: "lastname",
        helpId: "lastname-help",
        type: 'text',
        helpContent: "Ex: doe"
    },
    {
        labelContent: 'Email',
        id: "email",
        type: "email",
        helpId: 'email-help',
        helpContent: "Ex: joe@gmail.com"
    },
    {
        labelContent: 'Password',
        id: "password",
        type: "password",
        helpId: 'password-help',
        helpContent: "(at least 8 characters, uppercase, lowercase, number)"
    },
    {
        labelContent: 'Confirm Password',
        id: "confirmed-password",
        helpId: 'confirmed-password-help',
        type: "password",
        helpContent: "Must be the same as the previous one"
    }
]

onMounted(async() => {
    await getCurrentUser()
    if(!currentUser.value.id) {
        router.push('login')
    }
    await getUserCart()
})


watch(currentUser.value, (val:any) => {
    if(!val.id) { 
        logoutUser()
        router.push('login')
    }
})




const onLogout = async() => {
 const isLoggedOut = await logoutUser()
 if(isLoggedOut){
    router.push('login')
    hideToastNow()
 }
}
const onCancel = () => {
  hideToastNow()
}



const confirmLogout = () => {
    showToast({
        summary: 'Confirmation',
        detail: 'Are you sure you want to log out ?',
        type: 'info',
        actions: [
        {
            content: 'Yes',
            handler: onLogout
        },
        {
            content: 'No',
            handler: onCancel
        }
        ]
    })
}





</script>

<style lang="css">
.dashboard__main {
    padding-bottom: 100px;
}
</style>
