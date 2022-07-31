import React, { Component } from 'react';
import './Slider.scss'
import logo from '../../assets/logo.png'

export default class Slider extends Component {
    render() {
        return (
            <main class="container">
                <section class="slideshow">
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="overlay">
                        {/* <h1>Pure CSS Image Slider</h1> */}
                        <img src={logo} alt="logo" />
                    </div>
                </section>
            </main>
        )
    }
}
