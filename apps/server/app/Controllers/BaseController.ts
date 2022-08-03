import { HttpContext, Request } from '@adonisjs/core/build/standalone'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BaseController {
  protected async handle(
    request: HttpContext['request'],
    rules: Record<string, any>,
    fn: () => Promise<any>
  ): Promise<JsonResponse> {
    //validation
    let data
    try {
      await request.validate({ schema: schema.create(rules) })
      data = await fn()
    } catch (error) {
      return { code: 500, message: error.message, data: null }
    }
    return { code: 200, data, message: 'ok' }
  }
}
