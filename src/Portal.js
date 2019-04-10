import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const toastRoot = document.getElementById('toast-container');

class Portal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    
    componentDidMount() {
        toastRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        toastRoot.removeChild(this.el);
    }
    
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
          );
    }
}

export default Portal;