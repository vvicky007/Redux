/* eslint-disable react/prop-types */
import Spinner from "../common/Spinner";
import React ,{useEffect,useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as courseactions from '../../redux/actions/courseactions'
import * as authoractions from '../../redux/actions/authorsactions'
import { bindActionCreators } from "redux";
import CourseList from "./CourseList"
import { Redirect } from "react-router-dom";
import {Toast } from 'react-toastify'
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}
function CoursesPage (props) {
  var [redirect,setRedirect] = useState(false);
  useEffect(()=>{
    console.log('in use effect');
    if (props.authors.length ==0){
    props.actions.courseActions.loadcourses().catch((error)=>{throw error;});
    }
    if (props.authors.length == 0){
    props.actions.authorActions.loadauthors().catch((error)=>{throw error;});
    }
  },[])
   return  (  
    <>
    
     <h2>Courses</h2>
    
     {redirect && <Redirect to="/course" />}
     {props.courses.length == 0 ?<Spinner />:null}
     <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => setRedirect(true)}
            >
              Add Course
            </button>
     <CourseList courses={props.courses}/>
    
    </>
  )
 
}

function mapStateToProps(state){
  
 return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
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
export default connect(mapStateToProps,mapDispatchtoProps)(CoursesPage);
