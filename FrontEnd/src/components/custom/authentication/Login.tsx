import GlobalButton from "../global/GlobalButton";
import InputPassword from "../global/InputPassword";
import useHookLogin from "@/hook/hookLogin";
import AlertError from "../error/AlertError";
import Input from "../global/Input";

type FormProps = {
    className?: string;
};

function Login({ className }: FormProps) {

    const { register, handleSubmit, errors, handleLogin, desabledLogin, errorMessage, setErrorMessage } = useHookLogin();
    const errorStyle = "text-red-500 text-sm pl-5";

    return (
        <div>
            {errorMessage && <AlertError message={errorMessage} onClose={() => setErrorMessage(null)} />}

            <form onSubmit={handleSubmit(handleLogin)} className={`${className} flex-col gap-4 w-full`}>

                <section className="flex flex-col gap-1">
                    <Input type="email" id="email" placeholder="Email" {...register.email} />
                    {errors.email && <span className={errorStyle}>{errors.email.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword placeholder="Password" {...register.password} />
                    {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
                </section>

                <GlobalButton children={"Login"} buttonPosition="justify-end" disabled={desabledLogin} />
            </form>
        </div>
    );
}

export default Login;