import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
      matrix: new Array(100).fill(null)
  };

  randomNumberInRange = (min, max) => {
      const copy = this.state.matrix, newRandomNumber = Math.floor(Math.random() * (max - min) + min);
      if(!this.state.matrix.includes(newRandomNumber)) {
          copy[Math.floor(Math.random() * (max - min) + min)] = newRandomNumber;
          this.setState({ matrix: copy });
      } else {
          return this.randomNumberInRange(1, 100);
      }
  };

  start = () => {
      this.interval = setInterval(() => {
        return this.randomNumberInRange(1, 100);
      }, 1000);
  };

  clear = () => {
      clearInterval(this.interval);
      this.setState({ matrix: this.state.matrix.map(value => {
          value = '';
          return value;
      })
      });
  };

  render() {
      const size = 10;
      return (
          <>
              <section id='buttons'>
                  <button onClick={this.start}>Start</button>
                  <button onClick={this.clear}>Clear</button>
              </section>
              <main id="matrix">
                  {this.state.matrix.map((content, index) => {
                      return <article className="cell" key={index}>{content}</article>;
                  }).reduce((arr, element, index) => {
                      index % size === 0 && arr.push([]);
                      arr[arr.length - 1].push(element);
                      return arr;
                  }, []).map((row, index) => <section className="row" key={index}>{row}</section>)}
              </main>
          </>
     )
   }
}
