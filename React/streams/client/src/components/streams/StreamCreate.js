import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues){
    
  }

  render() {
    return(
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field label="Enter Description" name="description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description){
    errors.description = 'You must enter a descrption';
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);