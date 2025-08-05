import apiResource from "../data-resources/data-remote-resources/api-resources";

const userService = {
  async signup(data: any) {
    try { 
      const parsedResponse = await apiResource.send(data, "/users","POST")
      console.log(parsedResponse);
      return parsedResponse
    } catch (err) {
      console.log(err);
    }
  },
};


export default userService;