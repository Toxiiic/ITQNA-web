import store from '@/store'
import { user } from '@/common/api'
import router from '@/router'

Array.prototype.shuffle = function() {
  for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
  return this;
};

export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
}

export function getToken() {
  return 'I\'m the token'
}

/**
 * 1 有无token
 * 2 是否有效
 * 全满足则为valid，否则invalid
 * valid会保存id到store，调用invalidCallback
 * invalid直接调用invalidCallback
*/
export function verifyTokenAndSaveId (validCallback=()=>{}, invalidCallback=()=>{}) {
  let token = window.localStorage.getItem('token')
    
    if(token) {
      user.verifyToken(token, res => {
        if(res.data.valid) {
          store.commit('setUserId', res.data.id)
          validCallback()
        } else {
          invalidCallback()
        }
      })
    } else {
      invalidCallback()
    }
}

/**
 * 退出登陆：
 * 1.删除token
 * 2.verifyToken
 * 
 */
export function logout () {
  window.localStorage.removeItem('token')
  verifyTokenAndSaveId()
  router.go(0)
}

export function afterLogin ({ userId, token }) {
  if(userId) {
      store.commit('setUserId', userId)
      window.localStorage.setItem('token', token)
      router.push('user')
  }
}