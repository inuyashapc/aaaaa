import axios from "axios";

export const loginAccountApi = async (loginData) => {
    return await axios.post(
        "https://dev.go.locate.sa/api/admin/api/v1/test/login",
        {
          email: loginData.email.value,
          password: loginData.password.value,
        }
      );
}
export const profileAccountApi = async (token) => {
    return await axios.get(
        "https://dev.go.locate.sa/api/admin/api/v1/test/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
}