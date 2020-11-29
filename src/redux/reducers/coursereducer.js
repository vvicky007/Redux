export default function courseReducer(state=[],action){
    console.log('inside action course')
    console.log(state)
    switch(action.type){
        case "CREATE_COURSE_SUCCESS":
            console.log('inside create ')
            
            return [...state,{...action.course}]
        case "SAVE_COURSE_SUCCESS":
            
            return state.map(course => course.id === action.course.id ? action.course: course)
        case "LOAD_COURSE_SUCCESS":
            return action.courses
        default:
            return state;
    }
}