import { SoundFormData } from "@/interface/sound/intefaceUploadSound";
import { useForm } from "react-hook-form";
import api from "@/service/apiService";

function useHookUploadSound() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SoundFormData>({ mode: "onSubmit" });

  const handleSound = async (data: SoundFormData) => {
    try {
      const file = data.directory[0];
      await api.post("/items", {
        name: data.name,
        author_id: data.author,
        category_id: data.category,
        directory: file.name,
      });
      location.reload();
    } catch (error) {
      alert("Error registering sound.");
      console.log(error);
    }
  };

  return {
    register: {
      name: register("name", { required: "Name is required" }),
      directory: register("directory", { required: "Directory is required" }),
    },
    control,
    handleSubmit,
    handleSound,
    errors,
  };
}

export default useHookUploadSound;
