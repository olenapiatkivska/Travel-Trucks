import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

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
            {...register('name', { required: 'Name is required' })}
            placeholder="Name*"
          />
          {errors.name && (
            <p className={css.errorMessage}>{errors.name.message}</p>
          )}

          <input
            className={css.bookingFormInput}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Enter a valid email',
              },
            })}
            placeholder="Email*"
          />
          {errors.email && (
            <p className={css.errorMessage}>{errors.email.message}</p>
          )}

          <DatePicker
            className={css.bookingFormInput}
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

          <textarea
            {...register('comment')}
            placeholder="Comment"
            className={css.bookingFormTextarea}
          ></textarea>
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
