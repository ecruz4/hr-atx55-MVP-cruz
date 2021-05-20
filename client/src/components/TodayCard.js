import React from 'react'

const TodayCard = ({plant, status}) => {

  return (
    <div className="bg-lg rounded-lg overflow-hidden shadow relative h-80">
      <img src={plant.photo} alt={plant.plant_name} className="w-full h-64 object-cover"/>
      <div className="p-4">
        <span className="font-bold">{plant.plant_name}</span>
      </div>
      {status.water ? <div className="absolute top-0 ml-2 mt-2 bg-light rounded-full w-9 h-9 flex items-center justify-center">
        <i className="fas fa-tint" style={{color: 'blue', fontSize: '30px'}}></i>
      </div> : 
      <div className="absolute top-0 ml-2 mt-2 bg-light rounded-full w-9 h-9 flex items-center justify-center">
      <i className="fas fa-tint" style={{color: 'grey', fontSize: '30px'}}></i>
      </div>}
      {status.fertilize ? <div className="absolute top-0 left-10 ml-2 mt-2 bg-light rounded-full w-9 h-9 flex items-center justify-center">
        <i className="fas fa-leaf" style={{color: 'green', fontSize: '20px'}}></i>
      </div> : <div className="absolute top-0 left-10 ml-2 mt-2 bg-light rounded-full w-9 h-9 flex items-center justify-center">
        <i className="fas fa-leaf" style={{color: 'grey', fontSize: '20px'}}></i>
      </div>}
      {status.prune ? <div className="absolute top-0 left-20 ml-2 mt-2 bg-light rounded-full w-9 h-9 flex items-center justify-center">
        <i className="fas fa-cut" style={{color: 'red', fontSize: '30px'}}></i>
      </div> : <div className="absolute top-0 left-20 ml-2 mt-2 bg-light rounded-full w-9 h-9 flex items-center justify-center">
        <i className="fas fa-cut" style={{color: 'grey', fontSize: '30px'}}></i>
      </div>}
    </div>
  )
}

export default TodayCard




//Icons:
//Leaf: <i class="fas fa-leaf"></i>
//Scissors: <i class="fas fa-cut"></i>
//Water: <i class="fas fa-tint"></i>