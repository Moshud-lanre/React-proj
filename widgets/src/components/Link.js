import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) =>{
        if (event.metaKey || event.ctrlKey) { // this opens any link in new tab by pressing down ctr key while clicking the link
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href); // this makes url & nav link content to be in sync

        const navEvent = new PopStateEvent('popstate');// this two lines informs the route components of url change
        window.dispatchEvent(navEvent);
    }
    return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}

export default Link;