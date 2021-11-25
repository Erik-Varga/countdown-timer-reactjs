import React, {useEffect, useRef, useState} from 'react';
import './App.css';

const App = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('July 30, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date()
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop Timer
        clearInterval(interval.current);
      } else {
        // update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  // componentDidMount
  useEffect(() => {
    startTimer();
    return() => {
      clearInterval(interval.current);
    };
  })

  return (
    <section className="timer-container">
      <section className="timer">
        <div id="title">
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h1>Countdown Timer</h1>
          <p id="message">LESS is MORE...</p>
        </div>
        <div className="timerBox">
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
      <div id="footer"><strong>&copy; 2021, Erik Varga Web Developer </strong>
        | Project created using: React.js | CSS
      </div>
    </section>
  );
};

export default App;
