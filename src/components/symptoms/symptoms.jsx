import React, { Component } from 'react';
import './App.css';

// components
import Header from './components/dumb/header/header';

// material
import Button from '@material-ui/core/Button';

class Symptoms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstPage: true,
      secondPage: false
    };
  }

  render() {
    return (
      <div className="app">
        <Header home />
        {/* your code should start here :) */}
        {/**
         * how to use material-ui links are bellow
         * - button: https://material-ui.com/components/buttons/
         */}
         {/* 
          tips:
            - you will have to change between 2 views in this case
            - one of them will ask the first question
            - other will ask the second
            - I recommend, to keep things simple, having all that logic
              inside this component. You can change the views using this.state.
              So when the user clicks Ja or Nej and then on next button it should
              set the state of firstPage to false and secondPage to true.
              I also added examples in line 40/43 on where to show elements for each page
         */}
         {this.state.firstPage && (
           <p>This is the first page</p>
         )}
         {this.state.secondPage && (
           <p>This is the second page</p>
         )}
      </div>
    );
  }
}

export default Symptoms;
