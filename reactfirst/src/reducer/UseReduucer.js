export const intitialstate = null;
export const reducer =(state1 ,action)=> {
    if(action.type=== "USER"){
        return action.payload;
    }
    return state1;
}