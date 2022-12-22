import React, { Component } from 'react';
import './Slider.scss';

const logo = 'https://i.imgur.com/CULT2yN.png';

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
                        <img src={logo} alt="logo" />
                    </div>
                </section>
            </main>
        )
    }
}
