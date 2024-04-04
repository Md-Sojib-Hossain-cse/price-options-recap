
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "29.99",
            "features": [
                "Access to gym facilities",
                "Basic fitness classes",
                "Limited equipment usage"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "49.99",
            "features": [
                "Access to gym facilities",
                "Full range of fitness classes",
                "Cardio and strength equipment usage",
                "Locker room access"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "79.99",
            "features": [
                "Access to gym facilities",
                "All fitness classes including specialty classes",
                "Unlimited equipment usage",
                "Personal training session included per month",
                "Sauna and spa access"
            ]
        }
    ]

    return (
        <div className="mt-6">
            <h3 className="text-3xl">Best Prices in the town</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
            
        </div>
    );
};

export default PriceOptions;