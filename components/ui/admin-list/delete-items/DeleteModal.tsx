'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './DeleteModal.module.scss'

interface IDeleteModal {
  setIsModal: Dispatch<SetStateAction<boolean>>
  onClick: () => void
  removeHandler?: () => void
}

const DeleteModal: FC<IDeleteModal> = ({ removeHandler, onClick, setIsModal }) => {
  return (
    <div className="w-full h-full">
      <div className={styles.modalHeader}>
        <h5 className={styles.heading}>Dialog</h5>
      </div>

      <div className={styles.modalContent}>Are you sure you want to delete the item?</div>
      <div className={styles.modalActions}>
        <div className={styles.actionsContainer}>
          <button className={styles.deleteBtn} onClick={onClick}>
            Delete
          </button>
          <button className={styles.cancelBtn} onClick={() => setIsModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
