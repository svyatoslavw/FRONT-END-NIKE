import clsx from 'clsx'
import { FC } from 'react'
import styles from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'
import { useUploadFile } from './useUploadFile'

const UploadField: FC<IUploadField> = ({ value, onChange }) => {
  const { uploadFile } = useUploadFile(onChange)

  return (
    <div className={styles.file}>
      <h1 className={styles.h1}>Choose Files</h1>
      <div className="w-full h-full z-50 ">
        {/* Отображение загруженных изображений */}
        {value && value.length > 0 && (
          <div className="flex gap-2">
            {value.map((imageUrl) => (
              <img
                key={imageUrl}
                src={imageUrl}
                alt=""
                width={50}
                height={50}
                className="object-cover"
              />
            ))}
          </div>
        )}
      </div>
      <label>
        <span className="sr-only block">Choose Files</span>
        <input type="file" multiple onChange={uploadFile} className={clsx(styles.input)} />
      </label>
    </div>
  )
}

export default UploadField
