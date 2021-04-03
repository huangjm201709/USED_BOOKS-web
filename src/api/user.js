import {request,manageURL} from './index/request';
export function loginUser(data) {
    return request({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: manageURL + '/user/login',
        data: data,
    })
}
export function registerUser(data) {
    return request({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: manageURL + '/user/add',
        data: data,
    })
}
export function changePwd(data) {
    return request({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: manageURL + '/user/changePwd',
        data: data,
    })
}