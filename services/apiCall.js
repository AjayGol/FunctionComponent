import axios from 'axios';
import AppConstant from "../helpers/constant";

let source = axios.CancelToken.source();
const httpClient = axios.create();
httpClient.defaults.timeout = 15000;

export function CallApi(url, type = 'get', data = {}, header = {}, reqIdentifier = null, params = {}) {

    return makeAPICall(url, type, data, header, reqIdentifier, params);
}

export function makeAPICall(url, type = 'get', data = {}, header = {}, reqIdentifier = null, params = {}) {
    let reqHeader = Object.assign(header,
        {"Accept": "application/json", "Content-Type": "application/json"});

    console.log(JSON.stringify(params));
    console.log(JSON.stringify(header));
    if (type === 'get') {
        return httpClient.get(url, {
            params: params,
            headers: header
        })
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type)
                return Promise.resolve(response.data)
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err)
                return Promise.reject(err);
            });
    } else if (type === 'post') {

        return httpClient.post(url,
            {}, {
                params: params,
                headers: header
            })
            .then((response) => {
                // reqHeader
                console.log("Response - " + url + " TYPE- " + type)
                return Promise.resolve(response)
            })
            .catch((err) => {
                reqHeader
                console.log("Error - " + url + " TYPE- " + type, err)
                return Promise.reject(err);
            });
    } else if (type === 'delete') {

        return httpClient.delete(url, {
            params: params,
            headers: header
        })
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type)
                return Promise.resolve(response);
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err)
                return Promise.reject(err);
            });
    } else if (type === 'patch') {
        return httpClient.patch(url, data, {
            params: params,
            headers: header
        })
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type)
                return Promise.resolve(response)
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err)
                return Promise.reject(err);
            });
    }else if (type === 'put') {
        return httpClient.put(url, data, {
            params: params,
            headers: header
        })
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type)
                return Promise.resolve(response)
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err)
                return Promise.reject(err);
            });
    }
}
