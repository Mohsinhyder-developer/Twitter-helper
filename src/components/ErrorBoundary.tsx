import React, { Component, ErrorInfo } from 'react';
import { IonPage, IonContent, IonCard, IonCardContent, IonButton } from '@ionic/react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <IonPage>
                    <IonContent className="ion-padding">
                        <IonCard>
                            <IonCardContent>
                                <h2>Something went wrong</h2>
                                <p>{this.state.error?.message}</p>
                                <IonButton 
                                    expand="block"
                                    onClick={() => window.location.reload()}
                                >
                                    Refresh Page
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonContent>
                </IonPage>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;