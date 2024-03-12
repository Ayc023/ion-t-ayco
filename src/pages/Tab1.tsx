import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton,IonActionSheet} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WASSUP SIR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
       
        <IonCard>
        <div style={{ textAlign: 'center' }}>
    <img alt="Silhouette of mountains" src="assets/img/bleee.jpg" style={{ maxWidth: '100%', maxHeight: '100%', display: 'inline-block' }} />
  </div>
      <IonCardHeader>
        <IonCardTitle>Emmanuel Ayco</IonCardTitle>
        <IonCardSubtitle>Student</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>“Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.”
       —Jack Handey</IonCardContent>
       <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>

<IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>

    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
