'use strcit';

const axios = require('axios');
const SLACK_URL = `https://hooks.slack.com/services/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`; // トークンURL
const TENKI_URL = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040';

const main = async () =>{
    try {
        //天気API
        const tenki = await axios.get(TENKI_URL);
        const pref = tenki.data.location.prefecture;
        const city = tenki.data.location.city;
        const todaystemp = tenki.data.forecasts[0].temperature.max.celsius;
        const today = tenki.data.forecasts[0].date;
        message = today + 'の' + pref + city + 'の気温は' + todaystemp + '度です。';

        //SLACK API
        let options = {
            method: 'post',
            baseURL: SLACK_URL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            data: `payload={
                "channel": "#karte_dojo",
                "username": "webhookbot",
                "text": "${message}",
                "icon_emoji":":ghost:"
            }`
        };
        const res = await axios.request(options);
        console.log(res.data);
    } catch (error) {
       console.log(error);
    }
}
main();
