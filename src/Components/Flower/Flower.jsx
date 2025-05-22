import React, { use } from 'react';
import SingleFlower from './SingleFlower';

const flowerPromise = fetch('/public/Flowers.json').then(res => res.json())

const Flower = () => {

    const flowers = use(flowerPromise)
    console.log(flowers);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            {
                flowers.map(flower => <SingleFlower flower={flower}/>)
            }
        </div>
    );
};

export default Flower;