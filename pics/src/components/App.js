import React from 'react';
import unsplash from '../api/unsplash';
import Searchbar from './Searchbar';
import ImageList from './imageList';

class App extends React.Component  {
    state={images: [] };
        // fetch api when components mounts
     onSearchSubmit = async (term) => {
        const response= await unsplash.get('/search/photos', {
            params: {query: term},
        });
      this.setState({images: response.data.results});  
    }


    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <Searchbar getInput={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
            </div>
            
        ) 
}
    }
    

export default App;