import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert--${alert.type}`}>
        <div className='alert__icon'>
          <ion-icon name='alert'></ion-icon>
        </div>
        <div className='alert__message'>{alert.msg}</div>
      </div>
    ))
  );
};

export default Alerts;
