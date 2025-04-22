import { ButtonClose } from "../global/GlobalButton";

type Props = {
    Name: string;
    onClick?: () => void;
}

const BlocoAuthorCatg = ({ Name, onClick }: Props) => {

    const styleAuthor = "flex flex-col gap-1.5 bg-white/20 backdrop-blur-xl rounded-[10px] border-1 border-white font-bold text-white p-2.5 || max-w-[300px]";

    return (
        <div className={`${styleAuthor}`} data-aos="fade-up">
            <span className="font-medium" >Name: {Name}</span>
            <ButtonClose children="Delete" onClick={onClick} buttonPosition="justify-center" />
        </div>
    );
};

export default BlocoAuthorCatg;