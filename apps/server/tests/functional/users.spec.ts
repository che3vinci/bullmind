import { assert, describe, expect, it } from 'vitest'
import fetch from 'axios'
describe('suite name', () => {
  it.skip('read user info', async () => {
    const r = await fetch.get('http://localhost:3333/api/users/info')
    expect(r.data[0].id).toEqual(101)
  })

  it('login', async () => {
    const r = await fetch.post('http://localhost:3333/api/users/login', {
      email: '277149065@qq.com',
      password: '12345678',
      way: 'email',
    })
    const data = r.data;
    console.log('data', data)
    expect(data.type).toEqual('bearer')

  })
  it.skip('signup', async () => {
    const r = await fetch.post('http://localhost:3333/api/users/signup', {
      email: '277149065@qq.com',
      password: '12345678',
    })
    console.log(r.data)
  })

})
