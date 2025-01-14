import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './BookingForm.module.css';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().nullable().required('Booking date is required'),
  comment: yup.string(),
});

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    register('date', { required: 'Booking date is required' });
  }, [register]);

  const onSubmit = data => {
    toast(`Thank you, ${data.name}! Your booking is confirmed.`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
    reset();
    setStartDate(null);
  };

  return (
    <div className={css.bookingFormWrapp}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.bookingForm}>
        <h2 className={css.bookingTitle}>Book your campervan now</h2>
        <p className={css.bookingText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.bookingFormInputWrapp}>
          <input
            className={css.bookingFormInput}
            {...register('name')}
            placeholder="Name*"
          />
          {errors.name && (
            <p className={css.errorMessage}>{errors.name.message}</p>
          )}

          <input
            className={css.bookingFormInput}
            {...register('email')}
            placeholder="Email*"
          />
          {errors.email && (
            <p className={css.errorMessage}>{errors.email.message}</p>
          )}
          <div className={css.bookingFormInputDouble}>
            <div className={css.datePickerWrapper}>
              <DatePicker
                className={`${css.bookingFormInput} ${
                  startDate ? css.dateSelected : ''
                }`}
                selected={startDate}
                onChange={date => {
                  setStartDate(date);
                  setValue('date', date, { shouldValidate: true });
                }}
                placeholderText="Booking date*"
                dateFormat="dd.MM.yyyy"
              />
              {errors.date && (
                <p className={css.errorMessage}>{errors.date.message}</p>
              )}
            </div>

            <textarea
              {...register('comment')}
              placeholder="Comment"
              className={css.bookingFormTextarea}
            ></textarea>
          </div>
        </div>

        <button className={css.bookingFormBtn} type="submit">
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
