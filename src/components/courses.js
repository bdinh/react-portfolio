import React, { Component } from 'react';


export default class Courses extends Component {
    render() {
        const {
            courses
        } = this.props;

        let courseCount = courses.length;
        let splitCourses = courses;

            let halfCourseCount = Math.ceil(courseCount / 2);
            splitCourses = splitCourses.splice(0, halfCourseCount);


        // TODO: Need to fix in order to scale for all cases
        let gridClass = courseCount > 6 ? "col-md-6" : "";

        return (
            <div className="container">
                <div className="row skills-section">
                    <div className="row skills-section">
                        <div className="col-12 skill-title">
                            <h3>Relevant Courses</h3>
                        </div>
                        <CourseColumn
                            coursesArray={splitCourses}
                        />
                        <CourseColumn
                            coursesArray={courses}
                        />
                </div>
                </div>
            </div>

        )
    }


}

class Course extends Component {
    render() {

        const {
            course
        } = this.props;

        return (
            <div className="course">
                {course.name}
            </div>
        )
    }
}

class CourseColumn extends Component {

    render() {

        const {
            coursesArray
        } = this.props;

        return (
            <div className="col-md-6 skills-content">
                {
                    coursesArray.map((course, i) => {
                        return (
                            <Course
                                course={course} key={i}
                            />
                        )
                    })
                }
            </div>

        )
    }
}



