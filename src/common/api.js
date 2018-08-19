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
    },

    show (id, callback) {
        axios.get(host + `/api/users/${id}`).then(res => callback(res))
    }

}

export const question = {
    create (formData, callback) {
        axios.post(host + `/api/questions`, formData).then(res => callback(res))
    },

    noAnswer (cb) {
        axios.get(host + `/api/questions?no_answer=true`).then(res => cb(res))
    },

    index (cb) {
        axios.get(host + `/api/questions`).then(res => cb(res))
    },
    show (id, cb) {
        axios.get(host + `/api/questions/${id}`).then(res => cb(res))
    }
}

export const answer = {
    create () {

    },
    index (cb) {
        axios.get(host + `/api/answers`).then(res => cb(res))
    },
    qsId (qsId, cb) {
        axios.get(host + `/api/answers?qs_id=${qsId}`).then(res => cb(res))
    }
}