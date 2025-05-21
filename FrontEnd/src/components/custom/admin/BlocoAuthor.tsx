import AlertDeleteAuthor from "../error/AlertDeleteAuthor";
import { ButtonClose, ButtonDown } from "../global/GlobalButton";
import AlertUpdateAthor from "../sound/AlertUpdateAthor";

type Props = {
    Name: string;
    idAuthor: number;
}

const BlocoAuthor = ({ Name, idAuthor }: Props) => {

    const styleAuthor = "flex flex-col gap-1.5 bg-white/20 backdrop-blur-xl rounded-[10px] border-1 border-white font-bold text-white p-2.5 || max-w-[300px]";
    return (
        <div className={`${styleAuthor} `} data-aos="fade-up">
            <span className="font-medium" >Name: {Name}</span>
                <div className="flex justify-between items-center">
                    <AlertDeleteAuthor IdAuthor={idAuthor!} >
                        <ButtonClose children="Delete"/>
                    </AlertDeleteAuthor>

                    <AlertUpdateAthor idAuthor={idAuthor!}>
                        <ButtonDown children="Update" />
                    </AlertUpdateAthor>
                </div>
        </div>
    );
};

export default BlocoAuthor;