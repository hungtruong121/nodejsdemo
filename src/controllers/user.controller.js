const axios = require('axios');
axios.get('https://api.fpt.ai/vision/idr/vnm').then(resp => {
    console.log(resp.data);
})

async function makeRequest() {

    const config = {
        method: 'head',
        url: 'https://api.fpt.ai/vision/idr/vnm'
    }

    let res = await axios(config)

    console.log(res.status);
}

makeRequest();