
const authService = {


    async login({ email, password }: { email: string, password: string }) {

        try {
            const serverResponse = await fetch("http://localhost:5000/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                credentials: "include" as RequestCredentials,
                body: JSON.stringify({ email, password })
            })

            const parsedResponse = await serverResponse.json()
            console.log(parsedResponse)
            return parsedResponse

        } catch (err) {
            console.log(err)
            
        }
       
    },

    async logout(){

        try {
            const serverResponse = await fetch('http://localhost:5000/api/v1/auth/logout', {
                method: "GET",
                credentials: "include" as RequestCredentials
            })

            const parsedResponse = await serverResponse.json()
            console.log(parsedResponse)
            return parsedResponse
        } catch(err){
            console.log(err)
        }
      
    }
}

export default authService