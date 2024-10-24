// eslint-disable-next-line no-unused-vars
import React from 'react'
import './NewsArticles.css'
import Image1 from '../../assets/images/Rectangle 37.png'
import Image2 from '../../assets/images/Rectangle 38.png'
import Image3 from '../../assets/images/Rectangle 41.png'
import Image4 from '../../assets/images/Rectangle 40.png'
import Image5 from '../../assets/images/Rectangle 42.png'
import Image6 from '../../assets/images/Rectangle 43.png'
import ArrowIcon from '../../assets/images/Frame(6).png'

const NewsArticles = () => {
  return (
    <div className='title-section'>
      <div className='title-container'>
        <div className='circle'></div>
        <div className='title'>اخبار و مقالات</div>
      </div>
      <div className='subtitle'> !خودت را با خبر کن</div>

      <div className='gallery'>
        <div className='square'>
          <div className='image-container'>
            <img src={Image1} alt='تصویر 1' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            دنیای آنلاین؛ راهی برای افزایش فروش
          </div>
        </div>

        <div className='square'>
          <div className='image-container'>
            <img src={Image2} alt='تصویر 2' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            بازاریابی حسی راهی ساده و کم هزینه برای افزایش فروش
          </div>
        </div>

        <div className='rectangle'>
          <div className='image-container'>
            <img src={Image3} alt='تصویر 3' className='rectangle-images' />
            <div className='overlay-rectangle'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            از کجا مشتری پیدا کنم؟ راه‌های پیدا کردن مشتری
          </div>
        </div>

        <div className='rectangle'>
          <div className='image-container'>
            <img src={Image4} alt='تصویر 4' className='rectangle-images' />
            <div className='overlay-rectangle'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود
          </div>
        </div>

        <div className='square mt-custom'>
          <div className='image-container'>
            <img src={Image5} alt='تصویر 5' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            ورود به دنیای آنلاین؛ راهی مطمئن برای افزایش فروش
          </div>
        </div>

        <div className='square mt-custom'>
          <div className='image-container'>
            <img src={Image6} alt='تصویر 6' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>جذب مشتری با تبلیغات دهان به ن</div>
        </div>
      </div>

      <div className='button-section mt-custom'>
        <button className='view-more-btn'>
          مشاهده بیشتر
          <img src={ArrowIcon} alt='برگشت' className='arrow' />
        </button>
      </div>
    </div>
  )
}

export default NewsArticles
