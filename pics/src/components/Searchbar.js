import React from 'react'

class Searchbar extends React.Component {
    state={term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.getInput(this.state.term);
    }

    render(){
        return (
        <div>
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className='field'>
                        <label>Image Search </label>
                        {/* Onchange can be written as onChange={(e) => console.log(e.target.value)} for single line func */}
                        <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div> 
            
        </div>
        
     );
    }
    
}

export default Searchbar;