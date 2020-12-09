import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
// for search
const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers '
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];
// for the dropdown app
const options = [
    {
        label: ' The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: ' The Color Blue',
        value: 'blue'
    }
];

const showAccordion = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />
    }
};
{/*Crude way of nav uilding
const showList = () => {
    if(window.location.pathname === '/list') {
        return <Search />
    }
};

const showDropDown = () => {
    if(window.location.pathname === '/dropdown'){
        return <Dropdown />
    }
};

const showTranslate = () => {
    if(window.location.pathname === '/translate'){
        return <Translate />
    }
} */}

const App = ()=> {
    
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
           <Route path='/'>
               <Accordion items={items} />
           </Route>
           <Route path="/list">
                <Search/>
           </Route>
           <Route path='/dropdown'>
               <Dropdown 
               label='Select a color'
               options={options}
               selected={selected}
               onSelectedChange={setSelected}/>
           </Route>
           <Route path='/translate'>
               <Translate />
           </Route>
        </div>
    
    );
}


export default App;