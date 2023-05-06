import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area
} from "recharts";
import CommonBanner from '../CommonBanner/CommonBanner';

const data = [
    {
        name: "A-01",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    },
    {
        name: "A-02",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    },
    {
        name: "A-03",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    },
    {
        name: "A-04",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    },
    {
        name: "A-05",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    },
    {
        name: "A-06",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    },
    {
        name: "A-07",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    },
    {
        name: "A-08",
        total: 60,
        marks: 60,
        amt: 60,
        cnt: 60
    }
];


const Statistics = () => {
    return (
        <>
            <CommonBanner>Statistics</CommonBanner>
            <div className='max-w-7xl mx-auto flex justify-center'>
                <ComposedChart
                    layout="vertical"
                    width={1000}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                    <Line dataKey="total" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </>
    );
};

export default Statistics;