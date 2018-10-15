import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './index.scss'


class Header extends Component {
    constructor(props) {
        super(props)
    }

    state = {};

    render() {
        return (
            <div className='header'>
                <div className='headerLeft'>
                    <i className='logo'>66</i>
                    <i className='title'>66</i>
                </div>
                <Link to='/login' replace className='toLogin'>
                    登陆
                </Link>
            </div>
        )
    }
}

export default Header