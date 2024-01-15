import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function BarChart({dataPoints}) {

    let rating =[]
    let countMap = {"1":0, "2":0,"3":0,"4":0, "5":0};
    if(dataPoints){
        rating = dataPoints.map((data)=>data.overall).sort((a,b)=>b-a)
        console.log(rating)
        

        // Loop through the array and count occurrences
        rating.forEach((number) => {
        countMap[number] = (countMap[number] || 0) + 1;
        });

        // Display the count for each number
        for (const [number, count] of Object.entries(countMap)) {
            console.log(`Number ${number}: Count ${count}`);
        }

    }
    

    const data = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
          {
            label: 'Rating',
            data: Object.values(countMap),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            
            borderWidth: 1,
          },
        ],
      };

  return <Pie data={data} />;
}
