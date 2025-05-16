import api from "@/service/apiService";

function useHookDeleteCategory() {
  const handleDelete = async (deleteId: number) => {
    try {
      await api.delete(`/categories/${deleteId}`);

      alert("Categoria deletada com sucesso!");
      location.reload();
    } catch (error) {
      alert("Erro ao deletar categoria. Tente novamente.");
      console.error(error);
    }
  };
  return {
    handleDelete,
  };
}

export default useHookDeleteCategory;
