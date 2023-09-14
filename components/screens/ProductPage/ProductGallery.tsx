import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ProductSlugPage.module.scss'

interface IProductGallery {
  images: string[]
}

export function ProductGallery({ images }: IProductGallery) {
  const loaderProp = ({ src }: any) => {
    return src
  }
  const [active, setActive] = useState(0)

  return (
    <div className="flex">
      <div className="flex-none p-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={clsx(styles.changeImgBtn, {
              'rounded-lg border-black': index === active,
              'border-transparent ': index !== active,
            })}
          >
            <Image
              className="object-cover h-16 w-16"
              priority
              loader={loaderProp}
              src={image}
              width={100}
              height={100}
              alt=""
              draggable={false}
            />
          </button>
        ))}
      </div>
      <div className="flex-grow p-2">
        <Image
          className="object-cover rounded-xl h-[600px] w-[520px]"
          priority
          loader={loaderProp}
          src={images[active]}
          width={520}
          height={600}
          alt=""
          draggable={false}
        />
      </div>
    </div>
  )
}
