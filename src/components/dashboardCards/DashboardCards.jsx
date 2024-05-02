import { useState } from 'react';
import DashboardCardStyles from './dashboardCards.module.css'

const DashboardCards = () => {
  const [cards, setCards] = useState({
    cards: [
      {
        id: 1,
        icon: 'calendar',
        title: 'Upcoming Tasks',
        count: 48,
        color:"#FC95B4",
        innercolor:"#FF7CA4"
      },
      {
        id: 2,
        icon: 'hourglass',
        title: 'In-Progress Tasks',
        count: 24,
        color:"#FFCE62",
        innercolor:"#FFC23D"
      },
      {
        id: 3,
        icon: 'task',
        title: 'Completed Tasks',
        count: 72,
        color:"#0BC56D",
        innercolor:"#15B569"
      },
    ],
  });
  return (
    <>
      {cards.cards.map((card) => (
        <div key={card.id} className={DashboardCardStyles['dashboard-card-container']} style={{backgroundColor:card.color}}>
          <div className={DashboardCardStyles['dashboard-card-header']} style={{backgroundColor:card.innercolor}}>
           <box-icon name={card.icon} ></box-icon>
          </div>
          <div className={DashboardCardStyles['dashboard-card-title']}>
            <p>{card.title}</p>
          </div>
          <div className={DashboardCardStyles['dashboard-card-count']}>
            <p>{card.count}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DashboardCards;
