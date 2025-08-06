import apiResource from "../data-resources/data-remote-resources/api-resources";

const userService = {
  async signup(data: any) {
    try { 
      //http://localhost:5000/api/v1/users
      const parsedResponse = await apiResource.send(data, "/users","POST")
      console.log(parsedResponse);
      return parsedResponse
    } catch (err) {
      console.log(err);
    }
  },
};


export default userService;