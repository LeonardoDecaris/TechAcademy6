
import Logouser from "@/assets/image/lucas.jpg";

function UserSettings() {

    const styleContainerLogo: string = "bg-white/10 border-b-1 border-white backdrop-blur-sm rounded-t-2xl | p-2.5";
    const styleLogo: string = "w-24 rounded-2xl  ";


    return (
        <main className="min-h-[80vh] max-w-[600px] m-auto flex justifyr items-center">
            <section className="w-full bg-white/5 border-1 border-white backdrop-blur-sm rounded-xl">
                <div className={styleContainerLogo}>
                    <img src={Logouser} alt={'pedrozo'} className={`${styleLogo}`} />
                    <h3>Name: Lucas Carvalho Pedrozo</h3>
                </div>
            </section>
        </main>
    );
}

export default UserSettings;