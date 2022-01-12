const https = require('https')
const options = {
    hostname: 'codequiz.azurewebsites.net',
    headers: {
        'Cookie': 'hasCookie=true',
    },
    port: 443,
    method: 'GET'
}

var args = process.argv.slice(2);

const req = https.request(options, res => {

    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('close', () => {
        data.replace(' ', '')
        // FOR LOOP ALL ARGUMENT
        for (let index = 0; index < args.length; index++) {

            const element = args[index];

            if (data.includes(element)) {

                // STRING MANIPULATION
                let indexOfElement = data.indexOf(element)
                let lastIndexOfElement = element.length + indexOfElement
                let selectedValue = data.slice(indexOfElement, lastIndexOfElement + 25)
                let nav = selectedValue.slice(selectedValue.indexOf(`<td>`) + 4, selectedValue.lastIndexOf(`</td>`))

                console.log(nav)

            } else {
                console.log(`NAV of ${element} not found`)
            }
        }
    });
})

req.on('error', error => {
    console.error(error)
})

req.end()