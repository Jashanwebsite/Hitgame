const initialstate = {
    xstate:0,
    ystate:0
}
export const reducerName = (state = initialstate, action) => {
    switch (action.type) {
        case "xstate" :
            if(action.payload <750 ){
                console.log(action.payload)
                return{...state, xstate : -1500}

            }
            return{...state, xstate :1500}
           case "ystate" :
            return{...state, ystate : action.payload}
        default:
            return state
    }
}