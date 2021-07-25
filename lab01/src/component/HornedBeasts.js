
import React from 'react';

class HornedBeasts extends React.Component {

    render() {
        return (
            <h2>
                {this.props.title}
            </h2>
            <img src= {this.props.img} alt = ''/>
            <p>
                {this.props.description}
            </p>
            <p>
                {this.props.keyword}
            </p>
            <p>
                {this.props.horns}
            </p>
            
        )
    }
}

export default HornedBeasts;

