import { uniqueId } from "lodash";

const Input = ({ id, label, ...props }) => {
    const htmlId = uniqueId(id || "input_");

    return (
        <label
            htmlFor={htmlId}
            className="border rounded-md border-zinc-600 p-2 group relative focus-within:border-blue-500 w-full"
        >
            <input id={htmlId} className="peer bg-transparent outline-none w-full mt-5" {...props} />
            <div className="absolute text-xl top-1/2 text-zinc-600 -translate-y-1/2 peer-focus:!text-blue-500 peer-focus:text-base peer-focus:top-0 peer-focus:translate-y-0 transition-all whitespace-nowrap">
                {label}
            </div>
        </label>
    );
};

export default Input;
