import { IFavorite } from './product.interface'

export interface IUser {
  id: number
  createdAt: string
  email: string
  name: string
  slug: string
  avatarPath: string
  isAdmin: boolean
  privacy: EnumUserPrivacy
}

export interface IFullUser extends IUser {
  favorites: IFavorite[]
}

export enum EnumUserPrivacy {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
