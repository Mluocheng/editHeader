// 替换hader参数
export function replaceHeader(url: string, requestHeaders: string | any[], options: Groups[]) {
    var newHeaders = []
    for (var i = 0; i < requestHeaders.length; i++) {
        newHeaders.push(requestHeaders[i])
    }
    // console.log(url,options, options.find(i => url.includes(i.url.trim())))
    if(options && !!options.length && options.find(i => url.includes(i.url.trim()))) {
        const rules = options.find(i => url.includes(i.url.trim()))?.rules;
        rules?.forEach(i => {
            newHeaders.push({ name: i.key, value: i.value })
        })
    }
    // if (url == 'https://www.facebook.com/') {
    //     newHeaders.push({ name: 'sec-ch-ua-full-version-list', value: 'Chromium";v="110.0.5481.78", "Not A(Brand";v="24.0.0.0", "Google Chrome";v="110.0.5481.78' })
    //     newHeaders.push({ name: 'sec-ch-ua-platform-version', value: '14.0.0' })
    //     newHeaders.push({ name: 'viewport-width', value: '1280' })
    // }
    return newHeaders
}