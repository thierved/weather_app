import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {city: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ city: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchWeatherData(this.state.city);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Enter the name of the city." 
                    value={this.state.city} onChange={this.handleChange}/>
                <button>Search!</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeatherData}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);