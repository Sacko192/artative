import React from 'react'
import Footer from './footer'
import Payment from './payment'
import Header from './header'

interface ArtProps {
    id: string,
    title: string,
    img: string,
    description: string,
    price: number,
    author: string

}

const Single = ({art, img}: { art: ArtProps | undefined, img: string}) => {

  return (
    <div className='h-screen'>
          <div className="w-full sticky top-0 left-0 px-6">
            <Header/>
          </div>
          <div className='flex gap-4 m-10 mb-10'>
              <div className='flex-1'>
                {art && <img className='h-full w-full rounded-lg' src={"/"+img+".png"} alt="" /> }
              </div>
              <div className='flex-1 flex flex-col justify-between'>
                <h1 className='text-5xl text-cyan-700'>{art?.title} </h1>
                <p className='text-black/80'><span className='text-cyan-700'>À propos de l&apos;oeuvre</span>: <br />{art?.description}</p>
                <h3 className='text-2xl text-cyan-700'>{art?.price}€</h3>
                <div className='h-3/5'>
                  <Payment/>
                </div>
              </div>
          </div>
          <div className='mt-20'>
            <Footer/>
          </div>
        </div>
  )
}

export default Single
