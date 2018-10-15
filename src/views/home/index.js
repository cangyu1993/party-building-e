import React, {Component} from 'react';
import './index.scss'
import Footer from '../../components/footer'
import Header from '../../components/header'

class home extends Component {
    constructor(props) {
        super(props)
    }

    state = {};

    render() {
        return (
            <div>
                <Header/>
                <div className='content'></div>
                <Footer/>
            </div>

        )
    }
}

export default home