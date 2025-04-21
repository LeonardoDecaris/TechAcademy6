import api from "@/service/apiService";
import { useCallback, useState } from "react";
import { Item } from "@/interface/category/InterfaceCategory";

function useHookGetAllCategory() {
  const [category, setcategory] = useState<Item[]>([]);

  const getCategories = useCallback(async () => {
    try {
      const { data } = await api.get("/categories");
      setcategory(data);
    } catch (error) {
      alert("Error loading categories.");
      console.error(error);
    }
  }, []);
  return {
    getCategories,
    category,
  };
}

export default useHookGetAllCategory;
