import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const ExBarChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data

    const result = marksData.map(chartdata=>{
        const student = {
            Name : chartdata.name,
            Math: chartdata.math,
            Science:chartdata.otherSubjects.science,
            English:chartdata.otherSubjects.english,
            History:chartdata.otherSubjects.history
        }

        const avgMarks = (student.Math + student.Science + student.Science + student.English + student.History)/4
        student.avgMarks = avgMarks
        return student
    })
    console.log(result)


    return (
        <div className='mt-10 grid place-items-center'>
            <BarChart width={500} height={400} data={result}>
                <XAxis dataKey={'Name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avgMarks'} fill='purple'></Bar>
                <Bar dataKey={'Math'} fill='black'></Bar>
                <Bar dataKey={'English'} fill='green'></Bar>
                <Bar dataKey={'History'} fill='blue'></Bar>

                <Tooltip></Tooltip>
                <Legend></Legend>
            </BarChart>
        </div>
    );
};

export default ExBarChart;