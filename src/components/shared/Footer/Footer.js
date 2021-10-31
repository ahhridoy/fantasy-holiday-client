import React from "react";

const Footer = () => {
  return (
    // Footer Area
    <div className="bg-dark mt-5 p-2">
      <h4 className="text-primary mb-3">Fantasy Holiday</h4>
      <div className="row">
        {/* Address */}
        <div className="col-md-4">
          <p className="text-light">Address</p>
          <p className="text-light">Los Angeles 90001, California, US</p>
        </div>

        {/* Social Media Links */}
        <div className="col-md-4">
          <p className="text-light">Follow Us</p>
          <a href="https://facebook.com/juniorhridoyofficial">Facebook</a>{" "}
          <br />
          <a href="https://instagram.com/ahhridoyy">Instagram</a> <br />
          <a href="https://twitter.com/ahhridoyy">Twitter</a>
        </div>

        {/* Programming Languages */}
        <div className="col-md-4">
          <p className="text-light">Our Services</p>
          <small className="text-light">Camping Area for Tents</small> <br />
          <small className="text-light">Caravan Solor Tents</small> <br />
          <small className="text-light">Small Cavin Wood</small> <br />
        </div>
      </div>
      <div>
        <small className="text-light"> 2021 All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
