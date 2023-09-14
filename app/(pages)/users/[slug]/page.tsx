import { UserService } from '@/services/user.service'
import { IPageUserSlug, TypeParamUserSlug } from '@/types/page-user-param'
import { Metadata } from 'next'
import UserPage from './UserPage'

export const revalidate = 60

export async function generateMetadata({ params }: IPageUserSlug): Promise<Metadata> {
  const { data } = await getUser(params)

  return {
    title: `${data.name} | Nike`,
  }
}

export async function generateStaticParams() {
  const data = await UserService.getAll()

  const paths = data.data.map((user) => {
    return {
      params: { slug: user.slug },
    }
  })

  return paths
}

async function getUser(params: TypeParamUserSlug) {
  const data = await UserService.getBySlug(params?.slug as string)

  return data
}

export default async function UserSlugPage({ params }: IPageUserSlug) {
  const { data } = await getUser(params)

  return <UserPage user={data} />
}
