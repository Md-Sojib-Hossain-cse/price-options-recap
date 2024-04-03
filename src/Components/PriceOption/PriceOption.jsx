import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    console.log(option)
    const { id, name, price, features } = option;
    return (
        <div className="bg-blue-500 rounded-lg text-white p-4 text-center flex justify-between flex-col">
            <div className="space-y-4">
                <h2>
                    <span className="text-5xl">${price}</span>
                    <span className="text-xl">/mon</span>
                </h2>
                <h4 className="text-2xl">{name}</h4>
                <ul className="space-y-1">
                    {
                        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                    }
                </ul>
            </div>
            <button className="mt-6 bg-green-400 rounded-lg px-4 py-3 font-bold hover:bg-green-600 duration-500">Buy Now</button>
        </div>
    );
};

export default PriceOption;