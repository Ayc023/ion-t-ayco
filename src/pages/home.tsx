import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import { pulseOutline, calculatorOutline, todayOutline, listCircleOutline, bookOutline, textOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Home.css'
const Home: React.FC = () => {
  const history = useHistory();

  const goToClickCounter = () => {
    history.push('/click_counter');
  };

  const goToCalculator = () => {
    history.push('/calculator');
  };

  const goToTodolist = () => {
    history.push('/todolist');
  };

  const goTonotes = () => {
    history.push('/notes');
  };

  const goToQoutes = () => {
    history.push('/qoutes');
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center">
          <IonCard onClick={goToClickCounter} style={{ width: '350px', cursor: 'pointer' }} color="light">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={pulseOutline} slot="start" />
              Click Counter
            </IonCardContent>
          </IonCard>

          <IonCard onClick={goToCalculator} style={{ width: '350px', cursor: 'pointer' }} color="light">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={calculatorOutline} slot="start" />
              Calculator
            </IonCardContent>
          </IonCard>

          <IonCard onClick={goToTodolist} style={{ width: '350px', cursor: 'pointer' }} color="light">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={listCircleOutline} slot="start" />
              Todo list
            </IonCardContent>
          </IonCard>
          <IonCard onClick={goTonotes} style={{ width: '350px', cursor: 'pointer' }} color="light">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={bookOutline} slot="start" />
              Notes
            </IonCardContent>
          </IonCard>
          <IonCard onClick={goToQoutes} style={{ width: '350px', cursor: 'pointer' }} color="light">
            <IonCardContent style={{ fontSize: '30px' }}>
              <IonIcon icon={textOutline} slot="start" />
              Qoutes
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );

};

export default Home;
