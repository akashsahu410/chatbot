import {createStore} from 'redux'
let praise=["You are so cute","Very nice","Amazing","Marvellous","Splendid","You are rock","Nice query"]
let random=praise[Math.floor(Math.random()*praise.length)]
export let initialState={
    phrases:{
        "value":"hi",
        "name":"My name is Jarvis",
        "hello":"Hello",
        "time":`Time is ${new Date().toLocaleTimeString()}`,
        "date":`Date is ${new Date().toLocaleDateString()}`,
        "welcome":"Welcome Again",
        "please":"You are so cute",
        "test":random,
        "memory":"1 TB",
        "speed":"4 GB",
        
        
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "Print":{
            return state;
        }
        default:{
            return state;
        }
    }
}
const store=createStore(reducer)
export default store;