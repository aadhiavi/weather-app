import React from 'react'

const TopButtons = ({ setQuery }) => {

    const cities = [
        {
            id: 1,
            name: 'Tokyo',
        },
        {
            id: 2,
            name: "Delhi",
        },
        {
            id: 3,
            name: 'Paris',
        },
        {
            id: 4,
            name: 'London',
        },
        {
            id: 5,
            name: 'New York',
        },
    ];


    return (
        <>
<h1 className='flex items-center justify-center font-4xl py-5'>Weather Dashboard</h1>
<div className='flex flex-wrap items-center justify-around my-6'>
            {
                cities.map((city) => {
                    return (
                        <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transitio ease-in'
                            onClick={() => setQuery({ q: city.name })}
                        >{city.name}</button>
                    )
                })
            }
        </div>

</>
    )
}

export default TopButtons;