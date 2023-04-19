import React, { Component } from "react";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact-card">
        <div className="contact-card-header">
          <h1>Contact the Milstein Program</h1>
        </div>
        <div className="contact-card-body">
          <div className="contact-card-body-left">
            <div className="contact-card-body-left-item">
              <div className="contact-option">
                <p>
                  <BsEnvelope />
                  <a href="mailto:milsteinprogram@cornell.edu">
                    milsteinprogram@cornell.edu
                  </a>
                </p>
              </div>
              <div className="contact-option">
                <p>
                  <BsTelephone />
                  <a href="tel:607-255-5200">607-255-3851</a>
                </p>
              </div>
              <div className="contact-option">
                <p>
                  <BsTelephone />
                  <a href="tel:607-255-1026">607-255-1026</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
