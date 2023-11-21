import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    .contact-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px;
      flex-wrap: wrap;
    }

    .contact-form {
      width: 100%;
      max-width: 600px;
      text-align: center;
      margin-bottom: 20px;
      background-color: whitesmoke;
      border-radius: 12px;
    }

    /* .contact-form h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  } */

    .contact-form form {
      display: flex;
      flex-direction: column;
    }

    .contact-form label {
      margin-bottom: 8px;
      font-size: 16px;
      color: #333;

      border-radius: 3px;
    }

    .contact-form input,
    .contact-form textarea {
      margin-bottom: 16px;
      padding: 10px;
      font-size: 14px;
      border: 1px solid #ddd;
      border-radius: 7px;
      margin-left: 15%;
      margin-right: 15%;
    }

    .contact-form button {
      background-color: #007bff;
      color: white;
      padding: 10px;
      cursor: pointer;
      border: none;
      border-radius: 7px;
      font-size: 16px;
      margin-left: 15%;
      margin-right: 15%;
    }

    .map-container {
      width: 100%;
      max-width: 600px;
      margin-bottom: 20px;
      background-color: whitesmoke;
      border-radius: 12px;
    }

    .map-container iframe {
      width: 100%;
      height: 300px;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    .map-container iframe:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <Wrapper>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="map-container">
          {/* You can embed your Google Map here */}
          {/* Replace the src attribute with the link to your embedded Google Map */}
          <h2>Google map</h2>
          {""}
          <br />
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224372.16779532147!2d-74.00597275465924!3d40.71277603064684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1630473946413!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
