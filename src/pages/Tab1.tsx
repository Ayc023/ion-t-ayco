import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonCard>
    <img alt="Silhouette of mountains" src="assets/img/Judging.jpg" />
    <IonCardHeader>
      <IonTitle>Wassup Sir</IonTitle>
      <IonCardTitle>Card Title</IonCardTitle>
      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  </IonCard>
  );
};

export default Tab1;
