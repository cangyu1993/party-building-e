import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './index.scss'

class Navbot extends Component {
    constructor(props) {
        super(props)
    }

    state = {};

    render() {
        return (
            <div className='menu'>
                {/*className={` item-link ${index==this.state.currentIndex? "active":null}`}*/}
                <Link to='/' replace className='item-link'>
                    <i className='iconfont icon-dang '></i>
                    <div className='title'>
                        首页
                    </div>
                </Link>
                <Link to='/' replace className='item-link'>
                    <i className='iconfont icon-xiaoxi '></i>
                    <div className='title'>
                        消息早知道
                    </div>
                </Link>
                <Link to='/' replace className='item-link'>
                    <i className='iconfont icon-wodedangxuan '></i>
                    <div className='title'>
                       我的党建
                    </div>
                </Link>
            </div>
        )
    }
}

export default Navbot