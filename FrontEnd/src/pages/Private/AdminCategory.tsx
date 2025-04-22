import BlocoAuthorCatg from "@/components/custom/admin/BlocoAuthorCatg";
import GlobalButton from "@/components/custom/global/GlobalButton";
import useHookPostCategory from "@/hook/Categoary/hookPostCategory";

import { useEffect, useState } from "react";
import api from "@/service/apiService";
import AOS from "aos";
import useHookDeleteCategory from "@/hook/Categoary/hookDeleteCategory";
import useHookGetAllCategory from "@/hook/Categoary/hookGetAllCategory";


function AdminCategory() {
    const { handlecategory, setCreateName } = useHookPostCategory();

    const styleInput = "w-full bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const styleForm = "flex flex-col gap-2.5 w-full";
    const styleHr = "h-[3px] rounded-full";

    const { handleDelete } = useHookDeleteCategory();

    const [updateId, setUpdateId] = useState<number | string>("");
    const [updateName, setUpdateName] = useState("");

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
        getCategories();
    }, []);

    const { category, getCategories } = useHookGetAllCategory();

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.put(`/categories/${updateId}`, {
                id: Number(updateId),
                name: updateName,
            });

            alert("Update completed successfully!");
            location.reload();
        } catch (error) {
            alert("Error updating category.");
            console.error(error);
        }
    };


    return (
        <main className="py-14 px-2.5 mx-auto max-w-[1220px]">
            <section className="flex gap-2.5 flex-col min-[700px]:flex-row" data-aos="fade-up">

                <div className="w-full" data-aos="fade-up">
                    <label>Create Category</label>
                    <form onSubmit={handlecategory} className={styleForm}>
                        <input
                            type="text"
                            placeholder="Name Category"
                            className={styleInput}
                            onChange={(e) => setCreateName(e.target.value)}
                        />
                        <GlobalButton children={"Login"} buttonPosition="justify-center" />
                    </form>
                </div>

                <div className="w-full" data-aos="fade-up">
                    <label>Update Category</label>
                    <form onSubmit={handleUpdate} className={styleForm}>
                        <input
                            type="number"
                            placeholder="ID Category"
                            className={styleInput}
                            value={updateId}
                            onChange={(e) => setUpdateId(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Name Category"
                            className={styleInput}
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                        />
                        <GlobalButton children={"Login"} buttonPosition="justify-center" />
                    </form>
                </div>
            </section>

            <div className="py-7"><hr className={styleHr} data-aos="fade-up" /></div>

            <section className="flex flex-wrap gap-3 justify-center items-center">
                {category.map(category => (
                    <BlocoAuthorCatg key={category.id} onClick={() => handleDelete(category.id)} Name={category.name} />
                ))}
            </section>
        </main>
    );
}

export default AdminCategory;
