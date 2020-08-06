import Vue from 'vue'
import ToastComponent from '../components/toast'

const Toast = {}

let showToast = false // 存储loading显示状态
let toastNode = null // 存储loading节点元素

const ToastConstructor = Vue.extend(ToastComponent)

Toast.install = function (Vue, options) {
    // 参数
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
                // 如果toast还在，则不再执行
                return
            }
            toastNode = new ToastConstructor({
                data: {
                    isShowToast: showToast,
                    content: tips
                }
            })
            toastNode.$mount() // 挂在实例，为了获取下面的toastNode.$el

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

// // 创建函数接收要创建组件定义
// function create(Component, props) {
//     // 创建⼀一个Vue新实例例
//     constinstance= new Vue({
//         render(h) {
//             // render函数将传⼊入组件配置对象转换为虚拟dom

//             console.log(h(Component, { props }))

//             return h(Component, { props })
//         }  
//     }).$mount();
//     //执⾏行行挂载函数，但未指定挂载⽬目标，表示只执⾏行行初始化、编译等⼯工作

//     // 将⽣生成dom元素追加⾄至
//     bodydocument.body.appendChild(instance.$el);
//     // 给组件实例例添加销毁⽅方法
//     constcomp=instance.$children[0];

//     comp.remove= () => {
//         document.body.removeChild(instance.$el);
//         instance.$destroy();  
//     }
//     return comp;
// }

// // 暴暴露露调⽤用接⼝口
// export default create