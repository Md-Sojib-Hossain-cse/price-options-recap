import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("-")[1])
                    }
                    return obj;
                })
                setPhones(phoneFakeData);
            })
    }, [])
    return (
        <div className="w-5/6 mx-auto">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart width={730} height={250} data={phones} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;