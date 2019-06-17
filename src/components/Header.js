import React from 'react';
import { Nav } from './Nav';
import { Clock } from './Clock';
import '../styles/Header.scss';

export class Header extends React.Component {
    render() {
        return (
        <div>
            <header>
                <div className="inner-header">
                    <div style={{display: 'flex'}}>
                        <h3>Hello, React User!</h3>
                    </div>
                    <div style={{display: 'flex', 'alignItems': 'center'}}><Clock/></div>
                </div>
                <div>
                    <Nav items={this.props.navItems}/>
                </div>
            </header>
            {/* {this.props.navItems.length > 0 && <h5>Nav Count: {this.props.navItems.length}</h5>} */}
        </div>
        )
    }
}