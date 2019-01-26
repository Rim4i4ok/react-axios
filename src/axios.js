import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorixation'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;