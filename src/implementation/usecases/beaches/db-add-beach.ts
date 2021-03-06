import { BeachModel } from '@src/domain/models/beach'
import { AddBeach, AddBeachModel } from '@src/domain/usecases/beaches/add-beach'
import { AddBeachRepository } from '../../interfaces/beaches/add-beach-repository'

export class DbAddBeach implements AddBeach {
  constructor(private readonly addBeachRepository: AddBeachRepository) {}

  async add(beachData: AddBeachModel): Promise<BeachModel> {
    return await this.addBeachRepository.add(beachData)
  }
}
