import React, { Component } from 'react';
import './../css/qualifications.css';

export default class Qualifications extends Component {


    render() {

        const {
            skillHeader,
            skillSubheader,
            skillSet,
            courses
        } = this.props;

        return (
            <div className="qualifications">
                <Skills
                    skillHeader={skillHeader}
                    skillSubheader={skillSubheader}
                    skillSet={skillSet}
                />
                {
                    courses ?
                        (
                            <Courses
                                courses={courses}
                            />
                        )
                    : ""
                }
            </div>
        )
    }
}


class Skills extends Component {
    render() {
        const {
            skillHeader,
            skillSubheader,
            skillSet,
        } = this.props;

        let skillCount = skillSet.length;
        let splitSkillSet = skillSet;
        let halfSkillCount = Math.ceil(skillCount / 2);
        splitSkillSet = splitSkillSet.splice(0, halfSkillCount);

        return (
            <div className="container">
                <div className="row skills-section">
                    <div className="col-md-6 col-12 skills-content"/>
                    <div className="col-md-6 col-12 skills-content">
                        <h2>{skillHeader}</h2>
                    </div>
                </div>
                <div className="row skills-section">
                    <div className="col-12 skill-title skills-content">
                        <h3>{skillSubheader}</h3>
                    </div>
                    <SkillColumn
                        skillsArray={splitSkillSet}
                    />
                    <SkillColumn
                        skillsArray={skillSet}
                    />
                </div>
            </div>
        )
    }
}


class SkillColumn extends Component {
    render() {
        const {
            skillsArray
        } = this.props;

        return (
            <div className="col-md-6 col-12 skills-content">
                <div className="row">
                    <div className="col-sm-4 col-md-6 col-6 technical-skills">
                        {
                            skillsArray.map((skill, i) => {
                                return (
                                    <p key={i}>{skill.name}</p>
                                )
                            })
                        }
                    </div>
                    <div className="col">
                        {
                            skillsArray.map((skill, i) => {
                                return (
                                    <ProgressBar
                                        key={i}
                                        percentage={skill.proficiency}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


class ProgressBar extends Component {

    render() {
        const {
            percentage,
        } = this.props;

        return (
            <div className="full-bar">
                <div
                    className="progress-bar"
                    style={{width: percentage, height: "100%", backgroundColor: "#34495E"}}
                />
            </div>
        );
    }
}



class Courses extends Component {
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

        )
    }


}

class Course extends Component {
    render() {

        const {
            course
        } = this.props;

        return (
            <a className="course-link" href={course.link}>
                <div className="course">
                    {course.name}
                </div>
            </a>

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


