import { React, Component, useState } from 'react';
import './curtains.scss'

export default class Curtains extends Component {

    render() {
        return (
            <>
                <div className="curtainsContainer">
                    <div className="curtain small"></div>
                    <div className="curtain big"></div>
                    <div className="curtain big hide"></div>
                    <div className="curtain big hide"></div>
                    <div className="curtain big hide"></div>
                    <div className="curtain big hide"></div>
                    <div className="curtain big"></div>
                    <div className="curtain small"></div>
                </div>
            </>
        );
    }
}