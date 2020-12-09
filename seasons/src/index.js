import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingPage from './LoadingPage';

class App extends React.Component {
    state = { Lat: null, errorMessage: ''};
        

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({Lat: position.coords.latitude }),// how position and error was addressed was gotten from the console.i.e  postion => console.log(position)
            (err)=> this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.Lat){
            return <div>Error: {this.state.errorMessage}</div>
            }
        if(!this.state.errorMessage && this.state.Lat){
            return <SeasonDisplay Lat={this.state.Lat}/>
            }
    
        return <div><LoadingPage  message='Please accept the location request'/></div>
        
    }

    render() { 
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        );
        
    }
}
ReactDOM.render(<App />,document.querySelector('#root'));