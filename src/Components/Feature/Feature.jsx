import { FaCheck } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <p className="text-base flex items-center gap-2"><FaCheck className="text-green-300"/>{feature}</p>
    );
};

export default Feature;