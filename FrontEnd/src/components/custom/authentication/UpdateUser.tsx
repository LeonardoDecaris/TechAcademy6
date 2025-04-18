import useHookUpdateUser from "@/hook/hookUpdateUser";
import GlobalButton from "../global/GlobalButton";
import Input from "../global/Input";
import Aos from "aos";
import { useEffect } from "react";

const UpdateUser = () => {
    const { register, errors, handleUpdadeUser, handleSubmit } = useHookUpdateUser();
    const errorStyle = "text-red-500 text-sm pl-5";

    useEffect(() => {
        Aos.init({ duration: 400, delay: 0 });
    }, []);

    return (
        <form className="flex flex-col w-full" onSubmit={handleSubmit(handleUpdadeUser)}>
            <section className="flex flex-col gap-1">
                <Input type="text" id="name" placeholder="Username" {...register.name} />
                {errors.name && <span className={errorStyle} data-aos="fade">{errors.name.message}</span>}
            </section>

            <GlobalButton children={"Update"} buttonPosition="justify-end" />
        </form>
    );
};

export default UpdateUser;