import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function BoilingVerdict(props) {
    if(props.celsius >=100) {
        return <p>The water would boil </p>;
    }
    return <p>The water would not boil</p>;

}

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: ''
        }
    }
    handleCelsiusChange(temperature){
        this.setState({
            temperature: temperature,
            scale: 'c'
        });
    }
    handleFahrenheitChange(temperature){
        this.setState({
            temperature: temperature,
            scale: 'f'
        });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange.bind(this)}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange.bind(this)}/>
            </div>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        }
    }

    handleChange(e){
        // this.setState({
        //     temperature: e.target.value
        // });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend> Enter temperature in {scaleNames[scale]}: </legend>
                <input value={temperature} onChange={this.handleChange.bind(this)}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 /9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output*1000) /1000;
    return rounded.toString();
}
