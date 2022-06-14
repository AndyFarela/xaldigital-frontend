import env from 'react-dotenv'

window.globals = (function(){
    var globals = {}
    var apiHost = process.env.REACT_APP_API_URL

    globals.API = {
        url: apiHost,
        urlStackoverflow: apiHost.concat('api/--stackoverflow/'),
        urlFlights: apiHost.concat('api/--flights/')
    }

    return globals
})();