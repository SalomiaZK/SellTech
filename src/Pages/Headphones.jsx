import '../css/product.css';
import { Product } from '../entity/Product';
import ùheadphone from '../assets/headphones/headphone.jpg'
import headset from '../assets/headphones/headset.jpg'
import headset1 from '../assets/headphones/white.jpg'
import black from '../assets/headphones/black.jpg'
import violet from '../assets/headphones/violet.jpg'
import pink from '../assets/headphones/pinky.jpg'
import { create } from 'zustand';

const useStore = create(set => ({
  headphones: [new Product("headphone", 'nice battery', 50, ùheadphone), 
  new Product ('headphone 1', "gaming one", 60,headset ), 
  new Product ('headphone 2', "gaming one", 60,headset1 ),
  new Product ('headphone 3', "gaming one", 60,black ),
  new Product ('headphone 4', "gaming one", 60,pink ), 
  new Product ('headphone 5', "gaming one", 60,violet ), 
  ]
}))

export  default function Haedphones(){

  const headphone = [new Product("headphone", 'nice battery', 50, ùheadphone), 
    new Product ('headphone 1', "gaming one", 60,headset ), 
    new Product ('headphone 2', "gaming one", 60,headset1 ),
    new Product ('headphone 3', "gaming one", 60,black ),
    new Product ('headphone 4', "gaming one", 60,pink ), 
    new Product ('headphone 5', "gaming one", 60,violet ), 
  ]

  return (
    <>
    <h1 className='self-center text-white text-2xl mb-11 mt-32'>Products</h1>
              <div className='product'>

        {headphone.map(h =>(
          <div className='border-solid border-cyan-400 border-2 p-7 text-slate-300 justify-around' >
            <img src={h.pic} alt="" />
            <h6>{h.name}</h6>
            <p>{h.details}</p>
            <p className='text-pink-600'>{h.getPrice()} $</p>
            <div className='flex justify-around'>
            <button className='bg-purple-900 w-20 rounded-s'> buy</button>
            <button className='bg-blue-800 w-20 gap-3 rounded-e'> {h.number}</button>
            </div>

          </div>
))}
          </div>

    </>
  )
}