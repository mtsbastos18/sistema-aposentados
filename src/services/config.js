import axios from 'axios'

localStorage.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzOTcwMDY2NX0.uCzmiESOJ53S3_TLhGW3XMWCJqEisB6BnvhYo8gjP-s'

export const http = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token
    }
})

