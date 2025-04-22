import { PaginationComponent } from "@/components/custom/pagination/ConponentesPagination";
import ComponentSound from "@/components/custom/sound/ComponentSond";
import useHookGetAllSound from "@/hook/sound/hookGetAllSound";
import Loading from "@/components/custom/global/Loading";
import Search from "@/components/custom/global/Search";
import buscar from "@/assets/icons/search.svg";

import { useState, useEffect } from "react";
import AOS from "aos";

const Sound = () => {

    const [inputValue, setInputValue] = useState("");
    const {
        getAllItems,
        filteredSounds,
        paginatedSounds,
        currentPage,
        setCurrentPage,
        totalPages,
        loading,
        setSearchTerm,
    } = useHookGetAllSound();


    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
        getAllItems();
    }, [getAllItems]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchTerm(inputValue);
        getAllItems();
    };

    return (
        <main className="px-2.5 pt-14 max-w-[1220px] m-auto flex flex-col gap-10">

            <h2 className="text-3xl not-visited:font-semibold text-center">Search Sound FX</h2>
            <Search inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)} handleSearch={handleSearch} icons={buscar} />

            <section className="flex flex-col gap-2.5">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {!filteredSounds.length && (
                            <>
                                <span className="text-center">Nenhum resultado encontrado</span>
                                <span className="text-center">Por favor recarregue a página</span>
                            </>
                        )}
                        {paginatedSounds.map((item, index) => (
                            <ComponentSound
                                src={`../../../public/audio/${item.directory}`}
                                key={index}
                                name={item.name}
                                author={item.author?.name}
                                category={item.category?.name}
                                className1="flex"
                                className2="hidden"
                            />
                        ))}
                    </>
                )}
            </section>

            <PaginationComponent
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </main>
    );
};

export default Sound;



