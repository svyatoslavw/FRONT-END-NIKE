import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ProductItem from '../screens/catalog/ProductItem'

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

const ProductSlider: FC<{ similarProducts: IProduct[] }> = ({ similarProducts }) => {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div style={{ width: 1560 }}>
      {similarProducts.length ? <h1 className="text-3xl py-3 px-2">You Might Also Like</h1> : null}
      <Slider {...settings}>
        {similarProducts.map((product) => (
          <div className="px-3">
            <ProductItem product={product} key={product.id} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductSlider
