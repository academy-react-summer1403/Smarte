import Group3 from '../../../../public/imgLand/Group 3.png'
import Group4 from '../../../../public/imgLand/Group 4.png'
import Group5 from '../../../../public/imgLand/Group 5.png'
import Group6 from '../../../../public/imgLand/Group 6.png'
import Rec12 from '../../../../public/imgLand/Rectangle 12.png'
import Rec13 from '../../../../public/imgLand/Rectangle 13.png'
import Rec14 from '../../../../public/imgLand/Rectangle 14.png'
import Rec15 from '../../../../public/imgLand/Rectangle 15.png'

const Khadamat = () => {
  return (
    <>
      <div>
        <div className='hidden xl:block mb-14'>
          <div className='mx-auto flex justify-center mb-4'>
            <img
              className='w-5 h-5 mt-3 ml-2'
              src='../../../../public/imgLand/Ellipse 5.png'
            />
            <h1 className='text-4xl font-extrabold'>خدمات ما</h1>
          </div>
          <p className='text-xl font-bold text-slate-500 text-center mb-10'>
            مجموعه ای از تمام آنچه شما نیاز دارید
          </p>
          <div className='flex justify-center'>
            <div className='w-1/6 h-[260px] relative mt-[130px] ml-[2%]'>
              <img className='mx-auto mt-[5%]' src={Group6} />
              <img
                className='absolute right-[7.5%] bottom-[10%] w-[85%] h-[65%]'
                src={Rec15}
              />
              <div className='relative w-24 mx-auto mt-3 mb-[65px]'>
                <h2 className='z-10 absolute text-3xl font-extrabold'>
                  مشاوره
                </h2>
              </div>
              <div className='w-3/4 relative mx-auto'>
                <p className='z-10 absolute text-sm font-bold text-slate-500 text-center'>
                  متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است
                </p>
              </div>
            </div>

            <div className='w-1/6 h-[260px] relative mb-[130px] ml-[2%]'>
              <img className='mx-auto mt-[5%]' src={Group5} />
              <img
                className='absolute right-[7.5%] bottom-[10%] w-[85%] h-[65%]'
                src={Rec14}
              />
              <div className='relative w-24 mx-auto mt-3 mb-[65px]'>
                <h2 className='z-10 absolute text-3xl font-extrabold'>
                  مشاوره
                </h2>
              </div>
              <div className='w-3/4 relative mx-auto'>
                <p className='z-10 absolute text-sm font-bold text-slate-500 text-center'>
                  متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است
                </p>
              </div>
            </div>

            <div className='w-1/6 h-[260px] relative mt-[130px] ml-[2%]'>
              <img className='mx-auto mt-[5%]' src={Group4} />
              <img
                className='absolute right-[7.5%] bottom-[10%] w-[85%] h-[65%]'
                src={Rec13}
              />
              <div className='relative w-24 mx-auto mt-3 mb-[65px]'>
                <h2 className='z-10 absolute text-3xl font-extrabold'>
                  مشاوره
                </h2>
              </div>
              <div className='w-3/4 relative mx-auto'>
                <p className='z-10 absolute text-sm font-bold text-slate-500 text-center'>
                  متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است
                </p>
              </div>
            </div>

            <div className='w-1/6 h-[260px] relative mb-[130px]'>
              <img className='mx-auto mt-[5%]' src={Group3} />
              <img
                className='absolute right-[7.5%] bottom-[10%] w-[85%] h-[65%]'
                src={Rec12}
              />
              <div className='relative w-24 mx-auto mt-3 mb-[65px]'>
                <h2 className='z-10 absolute text-3xl font-extrabold'>
                  مشاوره
                </h2>
              </div>
              <div className='w-3/4 relative mx-auto'>
                <p className='z-10 absolute text-sm font-bold text-slate-500 text-center'>
                  متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Khadamat
