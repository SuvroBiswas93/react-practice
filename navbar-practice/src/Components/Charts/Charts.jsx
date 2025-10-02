import React from 'react';
import { Line, LineChart, XAxis, YAxis,CartesianGrid, Tooltip, Legend, PieChart, Pie  } from 'recharts';


const graphData = [
  {
    "month": "January",
    "sales": 120,
    "expenses": 80,
    "profit": 40
  },
  {
    "month": "February",
    "sales": 150,
    "expenses": 100,
    "profit": 50
  },
  {
    "month": "March",
    "sales": 170,
    "expenses": 120,
    "profit": 50
  },
  {
    "month": "April",
    "sales": 90,
    "expenses": 70,
    "profit": 20
  },
  {
    "month": "May",
    "sales": 200,
    "expenses": 150,
    "profit": 50
  },
  {
    "month": "June",
    "sales": 240,
    "expenses": 180,
    "profit": 60
  },
  {
    "month": "July",
    "sales": 180,
    "expenses": 130,
    "profit": 50
  },
  {
    "month": "August",
    "sales": 210,
    "expenses": 160,
    "profit": 50
  },
  {
    "month": "September",
    "sales": 160,
    "expenses": 110,
    "profit": 50
  },
  {
    "month": "October",
    "sales": 190,
    "expenses": 140,
    "profit": 50
  },
  {
    "month": "November",
    "sales": 220,
    "expenses": 160,
    "profit": 60
  },
  {
    "month": "December",
    "sales": 250,
    "expenses": 190,
    "profit": 60
  }
]



const Charts = () => {
    return (
        <div className='mt-10 grid grid-cols-2 gap-5 place-items-center'>
            <LineChart width={600} height={300} data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />  
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} name="Sales" />
                <Line type="monotone" dataKey="profit" stroke="purple" strokeWidth={2} name="Profit" />
                <Line type="monotone" dataKey="expenses" stroke="green" strokeWidth={2} name="Expenses" />
            </LineChart>

            <PieChart width={400} height={400} data={graphData}>
                <Pie
                dataKey={'profit'}
                isAnimationActive={false}
                data={graphData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill='green'
                label
                nameKey={'Profit'}
                />

                <Pie
                dataKey={'expenses'}
                data={graphData}
                cx='50%' 
                cy='50%'
                innerRadius={90} 
                outerRadius={120} 
                fill="#82ca9d"
                nameKey={'Expense'}
                />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Charts;