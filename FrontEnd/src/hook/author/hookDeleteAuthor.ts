import api from "@/service/apiService";

function useHookDeleteAuthor() {
  const handleDelete = async (deleteId: number) => {
    try {
      await api.delete(`/authors/${deleteId}`);
      alert("Category deleted successfully!");
      location.reload();
    } catch (error) {
      alert("Error deleting category. Please try again.");
      console.log(error);
    }
  };

  return {
    handleDelete,
  };
}

export default useHookDeleteAuthor;
