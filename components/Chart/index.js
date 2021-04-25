import React from 'react'
import { CustomLayout } from '..'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
export default function Chart() {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]
    return (
        <div>
            
        </div>
        // <div className="">
        //     <CustomLayout bg="bg-white">
        //         <BarChart width={400} height={200} data={data} >
        //             <XAxis dataKey="name" />
        //             <Tooltip />
        //             <Legend />
        //             <Bar dataKey="pv" fill="#6379F4" />
        //         </BarChart>
        //     </CustomLayout>
        // </div>
    )
}
