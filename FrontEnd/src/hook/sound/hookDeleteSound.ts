import api from "@/service/apiService";

function useHoookDeleteSound() {
  const handleDelete = async (id: number) => {
    if (!id) {
      alert("ID do item não definido.");
      return;
    }
    try {
      if (window.confirm("Tem certeza que deseja excluir o item?")) {
        await api.delete(`/items/${id}`);
        location.reload();
      }
    } catch (error) {
      alert("Erro ao excluir o item.");
      console.error(error);
    }
  };

  return {
    handleDelete,
  };
}

export default useHoookDeleteSound;
