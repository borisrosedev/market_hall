import apiResource from "../data-resources/data-remote-resources/api-resources";

const contactus = {
  async contact(data: any) {
    try {
      // Send contact data to the server
      /*
      //http://localhost:5000/api/v1/contactus
      const parsedResponse = await apiResource.send(
        data,
        "/contactus/",
        "POST"
      );
      */
      console.log(data);

      return "send email successfully";
    } catch (err) {
      console.log(err);
    }
  },
};

export default contactus;
