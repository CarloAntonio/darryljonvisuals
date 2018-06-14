import React from "react";
import Formsy from 'formsy-react';
import MyInput from '../components/MyInput';
import TextArea from '../components/TextArea';

class contact extends React.Component {

  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      canSubmit: false,
    }; // state
  } // constructor

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {

    fetch('https://us-central1-backend-services-c166f.cloudfunctions.net/sendEmailDarryl/', {
      method: "post",
      body: JSON.stringify(model),
      headers: new Headers({"Content-Type": "application/json"})
    })
    .then(response => response.json())
    .then((jsonResult) => {
        if(jsonResult.status === "email sent") {
          // Hide submit button.
          document.getElementById("contact-form-submit-bt").style.display = "none";
          // Show a success message, hide error
          document.getElementById("message-success").style.display = "initial"
          document.getElementById("message-error").style.display = "none";
          //Clear up input values
          document.getElementById("name-input").value="";
          document.getElementById("email-input").value="";
          document.getElementById("comment-input").value="";

        } else {
          // Show submit button.
          document.getElementById("contact-form-submit-bt").style.display = "initial";
          // Show a error message, hide success
          document.getElementById("message-success").style.display = "none";
          document.getElementById("message-error").style.display = "initial";
        }
    });

  } //submit

  render () {
    return (
      <div className="wrapper">

    		{/* CONTACT */}
    		<section className="module">
    			<div className="container-fluid container-custom">

    				{/* MODULE TITLE */}
    				<div className="row">
    					<div className="col-sm-6 col-sm-offset-3">
    						<h2 className="module-title font-alt">Let's create something awesome!</h2>
    						<p className="module-subtitle">I would love to hear about your project.</p>
    					</div>
    				</div>
    				{/* /MODULE TITLE */}

    				<div className="row">

    					<div className="col-sm-8">

    						<Formsy id="contact-form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
    							<div className="form-group">
    								<label className="sr-only" htmlFor="cname">Name</label>
                    <MyInput
                      id="name-input"
                      name="name"
                      classname="form-control"
                      placeholder="Name*"
                      title="Name"
                      required
                    />
    								<p className="help-block text-danger"></p>
    							</div>
    							<div className="form-group">
    								<label className="sr-only" htmlFor="cemail">Your Email</label>
                    <MyInput
                      id="email-input"
                      name="email"
                      placeholder="Your E-mail*"
                      title="Email"
                      classname="form-control"
                      validations="isEmail"
                      validationErro="This is not a valid email."
                      required
                    />
    								<p className="help-block text-danger"></p>
    							</div>
    							<div className="form-group">
                    <TextArea
                      id="comment-input"
                      name="comment"
                      placeholder="Message*"
                      classname="form-control"
                      rows="7"
                    />
    								<p className="help-block text-danger"></p>
    							</div>
    							<div className="text-center">
    								<button type="submit" onClick={this.handleSubmit} className="btn btn-block btn-round btn-dark" id="contact-form-submit-bt">Submit</button>
    							</div>
    						</Formsy>
                <div id="message-success" className="alert alert-success"><strong>Success!</strong> Your message has been received!</div>
                <div id="message-error" className="alert alert-danger"><strong>Oh no!</strong> Something went wrong, try submiting again.</div>

    						{/* Ajax response */}
    						<div id="contact-response" className="ajax-response font-alt"></div>

    					</div>{/* .col-* */}

    					<div className="col-sm-4">

    						<div className="iconbox iconbox-left m-t-0 m-t-sm-40">
    							<div className="iconbox-icon">
    								<span className="icon-megaphone"></span>
    							</div>
    							<div className="iconbox-header">
    								<h4 className="iconbox-title font-alt">Say Hello</h4>
    							</div>
    							<div className="iconbox-content">
    								<p>Email: darryl.baello@gmail.com<br/>Phone: 1 (925) 285 1000</p>
    							</div>
    						</div>

    					</div>{/* .col-* */}

    				</div>

    			</div>
    		</section>
    		{/* /CONTACT */}

    		<hr className="divider"/>

      </div>
    );
  }
}

export default contact;
