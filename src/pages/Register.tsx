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
                                [
                                    "Hey! Sorry for disturbing you again, can you please check your DMs for me? I think there's a Twitter issue 😊",
                                    "Heya!! Would you please spare a moment and check your request message for me? I've been eagerly waiting for your attention <3",
                                    "Heya! I've sent you some messages in your request message. Can you please check them out for me? I'm looking forward to you <3",
                                    "Heya! I've sent you some messages in your DMs regarding your character. Can you please check them out for me? I'm looking forward to you <3",
                                    "Heya! I've sent you some messages in your request message. Can you please check them out for me? I'm looking forward to you <3",
                                    "Hey! Just a quick reminder to check your DMs. I sent you something important. Hope to hear from you soon! 😊",
                                    "Heya!! If you have a moment, please check your request message. I've been waiting for your response <3",
                                    "Heya! I sent you some messages in your DMs. Can you please take a look for me? I'd really appreciate it! <3",
                                    "Hey! I sent you something in your DMs. Can you please check it out for me? Looking forward to your reply! 😊",
                                    "Heya! I sent you some messages about your character. Can you check your request message? I'd love to hear back <3",
                                    "Hey! I just wanted to make sure you saw my messages. Can you check your DMs? Thanks a lot! 😊",
                                    "Heya! I sent you a request message! Can you please check it out? I'd love to hear your thoughts <3",
                                    "Hey! I sent you a DM regarding your character! Can you take a quick look for me? I'd appreciate it a lot 😊",
                                    "Heya!! Would you mind checking your request message? I sent you something special and I can't wait for your response! <3",
                                    "Hey! I sent you something in your request message! Could you check it out for me? I'd love to hear from you 😊",
                                    "Heya! Just dropping by to remind you to check your DMs! I sent you something really cool <3",
                                    "Hey! I sent you a message in your request! Can you take a moment to check? I'd really appreciate it! 😊",
                                    "Heya! Your character caught my eye! I sent you something in your DMs. Can you check it out? <3",
                                    "Hey! I just sent you a message in your DMs. Can you please take a look? Looking forward to hearing from you! 😊",
                                    "Heya!! Could you please check your request message? I sent you something and I'd love to hear your thoughts! <3",
                                    "Hey! Just a friendly reminder to check your DMs! I sent you something really interesting 😊",
                                    "Heya! I left a message for you in your request messages! Can you take a moment to check it out? <3",
                                    "Hey! I sent you something in your request messages! Can you please check it? I'd love to hear back 😊",
                                    "Heya! I dropped a message for you in your DMs! Please check it out when you get a chance <3",
                                    "Hey! Just a small reminder to check your DMs! I sent you something I think you'll love 😊",
                                    "Heya!! I sent you a message about your character! Please check your request messages when you can <3",
                                    "Hey! Can you check your request messages for me? I sent you something interesting! 😊",
                                    "Heya! I sent you some messages in your DMs! Please take a look when you can, I'd love to hear back! <3",
                                    "Hey! Just a quick reminder to check your DMs! I sent you something I think you'll love 😊",
                                    "Heya! Your character is amazing! I sent you something in your request messages, please check it out! <3",
                                    "Hey! I left a message for you in your request! Can you please check it and let me know? 😊",
                                    "Heya! Just checking in! Can you take a look at your DMs? I sent you something special <3",
                                    "Hey! I sent you something in your request messages! Can you please check? I'd love to hear from you 😊",
                                    "Heya!! I sent you something in your DMs! Can you check it when you have time? Looking forward to hearing from you <3",
                                    "Hey! Your character is awesome! I sent you something in your request messages, please check 😊",
                                    "Heya! I just wanted to remind you to check your DMs! I sent you something cool <3",
                                    "Hey! Could you check your request messages for me? I sent you something interesting! 😊",
                                    "Heya! I sent you some messages in your DMs! Please take a look when you get a chance <3",
                                    "Hey! Just a quick reminder to check your DMs! I sent you something fun 😊",
                                    "Heya! Your character is amazing! I sent you something in your request messages, please check it out! <3",
                                    "Hey! I left a message for you in your request! Can you please check it and let me know? 😊",
                                    "Heya! Just checking in! Can you take a look at your DMs? I sent you something special <3",
                                    "Hey! I sent you something in your request messages! Can you please check? I'd love to hear from you 😊",
                                    "Heya!! I sent you something in your DMs! Can you check it when you have time? Looking forward to hearing from you <3",
                                    "Hey! Your character is awesome! I sent you something in your request messages, please check 😊",
                                    "Heya! I just wanted to remind you to check your DMs! I sent you something cool <3",
                                    "Hey! Could you check your request messages for me? I sent you something interesting! 😊",
                                    "Heya! I sent you some messages in your DMs! Please take a look when you get a chance <3",
                                    "Hey! Just a quick reminder to check your DMs! I sent you something fun 😊",
                                    "Heya! Your character is amazing! I sent you something in your request messages, please check it out! <3",
                                    "Hey! I left a message for you in your request! Can you please check it and let me know? 😊",
                                    "Heya! Just checking in! Can you take a look at your DMs? I sent you something special <3",
                                    "Hey! I sent you something in your request messages! Can you please check? I'd love to hear from you 😊",
                                    "Heya!! I sent you something in your DMs! Can you check it when you have time? Looking forward to hearing from you <3",
                                    "Hey! Your character is awesome! I sent you something in your request messages, please check 😊",
                                    "Heya! I just wanted to remind you to check your DMs! I sent you something cool <3",
                                    "Hey! Could you check your request messages for me? I sent you something interesting! 😊",
                                    "Heya! I sent you some messages in your DMs! Please take a look when you get a chance <3",
                                    "Hey! Just a quick reminder to check your DMs! I sent you something fun 😊",
                                    "Heya! Your character is amazing! I sent you something in your request messages, please check it out! <3"
                                ].filter(message => 
                                    message.toLowerCase().includes(searchQuery.toLowerCase())
                                ).map((message, index) => (
                                    <li key={index} 
                                        className={message.startsWith("===") ? "separator" : "list-item"}
                                        style={{
                                            ...(message.startsWith("===") ? {
                                                fontSize: '20px',
                                                padding: '16px',
                                                margin: '16px 0',
                                                textAlign: 'center',
                                                backgroundColor: '#e0e0e0',
                                                fontWeight: 'bold',
                                                borderRadius: '8px'
                                            } : {
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
                                            })
                                        }}>
                                        {message.startsWith("===") ? (
                                            message
                                        ) : (
                                            <>
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
                                            </>
                                        )}
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