<template>

    <main class="app__main dashboard__main">

        <CustomCard 
            v-if="currentUser.id"
            :obj="{
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
          
                <CustomButton
                    @click="onLogout"
                    :obj="{
                        content: 'Log out',
                        type: 'button',
                        classNames: 'btn-outline-danger'
                    }" 
                       
                />
          
        </CustomCard>

    </main>

</template>

<script setup lang="ts">
import { currentUser, getCurrentUser } from "../../stores/user-store"
import CustomCard from "../../components/shared-components/CustomCard.vue"
import CustomButton from "../../components/shared-components/CustomButton.vue";
import { useUserAuth } from "../../composables/useUserAuth"
import { onMounted } from "vue";
import { useRouter } from "vue-router"

const { logoutUser } = useUserAuth()

const router = useRouter()

onMounted(async() => {
    console.log("✅ Dashboard Mounted")
    await getCurrentUser()
    console.log("Current User", currentUser.value)
})


function onLogout(){
    const isLoggedOut = logoutUser()
    if(!isLoggedOut) {
        return
    }
    router.push('login')

}



</script>

<style lang="css">
.dashboard__main {
    align-items: center;
    justify-content: center;
}
</style>
