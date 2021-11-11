import React from 'react';
import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({
  forecastSubmit
}) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location && location !== '') {
      forecastSubmit(location);
      setLocation('');
    }   
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }
  return (
      <form onSubmit={handleSubmit}>
        {location}
          <input
              aria-label="location"
              type="text"
              className={`${styles.input} form-control`}
              placeholder="Search for location"
              required
              value={location}
              onChange={handleLocationChange}
          />

          <button onClick={handleSubmit} type="submit" className={styles.button}>
              SEARCH
          </button>
      </form>
  );
};

export default Form;