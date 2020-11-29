import * as types from "./actionTypes.js";

import * as authorsapi from '../../api/authorApi'; 

export function loadauthorsSuccess(authors){
    return {type:types.AUTHOR_SUCCESS, authors};

}
export function loadauthors(){
    return function (dispatch){
        return authorsapi.getAuthors().then((authors)=>dispatch(loadauthorsSuccess(authors))).catch((err)=>{throw err})
           
    }
}
