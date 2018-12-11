const http = require('http');

const get = (URL, done) => {
    if (typeof window === 'undefined') {
        http.get(URL, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => done(JSON.parse(data)));
        });
    } else {
        const config = { method: 'GET', mode: 'cors' };
        fetch(URL, config).then(res => res.json().then(done));
    }
};

module.exports = { get };
