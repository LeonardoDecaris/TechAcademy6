import { FormValues } from "@/interface/interfaceRerigister";
import { useForm } from "react-hook-form";
import api from "@/service/apiService";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

function useHookUpdateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const { logout } = useAuth();
  const nevagate = useNavigate();

  const handleUpdadeUser = async (data: { name?: string }) => {
    try {
      const userId = localStorage.getItem("userId");

      await api.put(`/users/${userId}`, {
        name: data.name,
      });
      logout();
      location.reload();
      nevagate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register: {
      name: register("name"),
    },
    handleSubmit,
    handleUpdadeUser,
    errors,
  };
}

export default useHookUpdateUser;
