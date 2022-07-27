import { HttpContext } from '@adonisjs/core/build/standalone'
import Database from '@ioc:Adonis/Lucid/Database'
import BaseController from './BaseController'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserController extends BaseController {
  public async info() {
    const users = await Database.query().select('*').from('users').where({ id: 101 })
    return users
  }
  public async signup() {
    const users = await Database.query().select('*').from('users').where({ id: 101 })
    return users
  }
  public async login(ctx: HttpContext) {
    const way = ctx.request.input('way')
    switch (way) {
      case 'email':
        return this.loginWithEmail(ctx)
      default:
        throw new Error('not supported login way')
    }
  }
  public async loginWithEmail(ctx: HttpContext) {
    const { email, password } = ctx.request.all()
    return this.handle(
      ctx.request,
      {
        email: schema.string([rules.email()]),
        password: schema.string([rules.confirmed(), rules.minLength(8)]),
      },
      async () => {
        const user = await Database.query().select(['password']).from('users').where({ email })
        if (!user) {
          throw new Error('user not found')
        }
        if (user[0].password !== password) {
          throw new Error('password error')
        }
        return 'ok'
      }
    )
  }
}
