import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    className?: string;
    id?: string;
    title?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    const styleInput = "w-full bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const { placeholder, type, className, id, onChange, title, ...rest } = props;

    return (
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            title={title}
            ref={ref}
            className={`${className} ${styleInput}`}
            onChange={onChange}
            {...rest}
        />
    );
});

export default Input;