import React, {useState} from 'react';

const SearchBar = ({ getInput }) => {
    const [term, setTerm]= useState('');

    const onFormSubmit = (event) =>{
        event.preventDefault();

        getInput(term);
    }

    return (
        <div className=" search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field"/>
                <label>Search a Video</label>
                <input type='text' value={term} onChange={event => setTerm(event.target.value)} />
            </form>
        </div>
    );
};

export default SearchBar;