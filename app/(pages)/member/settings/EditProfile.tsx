import Field from '@/components/ui/input/Field'
import TextArea from '@/components/ui/text-area/TextArea'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export interface IUserFields {
  email: string
  name: string
}

const EditProfile: FC = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IUserFields>({
    mode: 'onChange',
  })

  const { profile } = useProfile()

  const { push } = useRouter()

  const queryClient = useQueryClient()

  const { mutate, isSuccess, isLoading } = useMutation(
    ['update profile'],
    (data: IUserFields) => UserService.updateProfile(data),
    {
      onSuccess(data) {
        queryClient.refetchQueries(['get profile'])
        push('/member/settings')
      },
    },
  )

  const onSubmit: SubmitHandler<IUserFields> = (data) => {
    mutate(data)
    reset()
  }

  if (isSuccess) return <div>Profile successfully updated!</div>

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-wrap flex space-y-6 justify-center items-center"
    >
      <div className="w-96 text-3xl font-semibold">
        <h1>Edit profile details</h1>
      </div>
      <Field
        {...formRegister('email', { required: 'email is required' })}
        className="w-96"
        placeholder="Email"
        defaultValue={profile?.email}
        disabled
      />
      <Field
        {...formRegister('name', { required: 'name is required' })}
        className="w-96"
        placeholder="Name"
      />
      <Field className="w-96" placeholder="Login" />
      <TextArea className="w-96" placeholder="About me" />
      <div className="w-96 flex justify-end">
        <button type="submit" className="bg-black text-white">
          Save
        </button>
      </div>
    </form>
  )
}

export default EditProfile
