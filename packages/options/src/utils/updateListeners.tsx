import { replaceHeader } from './replaceHeader';
import { message } from 'antd';

// 发送请求钱修改header
export function updateListeners(options: Groups[]) {
    var listener = null
    if (!listener)
        listener = function (details: { requestHeaders: string | any[]; url: any; }) {
            var header_map = { requestHeaders: details.requestHeaders }
            if (details && details.url && details.requestHeaders && details.requestHeaders.length > 0) {
                const requestHeaders = replaceHeader(details.url, details.requestHeaders, options);
                // eslint-disable-next-line no-undef
                header_map = { requestHeaders: requestHeaders }
            }
            return header_map
        }
    // @ts-ignore
    chrome.webRequest.onBeforeSendHeaders.addListener(listener, { urls: ['<all_urls>'] }, ['requestHeaders', 'blocking', 'extraHeaders'])
    message.success('设置成功！')
}