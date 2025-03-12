import { IonContent, IonPage, IonCard, IonCardContent, IonSearchbar } from '@ionic/react';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { copyOutline, checkmarkOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Navbar from '../components/Navbar';
import '../theme/animations.css';

const Register: React.FC = () => {
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
        setTimeout(() => setCopiedIndex(null), 2000);
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
                <title>DM Check Messages</title>
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
                        }}>DM Check Messages</h2>
                        <IonSearchbar
                            value={searchQuery}
                            onIonChange={e => setSearchQuery(e.detail.value!)}
                            placeholder="Search messages..."
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
                                // Your actual list items with animation class
                                [
                                    "Hey, can you check your DMs? Just sent you something!",
                                    "Quick DM for you—mind taking a look?",
                                    "Sent you a message! Let me know what you think.",
                                    "Just slid into your DMs—check it out when you can.",
                                    "I dropped you a DM, take a peek when you get a sec!",
                                    "Hey, check your inbox! Sent something your way.",
                                    "Just sent you a message. Looking forward to your reply!",
                                    "Check your DMs, I think you'll like what I sent.",
                                    "Psst… there's a message waiting for you in your DMs!",
                                    "I just sent you something cool—go check your DMs!",
                                    "DM alert! Pop into your inbox real quick.",
                                    "You got mail! Well… a DM. Check it out!",
                                    "Sent you a DM—let me know what you think.",
                                    "Hey, just dropped you a message. Mind checking?",
                                    "Slide into your own DMs and see what I sent!",
                                    "I left you a little something in your inbox. Take a look!",
                                    "Sent you a quick message. Hope to hear back soon!",
                                    "Knock knock! Your DMs are calling.",
                                    "Hey! There's a fresh new message waiting for you.",
                                    "I sent you a DM, let me know what you think!",
                                    "DM alert! Your inbox just got more interesting.",
                                    "Just sent you a message—hope it makes your day!",
                                    "Hey, take a moment and check your DMs.",
                                    "There's a message from me in your inbox—go take a look!",
                                    "I sent you something fun—check your DMs!",
                                    "Got a sec? Just sent you a message!",
                                    "I just messaged you—hope you like what I sent!",
                                    "Hey, I reached out in your DMs! Let me know your thoughts.",
                                    "Slide over to your DMs—I have something for you!",
                                    "I just sent you a message, can't wait for your reply!",
                                    "Open your DMs when you get a chance, I sent you something!",
                                    "Hey, sent you a message! Let me know what you think.",
                                    "Check your DMs when you're free—I left you something!",
                                    "There's a surprise in your inbox—go check!",
                                    "I sent you something exciting—take a look!",
                                    "Just a heads-up: there's a message waiting for you!",
                                    "Your inbox is a little fuller now—check your DMs!",
                                    "Hey, a little something is waiting for you in your DMs!",
                                    "Just sent you a DM—drop me a reply when you can.",
                                    "Ding ding! Your DMs have been updated. Check them out!",
                                    "Your DM inbox just got more interesting—take a peek!",
                                    "Check your messages when you can! Sent you something.",
                                    "There's a little note from me in your inbox—go see!",
                                    "Hey, just pinging you to check your DMs.",
                                    "I left something for you in your messages—take a look!",
                                    "Check your DMs when you have a moment—sent you a quick one!",
                                    "Sent you a message! Looking forward to your response.",
                                    "Your inbox is waiting—check it out when you can.",
                                    "I dropped a DM your way! Let me know what you think.",
                                    "Your messages just got an update—check them out!"
                                ].filter(message => 
                                    message.toLowerCase().includes(searchQuery.toLowerCase())
                                ).map((message, index) => (
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
                                            {highlightText(message, searchQuery)}
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
                                            onClick={() => handleCopy(message, index)}
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

export default Register;