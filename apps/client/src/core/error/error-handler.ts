// import { errorWeblog } from '../../weblog';

export function regGlobalErrorReport() {
  window.onerror = function (
    message: string | Event,
    url?: string,
    lineno?: number,
    colno?: number,
    error?: Error
  ) {
    //  errorWeblog(error.name, message, url + error.stack);
  };

  // 未处理promise错误
  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      //  errorWeblog('UNHANDLED PROMISE REJECTION', event.reason, event.reason?.stack);
    }
  );
}
