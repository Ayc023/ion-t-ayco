import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { arrowBackCircle, } from 'ionicons/icons';
import { IonRouterLink } from '@ionic/react'; // Added IonRouterLink import
import './Click_counter.css';


const Tab2: React.FC = () => {
  const [count, setCount] = useState(0);


  const incrementCounter = () => {
    setCount(count + 1);
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="counter-content">
      
      <IonRouterLink href="/Home">
            <IonIcon id="arrow" aria-hidden="true" icon={arrowBackCircle} />
                </IonRouterLink>

        <div id="counter">
          <h1>Click Counter</h1>
          <p>Total Clicks: {count}</p>
          <IonButton onClick={incrementCounter}>Click me!</IonButton>
        </div>


      </IonContent>
    </IonPage>
  );
};


export default Tab2;