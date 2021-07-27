import React from 'react';

import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends React.Component {
  render() {
    return data.map((element) => {
      return (
        <HornedBeasts
          image_url={element.image_url}
          title={element.title}
          discription={element.discription}
        />
      );
    });
  }
}

export default Main;
