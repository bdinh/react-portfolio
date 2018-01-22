import React, { Component } from 'react';
import Skills from './skills';
import Courses from './courses';


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
