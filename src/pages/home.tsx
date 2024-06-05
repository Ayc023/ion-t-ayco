import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { pulseOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = [
    { id: 'card1', title: 'Click counter', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1738/1738704.png', onClick: () => history.push('/ion-t-ayco/click_counter') },
    { id: 'card2', title: 'Calculator', imageUrl: 'https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png', onClick: () => history.push('/ion-t-ayco/calculator') },
    { id: 'card3', title: 'Todo List', imageUrl: 'https://static.vecteezy.com/system/resources/previews/003/529/153/non_2x/business-to-do-list-flat-icon-modern-style-vector.jpg', onClick: () => history.push('/ion-t-ayco/todolist') },
    { id: 'card4', title: 'Quotes Generator', imageUrl: 'https://play-lh.googleusercontent.com/YMu87favYozO1fsx-_5IRvTFC3vwSGm3XI1FrQ1StwaYTXQu4Ciyp63nFFiX0Aa33w=w240-h480-rw', onClick: () => history.push('/ion-t-ayco/qoutes_generator') },
    { id: 'card5', title: 'Notes', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mN-6KdDCe6hppOj57HHMzyl404AP-uxiGQ&s', onClick: () => history.push('/ion-t-ayco/notes') },
  ].filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <IonPage>
<IonHeader className="custom-header">
  <IonToolbar>
    <IonTitle>Home</IonTitle>
  </IonToolbar>
  <hr />
</IonHeader>

      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="search-input"
          />
          <div className="card-container">
            {filteredCards.map(card => (
              <IonCard key={card.id} onClick={card.onClick} className="custom-card">
                <img alt="" src={card.imageUrl} className="card-image" />
                <IonCardContent className="card-content">
                  <div className="card-title">{card.title}</div>
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
