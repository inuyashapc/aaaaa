import axios from "axios";

export const createAccountApi = async (formData) => {
  return await axios.post(
    "https://dev.go.locate.sa/api/admin/api/v1/test/register",
    {
      fullname: formData.fullname.value,
      email: formData.email.value,
      password: formData.password.value,
    }
  );
};
export const activeAccountApi = async (userId) => {
  return await axios.patch(
    `https://dev.go.locate.sa/api/admin/api/v1/test/users/${userId}/active`,
    {},
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.NjQzNjIyMmQ1NzgwMTEzOWNmYzUyNzMx.FHuabwi3sRHJqU0pBYTZlaZX2nOMgAv88tzNfOPgHpM",
      },
    }
  );
};
