import { BeachPosition } from '@src/domain/models/beach'
import { UserBeachModel } from '@src/domain/usecases/beaches/add-beach'
import { Beach } from '@src/infra/db/beaches/beach-model'
import { MongoBeachRepository } from '@src/infra/db/beaches/beach-repository'

const makeSut = () => {
  const beachData: UserBeachModel = {
    lat: -33.792726,
    lng: 151.289824,
    name: 'Manly',
    position: BeachPosition.E,
    user: '6012fe2e4425d7ba95b27ed3'
  }
  const sut = new MongoBeachRepository()
  return { sut, beachData }
}

describe('Mongo Beach Repository functional tests', () => {
  beforeAll(async () => await Beach.deleteMany({}))
  afterAll(async () => await Beach.deleteMany({}))

  it('Should stores an account on success', async () => {
    const { sut, beachData } = makeSut()
    await sut.add(beachData)

    const result = await Beach.find()
    expect(result).toBeTruthy()
  })
})
