import { useState } from "react";
import {
  loginAccountApi,
  profileAccountApi,
} from "../../Components/API/login.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";

function useLogicLogin() {
  const errorEmail = "Email đăng nhập đã tồn tại";
  const errorPassword = "Password đăng nhập không đúng";
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    isCheck: { value: false },
  });

  console.log(loginData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name => ", name);
    console.log("value => ", value);
    setLoginData((preData) => {
      return {
        ...preData,
        [name]: {
          ...preData[name],
          value: value,
        },
      };
    });
  };

  function validate() {
    if (loginData.email.value === "") {
      onchange = { handleChange };
      <div id="snackbar">Please enter the email</div>;
    }
    if (loginData.password.value === "") {
      <div id="snackbar">Please enter the email</div>;
    }
  }
  const validateForm = (formData) => {
    let newFormData = { ...formData };
    let isValid = true;
    Object.entries(newFormData).forEach(([key, fieldInput]) => {
      switch (key) {
        case "isCheck":
          break;
        case "email":
          if (!validateEmail(loginData.email.value)) {
            newFormData["email"].error =
              "Chưa đúng định dạng email như @gmail.com";
            isValid = false;
          }
          break;
        default:
          if (fieldInput.value.trim().length <= 0) {
            newFormData[key].error = "Không được để rỗng";
            isValid = false;
          } else {
            delete newFormData[key].error;
          }
          break;
      }
      // if (key !== "isCheck") {
      //   if (fieldInput.value.trim().length <= 0) {
      //     newFormData[key].error = "Không được để rỗng";
      //     isValid = false;
      //   } else {

      //     if (!validateEmail(loginData.email.value)) {
      //       newFormData["email"].error =
      //         "Chưa đúng định dạng email như @gmail.com";
      //       isValid = false;
      //     }
      //   }
      // }
    });

    return { isValid, newFormData };
  };

  function validateEmail(email) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return regex.test(email);
  }

  async function submitForm() {
    const validate = validateForm(loginData);
    let res = {};
    if (!validate.isValid) {
      setLoginData({ ...validate.newFormData });
      return; //can hieu
    } else {
      setLoginData({ ...validate.newFormData });
      try {
        res = await loginAccountApi(validate.newFormData);
      } catch (error) {
        console.log(error);
        toast.error("Tên đăng nhập hoặc mật khẩu không đúng", {
          closeButton: false,
        });
      }
    }

    console.log(res.data.token);
    const response = await profileAccountApi(res.data.token);
    console.log(response);
  }
  return {
    handleChange,
    submitForm,
    loginData,
  };
}
export default useLogicLogin;
