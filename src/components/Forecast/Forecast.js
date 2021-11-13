import React from 'react';
import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription';
import UpcomingDayForecast from '../UpcomingDayForecast/UpcomingDayForecast';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.css';

const Forecast = ({forecast}) => (
    <div className={styles.box}>
        <div>
            <div>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                    
                </div>
            </div>
            <div className="">
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
                <UpcomingDayForecast days={forecast.upcomingDays} />
            </div>
        </div>
    </div>
);

export default Forecast;