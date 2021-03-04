import axios from 'axios'
const request = axios.create({
    baseURL: '',
})
const manageURL = '/manageURL'
// const manageURL = 'http://localhost:9090';
export {
    request,
    manageURL
}