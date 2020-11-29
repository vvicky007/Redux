export default function authorsReducer(state=[],action){
    console.log('state is ')
    switch(action.type){
        case "AUTHOR_COURSE_SUCCESS":
            return action.authors
        default:
            console.log('inside default ')
            console.log(state)
            return state;
    }
}