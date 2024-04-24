export const initialState={
    total:0,
    meals:[]
}
const restReducer=(state,action)=>{
    switch (action.type){
        case "add":
                return{
                ...state,
                meals:action.payload
            }
   
        case "remove":
            return{
            ...state,
            meals:action.payload 
        }

        case "update":
            return{
            ...state,
            total:action.payload
        }

        default: return state;    
    }
} 
export default restReducer;