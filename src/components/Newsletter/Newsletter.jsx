import React, { Component } from "react";
import { Link } from "gatsby";
import "./Newsletter.css";

class Newsletter extends Component {
  render() {
    return (
        <div className="newsletter-container" id="newsletter">
          <div className="newsletter__info">
            <h5 className="newsletter__title">NEWSLETTER</h5>
            <form action="https://cryptisla.us19.list-manage.com/subscribe/post" method="POST" className="newsletter__form">
              <input type="hidden" name="u" value="b2c2786749f2250b6db9f1d37" />
              <input type="hidden" name="id" value="066bb7f36a" />              
              <input type="email" className="form-control" placeholder="Votre Email" name="MERGE0"></input>
              <button className="btn" type="submit" name="submit">S'ABONNER</button>
              <input type="hidden" name="ht" value="c8cd266242e4d3db86980f06500d4a3ed702a18d:MTU1NDgwMzMwMS44NzQy" />
              <input type="hidden" name="mc_signupsource" value="hosted" />
            </form>
          </div>
        </div>
    );
  }
}

export default Newsletter;
