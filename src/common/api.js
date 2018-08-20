import axios from 'axios'
import { getCookie, getToken, afterLogin } from './util';


const host = 'http://localhost:7001'

axios.defaults.withCredentials = true



export const user = {
    getLoginState () {
        return false
    },
    /**
     * 这个仅返回公开信息，敏感信息不能这样给
    */
    show (id, cb) {
        axios.get(host + `/api/users/${id}`).then(res => cb(res))
    },
    login (formFieldsVal, cb) {
        axios.post(host + '/login', formFieldsVal, {
            // headers: {
            //     'x-csrf-token': 'aaa'
            // }
        }).then(res => {
            cb(res)
            afterLogin(res.data)
        })
    },
    register (formFieldsVal, cb = ()=>{}) {
        //先增加账号
        axios.post(host + '/register', formFieldsVal).then(res => {
            cb(res)
            afterLogin(res.data)
        })
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
    create (formData, callback) {
        axios.post(host + `/api/answers`, formData).then(res => callback(res))
    },
    index (cb) {
        axios.get(host + `/api/answers`).then(res => cb(res))
    },
    qsId (qsId, cb) {
        axios.get(host + `/api/answers?qs_id=${qsId}`).then(res => cb(res))
    }
}

export const userLikeAnswer = {
    create (data, callback) {
        axios.post(host + `/api/ula`, data).then(res => callback(res))
    }
}