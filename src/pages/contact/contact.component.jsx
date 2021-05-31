import React, { useEffect, useState }from 'react';
import { FormInput, FormTextArea } from '../../components/form-input/form-input.component';
import { sendEmail } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';

const Contact = () => {
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [content, setContent] = useState(null);
  const [sent, setSent] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !subject || !content) {
        alert('All fields are required!');
        return;
      }
      sendEmail({email:email, subject:subject, content: content});
      setEmail('');
      setSubject('');
      setContent('');
      setSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  if (sent) {
    return (
    <div>
      <h3>Thanks for contacting us!</h3>
      <span>We will get back to you!</span>
    </div>
    );
  } else {

  return (
    <div>
      <h2>Contact Us</h2>
      <span>Send us your query</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleEmailChange}
          label="Your email address"
          required
        />

        <FormInput
          name="subject"
          type="text"
          value={subject}
          handleChange={handleSubjectChange}
          label="What is your subject?"
          required
        />

        <FormTextArea
          name="content"
          type="text"
          value={content}
          handleChange={handleContentChange}
          label="Write a description"
          required
        />

       <div className="buttons">
          <CustomButton type="submit" onClick={handleSubmit}>
            {' '}
            Send Mail
          </CustomButton>
        </div>
      </form>
    </div>
  );
  }
};

export default Contact;
