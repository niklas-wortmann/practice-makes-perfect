import React, {Component} from 'react'; 

export class ManipulateHead extends Component {

    componentDidMount() {
        document.documentElement.lang = 'en';
    }

    render() {
        return null;
    }

}