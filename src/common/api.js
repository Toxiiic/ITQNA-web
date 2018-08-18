import axios from 'axios'
import { getCookie, getToken } from './util';


const host = 'http://localhost:7001'

axios.defaults.withCredentials = true

export const user = {
    getLoginState () {
        return false
    },
    getUserInfo (id) {
        axios.get(host + `/api/users/${id}`, {
            headers: {
                'Authorization': `bearer ${getToken()}`
            }
        }).then(res => {
            return res
        })
    },
    login (formFieldsVal, callback) {
        axios.post(host + '/login', formFieldsVal, {
            // headers: {
            //     'x-csrf-token': 'aaa'
            // }
        }).then(res => {
            callback(res)
        })
    },
    logout () {

    },
    register (formFieldsVal) {

    },
    verifyToken (token, callback) {
        axios.get(host + '/verify-token', {
            headers: {
                token
            }
        }).then(res => callback(res))
    }
    ,

    show (id, callback) {
        axios.get(host + `/api/users/${id}`).then(res => callback(res))
    }

}

export const question = {
    create (formData, callback) {
        axios.post(host + `/api/questions`, formData).then(res => callback(res))
    }
}