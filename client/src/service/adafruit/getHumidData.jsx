import axios from 'axios';

const getHumidData = async () => {
    const result = await axios.get('https://io.adafruit.com/api/v2/CSE_MultiProject/feeds/sensor2', {
        headers: {
            "X-AIO-Key": ""
        }
    }).then(res => {
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
    return result;
};
export default getHumidData;