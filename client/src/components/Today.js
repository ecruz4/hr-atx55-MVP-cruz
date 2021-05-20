import React from 'react';
import TodayCard from './TodayCard';
import 'react-multi-carousel/lib/styles.css';

const Today = ({plants}) => {

  return (
    <div>
      <h1 className="mt-5 ml-40 p-2 font-poppins text-bold text-4xl text-dark">Today:</h1>
      <div className="bg-light p-2 mt-8 mb-8 ml-40 mr-40 rounded-3xl h-96">
        <div className="grid grid-cols-6 gap-10 p-4">
          {plants[0] ? plants[0].map((plant, idx) => {
            let today = new Date().getDate().toString();
            let status = {
              water: false,
              fertilize: false,
              prune: false
            }
            if (plant.water.includes(today)) {
              status.water = true
            }
            if (plant.fertilize.includes(today)) {
              status.fertilize = true
            }
            if (plant.prune.includes(today)) {
              status.prune = true
            }
            if(status.water || status.fertilize || status.prune) {
              return <TodayCard key={idx} status={status} plant={plant} />
            } else { return ''}
          }) : null}
        </div>
      </div>
    </div>
  )
}

export default Today
