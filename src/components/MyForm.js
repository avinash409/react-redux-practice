import React from 'react';

export class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            course: '',
            terms: ''
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form name="myForm" onSubmit={this.handleSubmit.bind(this)}>
                <p>
                    User Name: <input type="text" value={this.state.username} name="username" onChange={this.handleChange.bind(this)} />
                </p>
                <p>
                    Password: <input type="password" value={this.state.password} name="password" onChange={this.handleChange.bind(this)} />
                </p>
                <p>
                    Course: 
                    <select value={this.state.course} name="course" onChange={this.handleChange.bind(this)}>
                        <option value="">Please select one</option>
                        <option value="1">Controlled Components</option>
                        <option value="2">Uncontrolled Components</option>
                        <option value="3">Redux</option>
                        <option value="4">Higher Order Components</option>
                    </select>
                </p>
                <p>
                    <input type="checkbox" value={this.state.terms} name="terms" onChange={this.handleChange.bind(this)} />Accepts Terms & Conditions
                </p>
                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form>
        )
    }
}
