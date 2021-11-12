import React from 'react';
import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription';
import UpcomingDayForecast from '../UpcomingDayForecast/UpcomingDayForecast';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.css';

const Forecast = ({forecast}) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
                <UpcomingDayForecast days={forecast.upcomingDays} />
            </Col>
        </Row>
    </Container>
);

export default Forecast;