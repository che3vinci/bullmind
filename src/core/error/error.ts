/**
 * 继承的异常信息
 */
// import env from '../env';
// import { noop, ReportType } from '../const';
// import { errorWeblog } from '../../weblog';

export default class XBError extends Error {
  public errorNo: number;
  constructor(msg: string, errorNo = 100) {
    super(msg);
    this.errorNo = errorNo;
  }

  public toString() {
    return `=====> msg=${this.message},stack:${this.stack}`;
  }
}
