import React, { Component } from 'react';
import './toggle.scss';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        };
    }

    toggleBtn() {
        this.setState({ status: !this.state.status });
    }

    render() {
        return (
            <div
                onClick={() => this.toggleBtn()}
                class={`c-toggle ${this.state.status ? 'toggle-on' : ''}`}
            >
                <button type='button' className='toggle' />
            </div>
        );
    }
}

export default Toggle;
