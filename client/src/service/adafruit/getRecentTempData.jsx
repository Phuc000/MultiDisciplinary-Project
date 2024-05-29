import axios from 'axios';
import adafruitkey from './adafruitkey';

const getRecentTempData = async () => {
    const result = await axios.get('https://io.adafruit.com/api/v2/CSE_MultiProject/feeds/sensor1/data', {
        headers: {
            "X-AIO-Key": adafruitkey
        },
        params: {
            "limit": 10
        }
    }).then(res => {
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
    return result;
};
export default getRecentTempData;