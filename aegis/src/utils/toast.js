import Vue from 'vue'
import ToastComponent from '../components/toast'

const Toast = {}

let showToast = false // save loading status
let toastNode = null // save loading dom element

const ToastConstructor = Vue.extend(ToastComponent)

Toast.install = function (Vue, options) {
    let opt = {
        duration: 1000
    }

    for (var property in options) {
        opt[property] = options[property]
    }
   
    Vue.prototype.$toast = function (tips, type) {
        if (type === 'hide') {
            toastNode.isShowToast = showToast = false
        } else {
            if (showToast) {
                return
            }
            toastNode = new ToastConstructor({
                data: {
                    isShowToast: showToast,
                    content: tips
                }
            })
            toastNode.$mount() // toastNode.$el

            document.body.appendChild(toastNode.$el)

            toastNode.isShowToast = showToast = true

            setTimeout(function () {
                toastNode.isShowToast = showToast = false
            }, opt.duration)
        }
    }

    let types = ['show', 'hide']
    types.forEach(function (type) {
        Vue.prototype.$toast[type] = function (tips) {
            return Vue.prototype.$toast(tips, type)
        }
    })

}

export default Toast