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