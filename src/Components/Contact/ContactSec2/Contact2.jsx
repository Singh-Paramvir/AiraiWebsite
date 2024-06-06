import React, { useState } from 'react';
import axios from 'axios';
import bg from '../../../images/contact us/Sec2/bg2.png';
import '../../Contact/ContactSec2/ContactSec2.css';

const Card = (props) => (
  <div className="form-cont flex items-center justify-center bg-black rounded-md bg-opacity-30 pb-5 pt-12 shadow-lg rounded-lg w-11/12 max-w-11/12 mx-auto">
    {props.children}
  </div>
);

const Form = (props) => (
  <form className="fields space-y-6 mx-4 sm:mx-12" onSubmit={props.onSubmit}>
    {props.children}
  </form>
);

const TextInput = (props) => (
  <div className="relative mb-1 sm:mb-2" style={{ width: '100%' }}>
    <label
      className={`absolute left-3 -top-2.5 px-1 z-10 text-white font-bold rounded-md transition-all duration-200 ease-in-out ${props.focus ? 'bg-slate-500 px-6 py-1' : ''} ${props.focus || props.value ? 'bg-slate-500 px-6 py-1 text-sm' : ' top-3 text-sm'}`}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={`block w-full px-4 py-3 text-base text-white bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 ease-in-out ${props.focus || props.value ? 'bg-transparent pt-6' : 'pt-3'}`}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      style={{ zIndex: 0 }}
      required
    />
    {props.error && <p className="text-red-500 text-xs mt-1">{props.error}</p>}
  </div>
);

const TextArea = (props) => (
  <div className="relative mb-2">
    <label
      className={`absolute left-3 -top-2.5 px-1 z-10 text-white font-bold rounded-md transition-all duration-200 ease-in-out ${props.focus || props.value ? 'text-sm bg-slate-500 px-6 py-1' : 'top-3 text-sm'}`}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
      className={`mt-4 block w-full h-36 px-4 py-2 text-base text-white bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 z-0 focus:border-transparent transition-all duration-200 ease-in-out ${props.focus || props.value ? 'pt-6' : 'pt-3'}`}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      style={{ zIndex: 0 }}
      required
    />
    {props.error && <p className="text-red-500 text-xs mt-1">{props.error}</p>}
  </div>
);

const Button = (props) => (
  <button className='rounded-full bg-gradient-to-r from-sky-800 to-sky-400 py-3 sm:py-4 px-16 sm:px-24 mt-2 text-white text-lg font-bold'>
    {props.children}
  </button>
);

const Modal = ({ show, onClose, message }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: { name: 'name', label: 'Full name', value: '', focus: false, error: '' },
    email: { name: 'email', label: 'E-mail Id', value: '', focus: false, error: '' },
    phone: { name: 'phone', label: 'Mobile no.', value: '', focus: false, error: '' },
    message: { name: 'message', label: 'Your query', value: '', focus: false, error: '' },
  });

  const [showModal, setShowModal] = useState(false);

  const handleFocus = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name], focus: true, error: '' },
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name], focus: false },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name], value, error: '' },
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name.value,
      email: formData.email.value,
      phone: formData.phone.value,
      message: formData.message.value,
    };

    let isValid = true;

    if (!validateEmail(data.email)) {
      setFormData((prev) => ({
        ...prev,
        email: { ...prev.email, error: 'Invalid email format' },
      }));
      isValid = false;
    }

    if (!validatePhone(data.phone)) {
      setFormData((prev) => ({
        ...prev,
        phone: { ...prev.phone, error: 'Invalid phone number' },
      }));
      isValid = false;
    }

    if (!isValid) return;

    try {
      const config = {
        method: 'post',
        url: 'http://89.116.34.245:6001/api/v1/auth/addFeedback',
        data,
      };
      const response = await axios(config);
      console.log('hiii');
      console.log(JSON.stringify(response.data));
      console.log('param');
      setShowModal(true); // Show the success modal

      // Reset the form fields
      setFormData({
        name: { name: 'name', label: 'Full name', value: '', focus: false, error: '' },
        email: { name: 'email', label: 'E-mail Id', value: '', focus: false, error: '' },
        phone: { name: 'phone', label: 'Mobile no.', value: '', focus: false, error: '' },
        message: { name: 'message', label: 'Your query', value: '', focus: false, error: '' },
      });
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='contact bg-cover bg-center h-screen lg:pt-12' style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex items-center justify-start p-6 sm:p-12">
        <div className="w-full max-w-3xl">
          <h1 className="form-head text-3xl sm:text-4xl pb-2 font-bold font-lato lg:mb-6 text-center text-white">Ready to Discuss</h1>
          <Card>
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  {...formData.name}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <TextInput
                  {...formData.phone}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <TextInput
                {...formData.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextArea
                {...formData.message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className="flex justify-center">
                <Button>Submit</Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} message="Message sent successfully!" />
    </div>
  );
};

export default Contact2;
