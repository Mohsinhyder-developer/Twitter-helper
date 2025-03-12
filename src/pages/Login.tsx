import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonCard, IonCardContent, IonInput, IonSearchbar } from '@ionic/react';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { copyOutline, checkmarkOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Navbar from '../components/Navbar';
import '../theme/animations.css';

const Login: React.FC = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
    };

    const highlightText = (text: string, highlight: string) => {
        if (!highlight.trim()) return text;
        
        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);
        
        return parts.map((part, i) => 
            regex.test(part) ? (
                <span key={i} style={{ backgroundColor: '#ffeb3b', fontWeight: 'bold' }}>
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <IonPage>
            <Helmet>
                <title>Greetings</title>
            </Helmet>
            <Navbar />
            <IonContent className="ion-padding page-transition">
                <IonCard>
                    <IonCardContent>
                        <h2 style={{
                            fontSize: '24px',
                            textAlign: 'center',
                            color: '#333',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>Common Greetings</h2>
                        <IonSearchbar
                            value={searchQuery}
                            onIonChange={e => setSearchQuery(e.detail.value!)}
                            placeholder="Search greetings..."
                            style={{
                                '--border-radius': '10px',
                                marginBottom: '16px'
                            }}
                        />
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {isLoading ? (
                                // Skeleton loading items
                                [...Array(5)].map((_, index) => (
                                    <li key={`skeleton-${index}`} 
                                        className="skeleton"
                                        style={{
                                            height: '52px',
                                            margin: '8px 0',
                                            borderRadius: '8px'
                                        }}
                                    />
                                ))
                            ) : (
                                // Your actual list items
                                [
                                    "Hello",
                                    "Hi",
                                    "Hey",
                                    "Heya",
                                    "Howdy",
                                    "Greeting",
                                    "Good day",
                                    "How's it going?",
                                    "How have you been?",
                                    "What's up?",
                                    "How's everything?",
                                    "How's life?",
                                    "How's your day going?",
                                    "How are things?",
                                    "How's your day been so far?",
                                    "What's new?",
                                    "How's your week going?",
                                    "How's your morning?",
                                    "How's your evening?",
                                    "Hope you're doing well!",
                                    "How's work/school going?",
                                    "What have you been up to?",
                                    "Feeling good today?",
                                    "How do you feel today?",
                                    "Everything alright?",
                                    "How are you holding up?",
                                    "How's your mood today?",
                                    "Hope you're having a great day!",
                                    "What's good?",
                                    "Long time no see! How've you been?",
                                    "How's your energy today?",
                                    "How's your health?",
                                    "How's the vibe today?",
                                    "How's your family?",
                                    "What's happening?",
                                    "Everything okay with you?",
                                    "What's going on?",
                                    "How are you feeling lately?",
                                    "How's your heart today?",
                                    "You doing alright?",
                                    "How's your mind?",
                                    "Any good news from you?",
                                    "How's your spirit?",
                                    "What's been keeping you busy?",
                                    "Hope today's treating you well!",
                                    "How's your weekend so far?",
                                    "What's the latest with you?",
                                    "How's your soul today?",
                                    "How's your mood this fine day?",
                                    "Anything exciting happening?",
                                    "Hope you're feeling awesome!",
                                    "How's your stress level?",
                                    "How's life treating you?",
                                    "How's your journey going?",
                                    "What's bringing you joy today?",
                                    "Hope everything's going great for you!",
                                    "How's your world?"
                                ].filter(greeting => 
                                    greeting.toLowerCase().includes(searchQuery.toLowerCase())
                                ).map((greeting, index) => (
                                    <li key={index} 
                                        className="list-item"
                                        style={{
                                            fontSize: '18px',
                                            padding: '12px',
                                            margin: '8px 0',
                                            borderRadius: '8px',
                                            backgroundColor: '#f5f5f5',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer'
                                        }}>
                                        <span style={{ flex: 1 }}>
                                             <strong>{index + 1}. </strong>
                                            {highlightText(greeting, searchQuery)}
                                        </span>
                                        <IonIcon
                                            icon={copiedIndex === index ? checkmarkOutline : copyOutline}
                                            style={{
                                                fontSize: '20px',
                                                color: copiedIndex === index ? '#2dd36f' : '#666',
                                                cursor: 'pointer',
                                                padding: '8px',
                                                marginLeft: '12px',
                                                flexShrink: 0
                                            }}
                                            onClick={() => handleCopy(greeting, index)}
                                        />
                                    </li>
                                ))
                            )}
                        </ul>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;