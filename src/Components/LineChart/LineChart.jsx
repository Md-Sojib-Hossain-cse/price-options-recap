import { LineChart as LChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";


const LineChart = () => {
    const mathMarks = [
        {
            "id": 101,
            "name": "Eleanor",
            "math_marks": 92,
            "physics_marks": 85,
            "chemistry_marks": 90
        },
        {
            "id": 102,
            "name": "Gabriel",
            "math_marks": 85,
            "physics_marks": 78,
            "chemistry_marks": 82
        },
        {
            "id": 103,
            "name": "Isabella",
            "math_marks": 78,
            "physics_marks": 90,
            "chemistry_marks": 85
        },
        {
            "id": 104,
            "name": "James",
            "math_marks": 90,
            "physics_marks": 85,
            "chemistry_marks": 88
        },
        {
            "id": 105,
            "name": "Lily",
            "math_marks": 87,
            "physics_marks": 82,
            "chemistry_marks": 91
        },
        {
            "id": 106,
            "name": "Mason",
            "math_marks": 79,
            "physics_marks": 73,
            "chemistry_marks": 80
        },
        {
            "id": 107,
            "name": "Natalie",
            "math_marks": 95,
            "physics_marks": 88,
            "chemistry_marks": 93
        },
        {
            "id": 108,
            "name": "Oliver",
            "math_marks": 83,
            "physics_marks": 76,
            "chemistry_marks": 79
        },
        {
            "id": 109,
            "name": "Penelope",
            "math_marks": 88,
            "physics_marks": 82,
            "chemistry_marks": 85
        },
        {
            "id": 110,
            "name": "Quinn",
            "math_marks": 91,
            "physics_marks": 85,
            "chemistry_marks": 89
        }
    ]


    return (
        <div className="w-5/6 mx-auto">
            <ResponsiveContainer width="100%" height={500}>
                <LChart width={500} height={300} data={mathMarks}>
                    <Line dataKey="math_marks" stroke="red"></Line>
                    <Line dataKey="physics_marks" stroke="blue"></Line>
                    <Line dataKey="chemistry_marks" stroke="yellow"></Line>
                    <XAxis dataKey="name" />
                    <YAxis />
                </LChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;