import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${value && value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export const FormTextArea = ({ handleChange, label, value, ...otherProps }) => (
  <div className="group">
    <textarea className="form-textarea" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${value && value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
