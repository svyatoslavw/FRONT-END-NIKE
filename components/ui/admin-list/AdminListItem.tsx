import { FC } from 'react'
import styles from './AdminList.module.scss'
import AdminActions from './admin-actions/AdminActions'
import { IAdminListItem } from './admin-list.interface'

const AdminListItem: FC<IAdminListItem> = ({ removeHandler, listItem }) => {
  return (
    <div className={styles.item}>
      {listItem.items && listItem.items.map((value) => <div key={value}>{value}</div>)}

      <AdminActions
        editUrl={listItem.editUrl}
        viewUrl={listItem.viewUrl}
        removeHandler={removeHandler}
      />
    </div>
  )
}

export default AdminListItem
