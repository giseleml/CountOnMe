import React from 'react';

export class Table extends React.Component {
  //Initial value of the Counter
      state = {
        count: 0
      };
 //Increments the value by one
      sumBtn = () => {
        this.setState({ count: this.state.count + 1})
      };
//Decrements the value by one
    minusBtn = () => {
            this.setState({ count: this.state.count - 1 })
            if (this.state.count <= 0) {
              this.setState({ count: this.state.count = 0 })
            }
          };
//Refreshes the counter value back to its initial state
    refreshCount = () => {
    this.setState({ count: 0 })
    }

  render() {
      return (
      <div className="table">
        <div className="sum" onClick={() => this.sumBtn()}>
          <p>+</p>
          </div>
        <div className="refresh" onClick={() => this.refreshCount()}>
          <h1 id="number">{this.state.count}</h1>
          <p>Refresh</p>
          </div>
        <div className="minus" onClick={() => this.minusBtn()}>
          <p>-</p>
          </div>
        <div className="number">
          </div>
      </div>
    );
    }
  }
