import React from "react";
import { useColor } from "../../store/color.state";

const ContactInfo = () => {
  const { settingOptions } = useColor();
  return (
    <div className="container mt-5">
      <h2 className={`display-4 text-${settingOptions.color} text-center`}>
        Contact us
      </h2>
      <div className={`row bg-${settingOptions.theme}`}>
        <div className="col-md-6 mb-4">
          <div className={`card border-0 bg-${settingOptions.theme}`}>
            <div className="card-body">
              <h5 className="card-title">Phone Support</h5>
              <p className="card-text">
                For immediate assistance, call us at:
                <br />
                <strong>(+92) 456-7890</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={`card border-0 bg-${settingOptions.theme}`}>
            <div className="card-body">
              <h5 className="card-title">Email Support</h5>
              <p className="card-text">
                For non-urgent inquiries, please email us at:
                <br />
                <strong>
                  <a href="mailto:support@example.com">help@readspeak.com</a>
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className={`card border-0 bg-${settingOptions.theme}`}>
            <div className="card-body">
              <h5 className="card-title">Visit Us</h5>
              <p className="card-text">
                Our office is located at:
                <br />
                <strong>Sukkur IBA University Main Campus</strong>
                <br />
                Sukkur, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
