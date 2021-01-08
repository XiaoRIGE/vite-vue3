<template>
  <div ref="root" class="setup">
      <div>{{ count }} {{ object.foo }}</div>
      <input type="text" v-model="text" placeholder="请输入">
  </div>
</template>

<script>
import { ref, reactive, watchEffect, onMounted, onUpdated, onUnmounted, onRenderTriggered, customRef } from 'vue'

// customRef实现防抖
function useDebouncedRef (value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get () {
        track()
        return value
      },
      set (newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
export default {
  setup () {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })
    const root = ref(null)

    watchEffect(() => {
      // 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数
      console.log(count.value)
      console.log(count)
    })
    /*
    beforeCreate -> 使用 setup()
    created -> 使用 setup()
    beforeMount -> onBeforeMount
    mounted -> onMounted
    beforeUpdate -> onBeforeUpdate
    updated -> onUpdated
    beforeDestroy -> onBeforeUnmount
    destroyed -> onUnmounted
    errorCaptured -> onErrorCaptured

    除了和 2.x 生命周期等效项之外，组合式 API 还提供了以下调试钩子函数：
    onRenderTracked
    onRenderTriggered
    两个钩子函数都接收一个 DebuggerEvent，与 watchEffect 参数选项中的 onTrack 和 onTrigger 类似：
    */

    onMounted(() => {
      console.log('mounted!')
      // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
      console.log(root) // <div/>????????//
      console.log(ref('root'))
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    onRenderTriggered((e) => {
      console.log(e)
    //   debugger
      // 检查哪个依赖性导致组件重新渲染
    })
    // 暴露给模板
    return {
      count,
      object,
      text: useDebouncedRef('hello')
    }
  }
}
</script>
