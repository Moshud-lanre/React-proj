import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = {lat: null, errorMsg: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMsg: err.message})
        );
    }

    rendercontent() {
        if(this.state.errorMsg && !this.state.lat){
        return <div>Error: {this.state.errorMsg}</div>
        }
        if(!this.state.errorMsg && this.state.lat){
        return <div><SeasonDisplay lat={this.state.lat} /></div>
        }
        return <div>Loading...</div>
    } 

    render() {
        return(
            <div>{this.rendercontent()}</div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));