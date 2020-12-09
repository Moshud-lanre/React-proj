import {useEffect, useState } from 'react';
const Route = ({path, children}) => { // lines 3-11 informs the routes of changes in url and updates it , line 9 is a cleanup
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname); // this updates to the page to corresponding url 
        }
        window.addEventListener('popstate',onLocationChange);

        return ()=> {
            window.removeEventListener('popstate',onLocationChange);
        };
    }, [])
    return currentPath === path ? children: null; // the currentPath == window.location.pathname
};


export default Route;