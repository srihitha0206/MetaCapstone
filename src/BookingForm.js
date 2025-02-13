import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './utils/api';

const BookingForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: 1,
      occasion: '',
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required('Please select a date.')
        .min(
          new Date().toISOString().split('T')[0],
          'Date cannot be in the past.'
        ),
      time: Yup.string().required('Please select a time.'),
      guests: Yup.number()
        .required('Please enter the number of guests.')
        .min(1, 'Number of guests must be at least 1.')
        .max(10, 'Number of guests cannot exceed 10.'),
      occasion: Yup.string().required('Please select an occasion.'),
    }),
    onSubmit: async (values, { setSubmitting, validateForm }) => {
      const errors = await validateForm();
      if (Object.keys(errors).length === 0) {
        const isSubmitted = submitAPI(values);
        if (isSubmitted) {
          navigate('/confirmed');
        } else {
          alert('There was an issue with your reservation. Please try again.');
        }
      } else {
        // Handle validation errors
        alert('Please fill out all required fields correctly.');
      }
      setSubmitting(false);
    },
  });

  const availableTimes = fetchAPI(formik.values.date);

  return (
    <main id="home">
      <div className="reservations">
        <h2>table reservation</h2>
        <form onSubmit={formik.handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" {...formik.getFieldProps('date')} />
            {formik.touched.date && formik.errors.date ? (
              <div className="error">{formik.errors.date}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="time">Choose time</label>
            <select id="time" {...formik.getFieldProps('time')}>
              <option value="" label="Select time" />
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time ? (
              <div className="error">{formik.errors.time}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              {...formik.getFieldProps('guests')}
              min="1"
              max="10"
            />
            {formik.touched.guests && formik.errors.guests ? (
              <div className="error">{formik.errors.guests}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" {...formik.getFieldProps('occasion')}>
              <option value="" label="Select occasion" />
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {formik.touched.occasion && formik.errors.occasion ? (
              <div className="error">{formik.errors.occasion}</div>
            ) : null}
          </div>

          <button
            className="button-primary"
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}>
            Reserve now!
          </button>
        </form>
      </div>
    </main>
  );
};

export default BookingForm;
