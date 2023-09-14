import { axiosClassic, instance } from '@/api/api.interceptor'
import { IGender } from '@/types/gender.interface.'

const GENDERS = '/genders'

export const GenderService = {
  async getAll() {
    return axiosClassic<IGender[]>({
      url: GENDERS,
      method: 'GET',
    })
  },
  async getById(id: string | number) {
    return instance<IGender>({
      url: `${GENDERS}/${id}`,
      method: 'GET',
    })
  },

  async create() {
    return instance<IGender>({
      url: GENDERS,
      method: 'POST',
    })
  },

  async update(id: string | number, name: string) {
    return instance<IGender>({
      url: `${GENDERS}/${id}`,
      method: 'PUT',
      data: { name },
    })
  },

  async delete(id: string | number) {
    return instance<IGender>({
      url: `${GENDERS}/${id}`,
      method: 'DELETE',
    })
  },
}
