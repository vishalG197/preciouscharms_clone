import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

interface State {
    products: any[]; // Change 'any[]' to the actual data type you expect from the API
    error: string | null;
    isLoading:boolean;
    isError:boolean;
  }

const initalState:State={
    products:[],
    isLoading:false,
    isError:false,
    error:"",
}
export const reducer=(state=initalState,action: any)=>{
    switch(action.type){
        case PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true,error:action.payload}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,products:action.payload}
            default:
                return state;
    }
}