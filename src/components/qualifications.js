import React, { Component } from 'react';
import Skills from './skills';
import Courses from './courses';


export default class Qualifications extends Component {


    render() {

        const {
            skillSet,
            courses
        } = this.props;

        return (
            <div className="qualifications">
                <Skills
                    skillSet={skillSet}
                />
                <Courses
                    courses={courses}
                />
            </div>
        )
    }
}