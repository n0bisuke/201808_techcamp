const {CronJob} = require('cron');
const slack = require('../slackpost');
const axios = require('axios'); //HTTPクライアントモジュール
const url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040';

new CronJob('30 * * * * *', () => {    
    axios.get(url)
        .then(function (response) {
            const pref = response.data.location.prefecture;
            const city = response.data.location.city;
            const todaystemp = response.data.forecasts[0].temperature.max.celsius;
            const today = response.data.forecasts[0].date;
            message = today + 'の' + pref + city + 'の気温は' + todaystemp + '度です。';    
            slack(message);
            console.log(message);
            // -> 久留米の今日の天気は38度です。
        });
}, null, true);