import {request,manageURL} from './index/request';
export function getBooks(data) {
    return request({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: manageURL + '/book/get',
        data: data,
    })
}