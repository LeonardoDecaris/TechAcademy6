import { ButtonClose, ButtonDown } from "@/components/custom/global/GlobalButton";
import Logouser from "@/assets/image/lucas.jpg";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import useHookDelete from "@/hook/hookDeleteUser";
import useHookGetUser from "@/hook/hookGetUser";

function UserSettings() {
    const { logout } = useAuth();
    const { handleDelete } = useHookDelete();
    const navigate = useNavigate();
    const { userAtributes, loading } = useHookGetUser();

    const styleContainerLogo: string = "bg-black/10 border-1 border-white/50 backdrop-blur-sm rounded-[12px] min-[500px]:flex gap-2 p-1.5";
    const styleLogo: string = "w-18 rounded-[6px] mx-auto min-[500px]:mx-0";
    const styleSpan: string = "text-[24px] text-white m-auto font-bold";



    return (
        <main className="min-h-[80vh] max-w-[600px] mx-auto flex justifyr items-center px-2.5">
            <section className="w-full bg-white/10 border-1 border-white backdrop-blur-sm rounded-xl p-2">

                <div className={styleContainerLogo}>
                    {loading ? (
                        <span className={`${styleSpan}`}>Loading...</span>
                    ) : (
                        <>
                            <img src={Logouser} alt="pedrozo" className={`${styleLogo}`} />
                            <div className="flex flex-col pt-1 text-center min-[500px]:text-left">
                                <span className="text-sm">Name: {userAtributes?.name}</span>
                                <span className="text-sm">Email: {userAtributes?.email}</span>
                                <span className="text-sm">CPF: {userAtributes?.cpf}</span>
                            </div>
                        </>
                    )}
                </div>

                <div>

                </div>

                <section className="flex justify-center flex-col min-[500px]:flex-row ">
                    <ButtonClose children={'Log out'} buttonPosition="justify-center" onClick={() => { navigate('/home'); logout(); }} />
                    <ButtonClose children={'Delete account'} buttonPosition="justify-center" onClick={() => { navigate('/home'); handleDelete(); logout(); }} />
                    <ButtonDown children={'New password'} buttonPosition="justify-center" onClick={() => { navigate('/newPassword'); }} />
                </section>

            </section>
        </main>
    );
}

export default UserSettings;