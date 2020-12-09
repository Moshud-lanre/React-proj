import React from 'react'

class Imagecard extends React.Component {
    constructor(props) {
        super(props)

        this.state={spans: 0}
        this.imageRef = React.createRef(); // Ref is used to access DOM element
    }
    componentDidMount() {
        console.log(this.imageRef); // to get how the images was addresssed in line below 
        this.imageRef.current.addEventListener('load',this.setSpans);// eventlistener was added in order to get the image height when it loads.
    }

    setSpans = () => {
        const height = (this.imageRef.current.clientHeight);

        const spans = Math.ceil(height/10);

        this.setState({spans});
    };

    render(){
        const {description, urls}= this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description}
                src={urls.regular}
                />
            </div>
        )
    }
}

export default Imagecard;