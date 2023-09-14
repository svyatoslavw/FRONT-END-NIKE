import { MediaService } from '@/services/media.service'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent } from 'react'

export const useUploadFile = (onChange: (urls: string[]) => void) => {
  const { mutate } = useMutation(
    ['upload file'],
    async (data: FormData) => {
      // Просто отправляем FormData с файлами на сервер
      const response = await MediaService.upload(data)
      return response.data // Возвращаем массив URL-ов
    },
    {
      onSuccess(urls) {
        onChange(urls)
      },
      onError(error: any) {
        alert(error.message)
      },
    },
  )

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const formData = new FormData()

    // Добавляем все выбранные файлы в FormData
    Array.from(files).forEach((file) => {
      formData.append('media', file)
    })

    await mutate(formData)
  }

  return {
    uploadFile,
  }
}
