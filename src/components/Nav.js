import React from 'react';
import '../styles/Nav.scss';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        let activeKey = this.props.items.findIndex((e) => e === this.currentRoute);
        activeKey = activeKey > -1 ? activeKey : 0;
        this.state = {
            active: activeKey
        }
    }
    render() {
        return (
            <nav>
                {this.getListItems()}
            </nav>
        )
    }
    getListItems() {
        return this.props.items.map((item, i) => {
            return (
            <div onClick={this.updateActive.bind(this, i)} className={this.state.active === i ? "active" : ""} key={item.id}>{item.name}</div>
        )})
    }

    updateActive(activeKey) {
        this.setState({
            active: activeKey
        });
    }
}
