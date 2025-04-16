import { useHookNewPassword } from "@/hook/hookNewPassword";
import InputPassword from "../global/InputPassword";
import GlobalButton from "../global/GlobalButton";
import AlertError from "../error/AlertError";

const NewPassword = () => {
    const { register, errors, handleSubmit, handleNewPassword, errorMessage, setErrorMessage } = useHookNewPassword();
    const errorStyle = "text-red-500 text-sm pl-5";


    return (
        <div>
            {errorMessage && <AlertError message={errorMessage} onClose={() => setErrorMessage(null)} />}

            <form className={`flex flex-col gap-4 w-full `} onSubmit={handleSubmit(handleNewPassword)}>
                <section className="flex flex-col gap-1">
                    <InputPassword placeholder="Password" {...register.password} />
                    {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword placeholder="Confirm Password" {...register.confirmPassword} />
                    {errors.confirmPassword && <span className={errorStyle}>{errors.confirmPassword.message}</span>}
                </section>
                <GlobalButton children={"New Pass"} buttonPosition="justify-end" />
            </form>
        </div>
    );
}

export default NewPassword;