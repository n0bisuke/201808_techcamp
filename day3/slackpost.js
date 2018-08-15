'use strcit';

const axios = require('axios');
const BASE_URL = `https://hooks.slack.com/services/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`; // トークンURL

const main = async (message) =>{

    let options = {
        method: 'post',
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: `payload={
            "channel": "#karte_dojo",
            "username": "のびすけBOT",
            "text": "${message}",
            "icon_emoji":":ghost:"
        }`
    };

    try {
        const res = await axios.request(options);
        console.log(res.data);
    } catch (error) {
       console.log(error);
    }
}

module.exports = main;