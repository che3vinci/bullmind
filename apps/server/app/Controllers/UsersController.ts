import Database from '@ioc:Adonis/Lucid/Database'

export default class UserController {
  public async info() {
    const users = await Database.query().select('*').from('users').where({ id: 101 })
    return users
  }
  public async signup() {
    const users = await Database.query().select('*').from('users').where({ id: 101 })
    return users
  }
  public async login() {
    const users = await Database.query().select('*').from('users').where({ id: 101 })
    return users
  }
}
