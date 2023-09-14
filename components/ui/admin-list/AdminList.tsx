'use client'
import Image from 'next/image'
import { FC } from 'react'
import Button from '../button/Button'
import Loader from '../loader/Loader'
import styles from './AdminList.module.scss'
import AdminListItem from './AdminListItem'
import { IListItem } from './admin-list.interface'

interface IAdminList {
  listItems?: IListItem[]
  isLoading: boolean
  removeHandler?: (id: number) => void
  text: string
  create?: () => void
}

const AdminList: FC<IAdminList> = ({ listItems = [], isLoading, create, removeHandler, text }) => {
  return (
    <div className="w-full">
      {isLoading ? (
        <Loader />
      ) : listItems.length ? (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="mb-8 text-4xl font-bold flex items-center gap-1">
              <Image src={'/nike.jpg'} width={60} height={60} alt="nike" />
              {text}
            </div>
            {create && (
              <Button onClick={create} className="px-8 bg-secondary hover:bg-gray-200 duration-200">
                Create {text}
              </Button>
            )}
          </div>
          {listItems.map((listItem) => (
            <AdminListItem
              key={listItem.id}
              listItem={listItem}
              removeHandler={removeHandler ? () => removeHandler(listItem.id) : undefined}
            />
          ))}
        </>
      ) : (
        <div className={styles.notFound}>Элементы не найдены</div>
      )}
    </div>
  )
}

export default AdminList
