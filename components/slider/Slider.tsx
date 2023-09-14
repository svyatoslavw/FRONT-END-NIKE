import Link from 'next/link'
import { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      swipeToSlide: true,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <div className="w-full">
        <Slider {...settings}>
          <div className="text-center font-normal">
            <div className="text-lg">Free Shipping & Returns</div>
            <div className="text-sm">
              Nike Community: Free shipping and 30-day free returns.{' '}
              <Link className="underline" href={'/'}>
                Find out more Join us
              </Link>
            </div>
          </div>

          <div className="text-center font-normal">
            <div className="text-lg">Shop All New Arrivals</div>
            <Link className="underline text-sm" href={'/'}>
              Shop Now
            </Link>
          </div>

          <div className="text-center font-normal">
            <div className="text-lg">Earn $75 with a New Apple Card Account</div>
            <div className="text-sm">
              <Link className="underline" href={'/'}>
                Learn more.
              </Link>{' '}
              Terms apply. Ends 9.30.
            </div>
          </div>

          <div className="text-center font-normal">
            <div className="text-lg">Why Wait? Try Store Pickup</div>
            <div className="text-sm">
              Buy online and find a store near you for pick up in less than 2 hours.{' '}
              <Link className="underline" href={'/'}>
                Shop now.
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
