import {request,manageURL} from './index/request';
export function say(data) {
    return request({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: manageURL + '/user/add',
        data: data,
    })
}