import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddForm from './components/AddForm';
import Header from './components/Header';
import Today from './components/Today';
import Garden from './components/Garden'


function App() {
  const [garden, setGarden] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/garden')
      .then(data => {setGarden([data.data])})
      .catch(err => `Could not connect to API: ${err}`)
  }, [garden])

  const handlePlantAdd = function(plant) {
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/garden',
      data: {
        plant_name: plant.plant_name,
        water: plant.water.split(','),
        fertilize: plant.fertilize.split(','),
        prune: plant.prune.split(','),
        photo: plant.photo
      }
    })
      .then((data) => {
        console.log('Plant successfully added to Garden');
        setGarden([...garden, plant]);
    })
      .catch(err => console.log(`Unable to add new plant to Garden: ${err}`))
  }

  const handlePlantRemove = function(plant_id) {
    console.log(plant_id);
    axios.delete(`http://localhost:5000/api/garden/${plant_id}`)
      .then((data) => console.log('Plant successfully removed from Garden'))
      .catch(err => console.log(`Unable to plant from Garden: ${err}`))
  }

  return (
    <div className="flex flex-col">
      <Header />
      <Today plants={garden} />
      <div className=" ml-40 mr-40 mb-10 grid grid-cols-2 gap-6">
        <Garden plants={garden} handleRemove={handlePlantRemove}/>
        <AddForm handleAdd={handlePlantAdd}/>
      </div>
    </div>
  );
}

export default App;


//flex flex-row justify-evenly content-center