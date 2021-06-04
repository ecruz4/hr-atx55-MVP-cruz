import React from 'react';
import GardenItem from './GardenItem';

const Garden = ({ plants, handleRemove }) => {
	return (
		<div className=' bg-brown rounded-3xl'>
			<h1 className='ml-10 mt-10 text-textContrast font-poppins text-bold text-4xl'>
				Your Garden:
			</h1>
			<div className='bg-brown grid grid-cols-1 ml-10 mt-5 mb-5 rounded-3xl overflow-y-scroll max-h-garden'>
				{plants[0]
					? plants[0].map((plant, idx) => (
							<GardenItem key={idx} plant={plant} handleRemove={handleRemove} />
					  ))
					: null}
			</div>
		</div>
	);
};

export default Garden;
