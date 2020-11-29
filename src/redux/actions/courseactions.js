import * as types from "./actionTypes.js";

import * as courseapi from '../../api/courseApi'; 
export function createCourse(course){
    console.log('inside ac')
    console.log(course)
    return {type:types.CREATE_COURSE, course};
}
export function loadcoursesSuccess(courses){
    return {type:types.LOAD_SUCCESS, courses};

}
export function savecourseSuccess(course){
    return {type:types.SAVE_COURSE_SUCCESS,course};
}
export function createcourseSuccess(course){
    return {type:types.CREATE_COURSE_SUCCESS,course};
}
export function loadcourses(){
    console.log('i m in load courses')
    return function (dispatch){
        return courseapi.getCourses().then((courses)=>dispatch(loadcoursesSuccess(courses))).catch((err)=>{throw err})
           
    }
}
export function savecourse(course){
    console.log('i m in save courses'+ course)
    return function (dispatch,getState){
        
        return courseapi.saveCourse(course).then((course)=> course.id? dispatch(savecourseSuccess(course)): dispatch(createcourseSuccess(course))).catch((err)=>{throw err})
           
    }
}
