import React from "react";
import "./App.css";

import Main from "./component/Main";
import Footer from "./component/Footer";
import Header from "./component/Header";
import data from "./component/data.json";
import ChosenBeasts from "./component/ChosenBeasts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      description: "",
      visibility: false,
    };

    dataContent = (title, image, descripition, visibility) => {
      this.setState({
        title: title,
        image: image,
        descripition: descripition,
        visibility: visibility,
      });
    };

    updateVisibility = (visibility) => {
      this.setState({
        visibility: visibility,
      });
    };
  }
  render() {
    return (
      <div>
        <ChosenBeasts
          title={this.state.title}
          image={this.state.image}
          description={this.state.description}
          visibility={this.state.visibility}
          hideVisibility={this.updateVisibility}
        />
        <Header />

        <Main data={data} dataContent={this.dataContent} />

        <Footer />
      </div>
    );
  }
}
export default App;
