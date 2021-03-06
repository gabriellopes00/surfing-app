import { BeachModel } from '@src/domain/models/beach'
import { AddBeachModel } from '@src/domain/usecases/beaches/add-beach'
import { AddBeachRepository } from '../../../implementation/interfaces/beaches/add-beach-repository'
import { Beach } from './beach-model'

export class MongoBeachRepository implements AddBeachRepository {
  async add(beachData: AddBeachModel): Promise<BeachModel> {
    const beachModel = new Beach(beachData)
    const result = await beachModel.save()
    const beach: BeachModel = {
      name: result.name,
      lat: result.lat,
      lng: result.lng,
      position: result.position,
      id: result.id,
      user: result.user
    }
    return beach
  }
}
