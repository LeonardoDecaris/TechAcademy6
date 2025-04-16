import { useForm } from "react-hook-form";
import api from "@/service/api";

import {
  validateName,
  validateCPF,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "@/utils/UserValidation";
import { useState } from "react";

interface FormValues {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function useHookRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const password = watch("password");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegister = async (data: FormValues) => {
    try {
      await api.post("/users", {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        admin: false,
      });
      window.location.reload();
    } catch (error) {
      setErrorMessage("Error: Erro ao se resgistrar-se");
      console.log(error);
    }
  };

  return {
    register: {
      name: register("name", {
        required: "Name is mandatory",
        validate: validateName,
      }),
      cpf: register("cpf", {
        required: "CPF is mandatory",
        validate: validateCPF,
      }),
      email: register("email", {
        required: "Email is mandatory",
        validate: validateEmail,
      }),
      password: register("password", {
        required: "Password is mandatory",
        validate: validatePassword,
      }),
      confirmPassword: register("confirmPassword", {
        required: "Confirm password is mandatory",
        validate: (value) => validateConfirmPassword(value, password),
      }),
    },
    handleSubmit,
    handleRegister,
    errorMessage,
    setErrorMessage,
    errors,
  };
}

export default useHookRegister;
