/* eslint-disable react/prop-types */
import React ,{useEffect, useState} from "react";
import {connect} from 'react-redux';
import * as courseactions from '../../redux/actions/courseactions'
import * as authoractions from '../../redux/actions/authorsactions'
import { bindActionCreators } from "redux";
import CourseForm from './CourseForm'
import { newCourse } from "../../../tools/mockData";
import { Redirect } from "react-router-dom";
import {toast, Toast } from 'react-toastify'
function ManageCoursePage (props) {
  var [course,setCourse] = useState({...props.course})
  var [errors,setErrors] = useState({});
  useEffect(()=>{
  
    if (props.authors.length ==0){
    props.actions.courseActions.loadcourses().catch((error)=>{throw error;});
    }
    else {
        setCourse({...props.course})
    }
    if (props.authors.length == 0){
    props.actions.authorActions.loadauthors().catch((error)=>{throw error;});
    }
  },[props.course])
  function handleChange(event){
      const {name,value} = event.target;
      
      setCourse((prevCourse)=>({
          ...prevCourse,
          [name] : name === "authorId" ? parseInt(value,10) : value 
      }))

  }
  function handleSave(event){
      event.preventDefault();
      props.actions.courseActions.savecourse(course).then(()=>{
        toast.success("courses saved")
          props.history.push("/courses")}
        
      ).catch(err => {throw err}) ;
  }
   return  (  
    <>
    
     <h2>Manage Course</h2>
     <CourseForm course={course} errors = {errors} authors = {props.authors} onChange = {handleChange} onSave = {handleSave} />
    
    
    </>
  )
 
}
function getCoursebySlug(courses,slug){
    return courses.find(course => course.slug === slug) || null;
}
function mapStateToProps(state,ownProps){
  const slug = ownProps.match.params.slug;
  
  const course = slug && state.courses.length > 0 ?getCoursebySlug(state.courses,slug):newCourse;
  
 return {
    course,
    courses:state.courses,
    authors: state.authors
  };
}
function mapDispatchtoProps(dispatch){
  return {
    actions:{
      courseActions:bindActionCreators(courseactions,dispatch),
      authorActions:bindActionCreators(authoractions,dispatch)
    }

  }

}
export default connect(mapStateToProps,mapDispatchtoProps)(ManageCoursePage);
