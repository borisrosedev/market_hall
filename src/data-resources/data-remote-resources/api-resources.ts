
const API_URL_PREFIX = "http://localhost:5000/api/v1"


const apiResource = {
    async get(endpoint: string , method="GET",credentials: RequestCredentials = 'include'){

        const requestInit = { method, headers: {} } as { method: string, headers: any, credentials: RequestCredentials}
        if(credentials) {
            requestInit.credentials = credentials
        }

        try {
            const serverResponse = await fetch(API_URL_PREFIX + endpoint, requestInit)
            const parsedResponse = await serverResponse.json()
            return parsedResponse
        } catch(err){
            console.log(err)
        }
    },

    async send(data:any, endpoint: string , method: 'POST'|'PATCH'|'PUT' = "POST", credentials?: RequestCredentials){
        const requestInit = { method, headers: {} } as { method:'POST'|'PATCH'|'PUT', headers: any, body: string, credentials?: RequestCredentials }
        if(credentials) {
            requestInit.credentials = credentials;
        }

        requestInit.headers["Content-Type"]="application/json";
        requestInit.body = JSON.stringify(data); 
        try {
            const serverResponse = await fetch(API_URL_PREFIX + endpoint, requestInit);
            const parsedResponse = await serverResponse.json();
            return parsedResponse
        } catch(err){
            console.log(err)
        }
    }
}

export default apiResource