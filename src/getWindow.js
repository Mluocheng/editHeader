document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        //   initLoader();
    }
    else if (event.target.readyState === 'complete') {
        //   initApp();  && location.host.includes('facebook')
        let accessToken = null;
        const time = setInterval(() => {
            accessToken = window.__accessToken;
            console.log('getWindow  window.__accessToken: ', window.__accessToken)
            if (accessToken) {
                clearInterval(time)
                // require('../packages/web/build/static/js/main.58b55cd8.js')
            }
        }, 1000);


    }
});