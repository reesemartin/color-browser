import { afterAll, beforeAll, vi, describe, it, expect } from 'vitest'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getAPIURL, getRandomColorHex } from '../../src/model/colors'

describe('getRandomColorHex', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })

  afterAll(() => {
    mock.reset()
  })

  it('should return a random hex from the fetched colors', async () => {
    const colors = [{ hex: '#000000' }, { hex: '#ffffff' }]
    mock.onPost(`${getAPIURL()}/api`).reply(200, { data: { colors } })
    await expect(getRandomColorHex()).resolves.toMatch(/#000000|#ffffff/)
  })
})
