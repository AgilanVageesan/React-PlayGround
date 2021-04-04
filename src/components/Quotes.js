import React from "react";
import QuotesData from "../Assets/QuotesData.json";
import "./Quotes.css";


function Quotes(props) {
  var quoteNumber = Math.floor(Math.random() * 5000);
  var quote = QuotesData[quoteNumber];
  return (
    <div style={{maxWidth:"70%"}}>
      <div class="card bg-light mb-3">
        <div
          style={{ color: "black", fontFamily: "monospace", fontSize: "x-large" }}
          class="card-header"
        >
          Reactive Quotes
        </div>
        <div class="card-body" style={{padding:"1rem"}}>
          <h1
            style={{
              color: "black",
              fontFamily: "monospace",
              fontSize: "large",
            }}
          >
            "{quote.quoteText}"
          </h1>
          <h1
            style={{
              color: "black",
              fontFamily: "monospace",
              fontSize: "large",
              float: "right",
            }}
          >
            -{quote.quoteAuthor}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
