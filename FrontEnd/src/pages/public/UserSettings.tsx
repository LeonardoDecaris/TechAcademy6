
import Logouser from "@/assets/image/lucas.jpg";

function UserSettings() {

    const spanStyle = "font-bold ";
    const textStyle = "font-regular ";


    return (
        <main className="min-h-[80vh] max-w-[600px] m-auto flex justifyr items-center">
            <div className="w-full bg-white/10 border-1 border-white backdrop-blur-sm rounded-2xl || p-2.5">
                <section className="flex gap-2.5">
                    <img
                        src={Logouser}
                        className="w-26 h-26 rounded-2xl"
                    />
                    <div className="flex flex-col gap-1">
                        <p className={`${textStyle}`}>
                            <span className={`${spanStyle}`}>Name:</span> Lucas Carvalho Pedrozo
                        </p>
                        <p className={`${textStyle}`}>
                            <span className={`${spanStyle}`}>E-mail:</span> LucasPedroozoo@hotmail.com
                        </p>
                        <p className={`${textStyle}`}>
                            <span className={`${spanStyle}`}>CPF:</span> ***.***.259-67
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default UserSettings;