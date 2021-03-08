import axios from 'axios'
import { Message } from 'element-ui';
const request = axios.create({
    baseURL: '',
    timeout: 5000
})
const manageURL = '/manageURL'
// const manageURL = 'http://localhost:9090';
request.interceptors.response.use(
    res => {
        if (res.data.status == 1) {
            Message.success(res.data.msg);
            return res.data
        } else {
            Message.error(res.data.msg);
        }
    },
    error => {
        console.log(error)
    }
)
export {
    request,
    manageURL
}