import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iinBdvJ4KZWWJgnzSKOzzwodh_TpQ1oc_5d78EC7BDY' 
    }
    
});