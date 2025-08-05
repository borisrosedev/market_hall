import apiResource from "../data-resources/data-remote-resources/api-resources";
const authService = {
  async login(data: { email: string; password: string }) {
    try {
      const parsedResponse = apiResource.send(
        data,
        "/auth/login",
        "POST",
        "include"
      );
      console.log(parsedResponse);
      return parsedResponse;
    } catch (err) {
      console.log(err);
    }
  },

  async logout() {
    try {
      const parsedResponse = await apiResource.get("/auth/logout");
      console.log(parsedResponse);
      return parsedResponse;
    } catch (err) {
      console.log(err);
    }
  },
};

export default authService;
