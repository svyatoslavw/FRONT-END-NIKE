import Navbar from '@/components/navbar/Navbar'
import { CategoryService } from '@/services/category/category.service'
import { GenderService } from '@/services/gender/gender.service'
import { ProductService } from '@/services/product/product.service'
import ProductEditPage from './ProductEditPage'

export type TypeParamId = {
  id: number
}

export interface IPageId {
  params: TypeParamId
}

export async function generateStaticParams() {
  const data = await ProductService.getAll()

  const paths = data.products.map((product) => {
    return {
      params: { id: product.id },
    }
  })

  return paths
}

async function getPlayers(params: TypeParamId) {
  const { data: products } = await ProductService.getById(params.id as number)

  return products
}

async function getCategory() {
  const { data: category } = await CategoryService.getAll()

  return category
}

async function getGender() {
  const { data: gender } = await GenderService.getAll()

  return gender
}

export default async function PlayersEdit({ params }: IPageId) {
  const product = await getPlayers(params)
  const category = await getCategory()
  const gender = await getGender()

  return (
    <div>
      <Navbar />
      <div className="mx-80 my-10 flex justify-center">
        <ProductEditPage product={product} gender={gender} category={category} params={params.id} />
      </div>
    </div>
  )
}
