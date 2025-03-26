import { IonContent, IonPage, IonCard, IonCardContent, IonSearchbar } from '@ionic/react';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { copyOutline, checkmarkOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Navbar from '../components/Navbar';
import '../theme/animations.css';

const Follow: React.FC = () => {
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
                <title>Follow Messages</title>
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
                        }}>Follow back tweets:</h2>
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
                                    "Heya! Your character admires me and she looks so gorgeous. I have some special concepts in my mind for your character that will make it even more adorable. Can we please connect in DMs or follow each other? It'd be greatly appreciated :)",
                                    "Heya! I'm so impressed by your Sonic character and it looks so dashing. Can you please give me a follow-back or join me in DMs? I have some amazing concepts in my mind for your character that will make it even more attractive. I'm looking forward to you <3",
                                    "Hey! Your character attracts me and he looks so marvelous. I have some amazing or creative concepts in my mind for your character that will make it even more fascinating. Could you kindly give me a follow-back or join me in DMs?",
                                    "Hey! Your character attracts me and he looks so marvelous. I have some amazing or creative concepts in my mind for your character that will make it even more fascinating. Could you kindly give me a follow-back or join me in DMs?",
                                    "Hey! Your character attracts me and she looks so sexy. I have some more lewd ideas in my mind for your character and I'm pretty sure you'll love them. So can I get a follow-back, please?",
                                    "Hey! Your characters admire me and they look so adorable. I have some cute scenarios in my mind for your characters that will make them even more adorable. Can I get a follow-back, please?",
                                    "Hey dear! Your character adores me and she looks so gorgeous. Can you please give me a follow-back or HMU in DMs? I have some special things in my mind for your character and I'm so eager to share them with you <3",
                                    "Hey! Your character admires me and she looks so cute. Can we please connect in DMs or follow each other? I have some cute scenarios in my mind for your character that will make it even more adorable. It'd be greatly appreciated :)",
                                    "Heya! Your character is so amazing and I absolutely love their design! I have some fantastic ideas that could make them even cooler. Can we talk in DMs?",
                                    "Hey! Your character is just too stunning! I'd love to chat about some creative concepts I have in mind for them. Can we follow each other?",
                                    "Hello! Your character caught my attention and I can't stop admiring them! I have some interesting thoughts to share. Can we connect in DMs?",
                                    "Heya! Your OC looks so stylish and charming! I have some cool concepts to make them even more eye-catching. Can we chat?",
                                    "Hey! Your character's design is truly breathtaking! I'd love to share some of my creative ideas with you. Let's talk in DMs!",
                                    "Hey! Your Sonic OC is seriously impressive! I have some exciting ideas to make it even more dynamic. Would love to connect in DMs!",
                                    "Hey! Your character's look is truly unique and inspiring! I have some creative ideas that might interest you. Can we connect in DMs?",
                                    "Heya! Your OC is beyond adorable! I'd love to share some ideas that could enhance their charm. Can we talk in DMs?",
                                    "Hey! I absolutely love your character! I have some special ideas that could make them even more attractive. Can we chat?",
                                    "Hey there! Your character looks so wonderful! I have some fantastic ideas that could enhance their design. Let's discuss in DMs!",
                                    "Hey! Your OC stands out beautifully! I'd love to brainstorm some creative possibilities together. Can we connect?",
                                    "Heya! Your character is so well-designed! I have some fun concepts that would make them even more unique. Can we talk in DMs?",
                                    "Hey! Your character is truly marvelous! I'd love to exchange ideas and explore some cool scenarios. Can we connect?",
                                    "Hey! Your OC looks super cool and stylish! I have some creative thoughts to make them even more stunning. Let's chat in DMs!",
                                    "Heya! Your character is seriously eye-catching! I have some awesome concepts in mind that I'd love to discuss. Can we connect?",
                                    "Hey! Your OC is so well-crafted! I have some ideas that could take their look to the next level. Let's chat!",
                                    "Hey! Your character is absolutely breathtaking! I'd love to talk about some amazing concepts. Can we chat in DMs?",
                                    "Heya! Your Sonic OC is so impressive! I have some creative thoughts that might interest you. Let's talk!",
                                    "Hey! Your character is so charming! I have some fun ideas that could make them even more special. Can we connect?",
                                    "Heya! Your character is absolutely amazing! I'd love to share some thoughts that could make them even better. Let's chat!",
                                    "Hey! Your OC looks incredible! I have some fresh ideas to make it even more unique. Can we discuss in DMs?",
                                    "Hey! Your character is stunning! I have some creative ideas that would complement their look. Let's connect!",
                                    "Heya! Your OC is so well-designed! I'd love to brainstorm some fun ideas with you. Can we chat in DMs?",
                                    "Hey! Your character caught my attention! I have some interesting thoughts to share. Let's connect!",
                                    "Hey! Your OC is truly impressive! I'd love to exchange ideas. Can we chat?",
                                    "Heya! Your character is so adorable! I have some cool concepts that might interest you. Let's discuss!",
                                    "Hey! Your OC is seriously outstanding! I have some thoughts to make it even more fascinating. Can we talk?",
                                    "Heya! Your character's design is amazing! I'd love to share some creative ideas with you. Let's chat!",
                                    "Hey! Your OC is beyond charming! I have some fantastic ideas in mind. Can we connect?",
                                    "Heya! Your character is so eye-catching! I'd love to discuss some concepts that would make them even better. Can we chat?",
                                    "Hey! Your character looks so awesome! I have some cool ideas I'd love to share. Can we talk in DMs?",
                                    "Hey! Your character has such an amazing vibe! I have some thoughts that might interest you. Let's connect!",
                                    "Heya! Your OC is absolutely amazing! I'd love to brainstorm some creative ideas with you. Can we chat?",
                                    "Hey! Your character stands out so beautifully! I have some unique ideas I'd love to share. Let's talk in DMs!",
                                    "Heya! Your OC is so well-crafted! I'd love to explore some fun ideas together. Can we connect?",
                                    "Hey! Your character is truly marvelous! I have some thoughts that could enhance them even more. Can we chat?",
                                    "Heya! Your Sonic OC is super cool! I have some creative ideas that I'd love to discuss. Let's connect!",
                                    "Hey! Your character has such a stunning design! I'd love to brainstorm some concepts with you. Can we chat?",
                                    "Heya! Your OC is so stylish! I have some ideas that might interest you. Let's discuss in DMs!",
                                    "Hey! Your character is seriously amazing! I'd love to talk about some creative possibilities. Let's connect!",
                                    "Heya! Your OC looks so unique! I'd love to share some concepts that could enhance them even more. Can we talk?",
                                    "Hey! Your character is beyond awesome! I have some fun ideas I'd love to share with you. Let's chat!"
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

export default Follow;