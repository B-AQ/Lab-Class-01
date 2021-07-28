import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  render() {
    return this.props.data.map((element) => {
      return (
        <HornedBeasts
          keyword={element.title.changeToString()}
          image={element.image}
          title={element.title}
          discription={element.discription}
          dataContent={this.props.dataContent}
        />
      );
    });
  }
}

export default Main;
