import {ref} from 'vue'

export function useCounter(initialValue=0){

const counter = ref(initialValue)

const increase = () => counter.value++
const decrease = () => counter.value--
const reset = () => counter.value = initialValue


return{
    counter,
    increase,
    decrease,
    reset
}
}