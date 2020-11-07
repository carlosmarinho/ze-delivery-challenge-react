import service from './index';

// const key = 'pk.0b3358603ba056e0e5dc869a5d03a006	'
const key = '3746ea9a5355414bbcfb8993231e2539';

export const getGeolocation = async (address, setGeolocation) => {
    // const response = await service.get(`fsearch.php?key=${key}&q=${address}&format=json`);
    const response = await service.get(`json?q=${address}&key=${key}`);
    
    console.log("response: ", response.data.results);
    setGeolocation({lat: response.data.results[0].geometry.lat, long: response.data.results[0].geometry.lng})
}