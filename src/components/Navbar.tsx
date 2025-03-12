import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { chatbubbleOutline, heartOutline, homeOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <IonHeader>
            <IonToolbar style={{
                '--background': '#ffffff',
                '--border-color': '#eaeaea',
                '--border-width': '1px',
                '--border-style': 'solid'
            }}>
                <IonTitle style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Tweet Helper</IonTitle>
                <IonButtons slot="end" style={{
                    display: 'flex',
                    gap: '10px',
                    marginRight: '16px'
                }}>
                    <IonButton 
                        fill={location.pathname === '/greetings' ? 'solid' : 'clear'}
                        color="primary"
                        routerLink="/greetings"
                        style={{
                            '--border-radius': '8px',
                            '--padding-start': '16px',
                            '--padding-end': '16px'
                        }}
                    >
                        <IonIcon icon={homeOutline} slot="start" />
                        Greetings
                    </IonButton>

                    <IonButton 
                        fill={location.pathname === '/dm-check' ? 'solid' : 'clear'}
                        color="primary"
                        routerLink="/dm-check"
                        style={{
                            '--border-radius': '8px',
                            '--padding-start': '16px',
                            '--padding-end': '16px'
                        }}
                    >
                        <IonIcon icon={chatbubbleOutline} slot="start" />
                        DM Check
                    </IonButton>

                    <IonButton 
                        fill={location.pathname === '/follow-requests' ? 'solid' : 'clear'}
                        color="primary"
                        routerLink="/follow-requests"
                        style={{
                            '--border-radius': '8px',
                            '--padding-start': '16px',
                            '--padding-end': '16px'
                        }}
                    >
                        <IonIcon icon={heartOutline} slot="start" />
                        Follow
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default Navbar; 