import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './../css/photograph.css';
import $ from 'jquery';

export default class PhotoView extends Component {


    componentDidMount() {

    }

    closeModal() {
        $('#myModal').css('display', 'none');
    }

    render() {

        const {
            pictureArray,
        } = this.props;


        return(
            <div className="photo-view">
                <div className="chevron-container">
                    <NavLink
                        className="remove-link-css back-chevron-link"
                        to="/about"
                    >
                    <FontAwesome
                        className="chevron-left"
                        name="chevron-circle-left"
                    />
                    </NavLink>
                </div>
                <div className="row flex gallery">
                    {
                        pictureArray.map((picture, i) => (
                            <Picture
                                altText={picture.name}
                                key={i}
                                source={picture.source}
                            />
                        ))
                    }
                    <div className="modal" id="myModal" onClick={this.closeModal}>
                        {/*<span className="close">&times;</span>*/}
                        <img className="modal-content" id="insertImage"/>
                    </div>
                </div>

            </div>
        );
    }
}

class Picture extends Component {

    toggleModal(event) {
        $('#myModal').css('display', 'block');
        $('#insertImage').attr('src', event.target.src);
    }


    render() {
        const {
            source,
            altText,
        } = this.props;

        return (
            <div className="col-lg-3 col-md-4 col-xs-6 item-container-padding" onClick={this.toggleModal}>
                <div className="item-container">
                    <img className="gallery-image" src={source} alt={altText}/>
                </div>
            </div>
        )
    }

}
