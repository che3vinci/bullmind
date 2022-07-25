import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserController {
  public async index(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }
}
