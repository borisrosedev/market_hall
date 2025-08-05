const userService = {
  async signup(data: any) {
    try {
      const serverResponse = await fetch("http://localhost:5000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const parsedResponse = await serverResponse.json();

      console.log(parsedResponse);
    } catch (err) {
      console.log(err);
    }
  },
};


export default userService