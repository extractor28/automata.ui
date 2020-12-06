/* eslint-disable max-len */
const https = require('https');

const sendNotification = function (data) {
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Basic OTFkZjRiMDUtNWM5NC00OTEzLTliMDItY2Y3ZjliZjRkMTQy',
    };

    const options = {
        host: 'onesignal.com',
        port: 443,
        path: '/api/v1/notifications',
        method: 'POST',
        headers,
    };

    const req = https.request(options, (res) => {
        res.once('data', (data) => {
            console.log('Response:');
            console.log(JSON.parse(data));
        });
    });

    req.once('error', (e) => {
        console.log('ERROR:');
        console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
};

const message = {
    app_id: '1d118d34-f676-4734-baa5-53eacff8f3f0',
    contents: {
        'en': 'Sending a message using an external ID',
        'ru': 'Отправка сообщения используя внешний ID',
    },
    filters: [
        {
            'field': 'tag',
            'key': 'user_id',
            'relation': '=',
            'value': 'myCustomId',
        },
    ],
    // channel_for_external_user_ids: 'push',
    // include_external_user_ids: ['myCustomId'],
};

sendNotification(message);
