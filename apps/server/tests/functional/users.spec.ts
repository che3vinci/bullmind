import { assert, describe, expect, it } from 'vitest'
import fetch from 'axios'

describe('suite name', () => {
  it('foo', async () => {
    expect(1 + 1).toEqual(2)
    // expect(true).to.be.true
    const r = await fetch.post('http://localhost:3333/api/users/login', {
      email: '277149064@qq.com',
      password: '123',
      way: 'email',
    })
    console.log('r', r.data)
    // console.log(await r.json())
    // assert.equal(Math.sqrt(4), 2)
  })
})
