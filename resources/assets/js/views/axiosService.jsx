import {default as _axios} from 'axios';

const axios = _axios.create({
  // Do something before request is sent
  baseURL: '127.0.0.1:8000',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    //'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
  },
  responseType: 'json'
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function(err) {
    //console.log('aca con error config', err.response);

    if(err.response.status === 401) {
      //console.log('a sacarlo');
    }

    return Promise.reject(err);
  }
);

export {
  axios,
}