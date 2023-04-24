import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { createAccountApi,activeAccountApi } from "../../Components/API/register.api";

function useLogicRegister() {
  const [formData, setFormData] = useState({
    fullname: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    isChecked: {value:false},
  });
  const [validMsg, setValidMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log("formData", formData);

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    console.log(" name >>", name);
    console.log("zzzz", value);
    setFormData((preData) => {
      return {
        ...preData,
        [name]: {
          ...preData[name],
          value: name === 'isChecked' ? value ==='true' : value,
        },
      };
    });
  };
  
  const validate = () => {
    const msg = {};
    if (isEmpty(formData.fullname.value)) {
      msg.fullname = "Please enter the name";
    }
    if (formData.email.value === "") {
      msg.email = "Please enter the email";
    } else if (!isEmail(formData.email.value)) {
      msg.email = "Please enter the valid email";
    }
    if (formData.password.value === "") {
      msg.password = "Please enter the password";
    } else if (formData.password.value.length < 8) {
      msg.password = "Please enter the password more than 7 characters";
    }
    setValidMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  async function signUp() {
    const isValid = validate();
    if (!isValid) return;
    setLoading(false);
    let res = {};
    try {
      console.log("1")
     res =await createAccountApi(formData);
      console.log("res->", res);
      console.log(res.data);
      console.log(res.data.user);
    } catch (error) {
      setLoading(true);
      console.log(11);
      console.log(error);
      toast.error("Tài khoản đã tồn tại", {
        closeButton: false,
      });
    }
    let response = {};
    try {
     response = await activeAccountApi(res.data.user)
      if (response.data.status === 200) {
        setLoading(false);
      }
      setLoading(true);
      toast.success("Đăng kí thành công!", {closeButton: false,});
      await delay(2000);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log("error phase 1");
    }
  }
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const debounce = (fn, delay) => {
    delay = delay || 0;
    let timerID;
    console.log("timerID: " + timerID);
    return () => {
      console.log("a");
      if (timerID) {
        clearTimeout(timerID);
        timerID = null;
      }
      timerID = setTimeout(() => {
        fn();
      }, delay);
    };
  };
  return {
    validMsg,
    formData,
    setFormData,
    signUp,
    loading,
    setLoading,
    debounce,
    onChangeValue,
  };
}

export default useLogicRegister;
