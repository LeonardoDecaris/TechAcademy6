import InputPassword from "../global/InputPassword";
import GlobalButton from "../global/GlobalButton";
import useHookRegister from "@/hook/hookRegister";
import AlertError from "../error/AlertError";
import Input from "../global/Input";

import { useEffect } from "react";
import Aos from "aos";


type FormProps = {
    className?: string;
};

const Register = ({ className }: FormProps) => {

    const { register, errors, handleSubmit, handleRegister, errorMessage, setErrorMessage } = useHookRegister();
    const errorStyle = "text-red-500 text-sm pl-5";

    useEffect(() => {
        Aos.init({ duration: 500, delay: 0 });
    })

    return (
        <div>
            {errorMessage && <AlertError message={errorMessage} onClose={() => setErrorMessage(null)} />}

            <form className={`${className} flex-col gap-4 w-full `} onSubmit={handleSubmit(handleRegister)}>
                <section className="flex flex-col gap-1">
                    <Input type="text" id="name" placeholder="Name" {...register.name} />
                    {errors.name && <span className={errorStyle} data-aos="fade">{errors.name.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <Input type="text" id="cpf" placeholder="CPF" maxLength={11} {...register.cpf} />
                    {errors.cpf && <span className={errorStyle} data-aos="fade">{errors.cpf.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <Input type="email" id="email" placeholder="Email" {...register.email} />
                    {errors.email && <span className={errorStyle} data-aos="fade">{errors.email.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword placeholder="Password" {...register.password} />
                    {errors.password && <span className={errorStyle} data-aos="fade">{errors.password.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword placeholder="Confirm Password" {...register.confirmPassword} />
                    {errors.confirmPassword && <span className={errorStyle} data-aos="fade">{errors.confirmPassword.message}</span>}
                </section>

                <GlobalButton children={"Register"} buttonPosition="justify-end" />
            </form>
        </div>
    );
}

export default Register;