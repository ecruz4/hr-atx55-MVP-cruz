import React from 'react';

const GardenItem = ({ plant, handleRemove }) => {
	const convertDate = function (date) {
		let year = date.slice(0, 4);
		let month = date.slice(5, 7);
		let day = date.slice(8, 10);

		return `${month}/${day}/${year}`;
	};

	const handleClick = (e, plant_id) => {
		e.preventDefault();
		handleRemove(plant_id);
	};

	return (
		<div className='m-2 flex flex-row bg-textContrast max-w-max rounded-3xl pl-5 pt-2 pb-2 pr-5'>
			<img
				src={plant.photo}
				alt={plant.plant_name}
				className='w-24 h-24 object-cover rounded-full'
			></img>
			<div className='flex flex-col justify-center ml-4'>
				<span className='font-bold font-poppins'>{plant.plant_name}</span>
				<span>Date Planted: {convertDate(plant.date_planted)}</span>
			</div>
			<div onClick={(e) => handleClick(e, plant._id)}>
				<i className='fas fa-trash-alt mt-10 ml-10' style={{ color: '#820000' }}></i>
			</div>
		</div>
	);
};

export default GardenItem;
