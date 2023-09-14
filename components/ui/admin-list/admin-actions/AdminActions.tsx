import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { FaEdit, FaExternalLinkAlt } from 'react-icons/fa'
import { MdOutlineDeleteSweep } from 'react-icons/md'
import Modal from '../../modal/Modal'
import { IListItem } from '../admin-list.interface'
import DeleteModal from '../delete-items/DeleteModal'
import styles from './AdminActions.module.scss'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
  removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, viewUrl, removeHandler }) => {
  const { push } = useRouter()

  const [isModal, setIsModal] = useState(false)

  return (
    <div className={styles.actions}>
      {viewUrl && (
        <button onClick={() => push(viewUrl)} className={styles.buttonStyle}>
          <FaExternalLinkAlt color="black" />
        </button>
      )}
      {editUrl && (
        <button onClick={() => push(editUrl)} className={styles.buttonStyle}>
          <FaEdit color="black" />
        </button>
      )}
      {removeHandler && (
        <>
          <button onClick={() => setIsModal(true)} className={styles.buttonStyle}>
            <MdOutlineDeleteSweep color="black" size={26} />
          </button>

          {isModal && (
            <Modal isOpen={isModal} closeModal={() => setIsModal(false)}>
              <DeleteModal
                onClick={() => {
                  if (removeHandler) {
                    removeHandler()
                  }
                  setIsModal(false)
                }}
                setIsModal={setIsModal}
                removeHandler={removeHandler}
              />
            </Modal>
          )}
        </>
      )}
    </div>
  )
}

export default AdminActions
