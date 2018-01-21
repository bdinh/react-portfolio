import React, { Component } from 'react';
import ProgressBar from './progressBar';


export default class Skills extends Component {
    render() {
        const {
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
                        <h2>What Can I do?</h2>
                    </div>
                </div>
                <div className="row skills-section">
                    <div className="col-12 skill-title">
                        <h3>Technical Skill Set</h3>
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
            <div className={"col-md-6 col-12 skills-content"}>
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