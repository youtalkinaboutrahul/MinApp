import React from "react";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const [, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d360854-7e1f-4995-b035-c6960662991f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Sucess!",
        text: "Message sent sucessfully!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input
            type="number"
            className="field"
            name="number"
            placeholder="Enter your number"
            required
          />
        </div>
        <div className="input-box">
          <label>Your message</label>
          <textarea
            name="message"
            className="field-mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
