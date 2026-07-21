import { useState } from 'react';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import FormField from '../common/FormField.jsx';

const initialValues = { name: '', email: '', message: '' };

export default function ContactFormSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'A valid email is required.';
    if (values.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  return (
    <Card>
      <form className="grid gap-5" onSubmit={submitForm} noValidate>
        <FormField id="name" label="Name" name="name" value={values.name} onChange={updateField} error={errors.name} />
        <FormField id="email" label="Email" name="email" type="email" value={values.email} onChange={updateField} error={errors.email} />
        <FormField
          id="message"
          label="Message"
          name="message"
          as="textarea"
          rows="5"
          value={values.message}
          onChange={updateField}
          error={errors.message}
        />
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
        {submitted && <p className="text-sm font-semibold text-clap-sky">Thank you. Your message has been validated locally.</p>}
      </form>
    </Card>
  );
}
