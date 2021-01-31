
export const textState = {
    textValue: 2,
}


export const textReducer = (state, action) => {

    if(action.type === "Textaction"){
        return {
            ...state,
            textValue: action.payload
        }  
    }
    return state;
}




export const commentTriggerState = {
    commentTrigger: true,
}


export const commentTriggerReducer = (state, action) => {

    if(action.type === "commentTriggerAction"){
        return {
            ...state,
            commentTrigger: action.payload
        }  
    }
    return state;
}