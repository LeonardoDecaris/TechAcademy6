import { useAuth } from "@/context/AuthContext";
import api from "@/service/apiService";
import axios from "axios";

function useHookDelete() {
  const { logout } = useAuth();

  const handleDelete = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("Usuário não encontrado.");
        return;
      }
      await api.delete(`/users/${userId}`);
      alert("Usuario excluído com sucesso");
      logout();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error?.response?.data.error
            .map((e: { message: string }) => e.message)
            .join(", ") || "Erro ao excluir cadastro";
        alert(errorMessage);
      }
    }
  };

  return {
    handleDelete,
  };
}

export default useHookDelete;
