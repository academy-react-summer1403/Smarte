// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import right from '../../../../public/imgLand/icons8-chevron-right-48.png'
import imges from '../../../../public/imgLand/Rectangle 28.png'

const slides = [
  { id: 1, image: imges },
  { id: 2, image: imges },
  { id: 3, image: imges }
]

const Teachers = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div>
      
      
      <div className="block lg:hidden mb-36">

        <div className='h-full w-full'>
          <div className='mb-10'>
            <div className='justify-center flex gap-2'>
              <h1 className='text-2xl'>  برترین اساتید  </h1>
              <h2 className='text-xl text-lime-800 leading-loose'>  رو همینجا پیدا می کنید !!  </h2>
            </div>
            <h3 className='text-md text-gray-600 leading-loose text-center'>  بر جسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو بهتر بشناسیم !  </h3>
          </div>

          <div className="relative w-[280px] h-[370px] max-w-xl mx-auto">
            <div className="overflow-hidden rounded-[20px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full rounded-[20px]" />
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-[160px] transform -translate-y-1/2 py-2 rounded-l-lg">
              <img className='rotate-180 h-[50px] w-[30px]' src={right} />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-[160px] transform -translate-y-1/2 py-2 rounded-r-lg">
              <img className='h-[50px] w-[30px]' src={right} />
            </button>
          </div>
        </div>

      </div>

      <div className="hidden lg:block mb-36 h-[370px]">

        <div className='blueKadr h-full w-full flex justify-center gap-[20%]'>
          <div className='mt-[100px]'>
            <div className='w-[447px] flex gap-2'>
              <h1 className='text-4xl'> برترین اساتید </h1>
              <h2 className='text-2xl text-lime-800 leading-loose'>
                {' '}
                رو همینجا پیدا می کنید !!{' '}
              </h2>
            </div>
            <h3 className='text-xl text-gray-600 leading-loose text-center w-[400px]'>
              {' '}
              بر جسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو
              بهتر بشناسیم !{' '}
            </h3>
          </div>

          <div className='relative w-[280px] h-full max-w-xl'>
            <div className='overflow-hidden rounded-[20px] '>
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className='w-full h-full rounded-[20px]'
                  />
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className='absolute left-0 top-[160px] transform -translate-y-1/2 py-2 rounded-l-lg'
            >
              <img className='rotate-180 h-[50px] w-[30px]' src={right} />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-0 top-[160px] transform -translate-y-1/2 py-2 rounded-r-lg'
            >
              <img className='h-[50px] w-[30px]' src={right} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Teachers
