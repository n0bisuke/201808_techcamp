'use strcit';

const axios = require('axios'); //HTTPクライアントモジュール
const url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040';

axios.get(url)
    .then(function (response) {
        // console.log(response.data);

        const pref = response.data.location.prefecture;
        const city = response.data.location.city;
        const todaystemp = response.data.forecasts[0].temperature.max.celsius;
        const today = response.data.forecasts[0].date;
        const message = today + 'の' + pref + city + 'の気温は' + todaystemp + '度です。';
        // const message = res.forecasts[0].date + 'の' +res.location.prefecture + 'の気温は' + res.forecasts[0].temperature.max.celsius + '度です。';
        // console.log(response.data.forecasts[2].dateLabel);     
        console.log(message);
        // -> 久留米の今日の天気は38度です。
    });