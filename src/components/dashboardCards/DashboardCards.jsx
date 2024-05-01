import { useState } from 'react';

const DashboardCards = () => {
  const [cards, setCards] = useState({
    cards: [
      {
        id: 1,
        icon: 'calendar',
        title: 'Upcoming Tasks',
        count: 48,
      },
      {
        id: 2,
        icon: 'hourglass',
        title: 'In-Progress Tasks',
        count: 24,
      },
      {
        id: 3,
        icon: 'task',
        title: 'Completed Tasks',
        count: 72,
      },
    ],
  });
  return (
    <>
      {cards.cards.map((card) => (
        <div key={card.id}>
          <div>
           <box-icon name={card.icon}></box-icon>
          </div>
          <div>
            <p>{card.title}</p>
          </div>
          <div>
            <p>{card.count}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DashboardCards;
