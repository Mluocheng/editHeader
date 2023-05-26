// background.js
chrome.runtime.onInstalled.addListener(function () {
  console.log('插件已被安装')

  // storage中设置值
  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log('storage init color value')
  })
})


// 挪到options
// function replaceHeader(url, requestHeaders) {
//   var newHeaders = []
//   for (var i = 0; i < requestHeaders.length; i++) {
//     newHeaders.push(requestHeaders[i])
//   }
//   if (url == 'https://www.facebook.com/') {
//     newHeaders.push({ name: 'sec-ch-ua-full-version-list', value: 'Chromium";v="110.0.5481.78", "Not A(Brand";v="24.0.0.0", "Google Chrome";v="110.0.5481.78' })
//     newHeaders.push({ name: 'sec-ch-ua-platform-version', value: '14.0.0' })
//     newHeaders.push({ name: 'viewport-width', value: '1280' })
//   }
//   return newHeaders
// }

// function updateListeners() {
//   if (!listener)
//     listener = function (details) {
//       var header_map = { requestHeaders: details.requestHeaders }
//       if (details && details.url && details.requestHeaders && details.requestHeaders.length > 0) {
//         header_map = { requestHeaders: replaceHeader(details.url, details.requestHeaders) }
//       }
//       return header_map
//     }
//   chrome.webRequest.onBeforeSendHeaders.addListener(listener, { urls: ['<all_urls>'] }, ['requestHeaders', 'blocking', 'extraHeaders'])
// }



// var listener = null
// updateListeners()
