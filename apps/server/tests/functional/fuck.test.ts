import { assert, describe, expect, it } from 'vitest'
import fetch from 'axios'

describe('suite name', () => {
  it('foo', async () => {
    expect(1 + 1).toEqual(2)
    // expect(true).to.be.true
    const r = await fetch.post('http://localhost:3333/api/users/login', {
      phone: '15201041351',
      password: '1234567',
      way: 'email',
    })
    console.log('r', r)
    // console.log(await r.json())
    // assert.equal(Math.sqrt(4), 2)
  })
})
