import React from "react";
import ReactDOM from "react-dom";
import "./Content.css";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOnInputs: [] };
  }

  render() {
    let number;
    let imgElement =
      "https://www.gadgety.co.il/wp-content/themes/main/thumbs/2020/06/ps5-design.jpg";
    let arr = [];
    return (
      <>
        <h1>Buy PS5 :</h1>
        <span style={{ fontSize: "22px" }}> Enter quantity :</span>
        <input
          style={{
            padding: "10px",
            margin: "10px",
            textAlign: "center",
            fontSize: "20px",
          }}
          min={1}
          type="number"
          placeholder="Enter quantity:"
          onChange={(x) => {
            number = 0;
            this.setState({ numberOnInputs: [] }, () => {
              number =
                Number(this.state.numberOnInputs.length) +
                Number(x.target.value);
              for (let i = 0; i < number; i++) {
                arr.push("*");
              }
              console.log(arr);
              this.setState({ numberOnInputs: arr }, () => {
                console.log(this.state.numberOnInputs);
              });
            });
          }}
        />
        <div>
          {this.state.numberOnInputs.map((e) => {
            return (
              <img
                style={{ padding: "10px", margin: "10px" }}
                width={300}
                key={e}
                src={imgElement}
              />
            );
          })}
        </div>
      </>
    );
  }
}
