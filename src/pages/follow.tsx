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
                                // Your actual list items with animation class
                                [
                                    "Love your character! It's so captivating! I've been thinking about some ideas that I think you'd really appreciate, and I'd love to share them with you. Would you be open to connecting and discussing them further? Maybe we could start a conversation in DMs or follow each other?",
                                    "Your character is pure magic! I'm obsessed! I've been brainstorming some ideas that I think would complement your character perfectly, and I'd love to bounce them off you. Want to connect and see if we can create something amazing together? Follow me back or slide into my DMs?",
                                    "I'm absolutely fascinated by your character! The attention to detail is impressive. I've been thinking about some ideas that might be of interest to you, and I'd be honored to share them. Would it be possible to connect and discuss them further? Perhaps a follow-back or DM?",
                                    "OMG, your character is AMAZING! I'm beyond inspired! I've got a ton of ideas swirling around in my head, and I'd love to share them with you. Can we connect and geek out over our shared passion? DM me or follow me back, and let's get this creative party started!",
                                    "Warning: your character has stolen my heart! Want to join forces and create something incredible? I've got ideas pouring out of my brain, and I'd love to share them with you. DM me or follow me back, and let's make some magic happen!",
                                    "I'm genuinely inspired by your character! It's clear that you've put your heart and soul into it. I've been thinking about some ideas that I think you'd really appreciate, and I'd love to share them with you. Can we connect and discuss them further? Maybe we could start a conversation in DMs?",
                                    "Ready to embark on a creative quest? Your character has sparked some incredible ideas! I'd love to connect and explore them further with you. Follow me back or DM me, and let's set off on this adventure together!",
                                    "Your character has really made me think! I've been pondering some ideas that I think you'd find interesting, and I'd love to share them with you. Can we connect and discuss them further? Maybe we could start a conversation in DMs?",
                                    "In a world of wonder, your character shines bright! I'm enchanted by your creativity! I've been thinking about some ideas that I think would complement your character perfectly, and I'd love to share them with you. Want to connect and see if we can create something magical together? DM me or follow me back?",
                                    "Your character is a masterpiece! I've got ideas that will take it to the next level! I'd love to connect and discuss them with you. Follow me back or DM me, and let's create something epic together!",
                                    "Your character is absolutely mesmerizing! I've been brewing up some ideas that I think would resonate perfectly with your style. Care to connect? Follow back or slide into my DMs!",
                                    "Wow, your character radiates creativity and charm! I have a few ideas that might add another layer of magic to it. Let's collaborate—follow back or DM me!",
                                    "I'm so inspired by your character's depth and vibe! I've been thinking about creative ways to elevate it. Mind connecting? Follow me or DM back!",
                                    "Your character truly captivates! I've got some innovative ideas swirling in my head that could complement it beautifully. Let's chat—follow back or hit my DMs!",
                                    "I can't get enough of your character! It's brimming with potential, and I have a couple of ideas that might spark something special. Care to connect? Follow or DM me!",
                                    "Your creative character has me hooked! I've got exciting concepts that could enhance its story. Would love to connect—follow back or drop me a DM!",
                                    "Absolutely enchanted by your character! It has so much personality. I've been brainstorming ideas to make it even more amazing. Let's connect—DM or follow back!",
                                    "Your character is a work of art! I've got some cool ideas to complement its style, and I'd love to share them with you. Follow back or DM me if you're up for it!",
                                    "In awe of your character's brilliance! I have a few creative sparks I'd like to share that might amplify its magic. How about a follow back or DM?",
                                    "Your character is pure inspiration! I've been brainstorming ideas that could blend well with its vibe. Let's collaborate—follow back or send me a DM!",
                                    "I absolutely love your character's energy! I have some ideas that I think will mesh perfectly with its personality. Mind connecting? Follow back or DM me!",
                                    "Your character has such a magnetic allure! I've got creative thoughts that could enhance its charm. Would love to chat—follow back or DM when you can!",
                                    "Your character is nothing short of amazing! I've been cooking up some ideas to match its vibe. Let's team up—follow me or slide into my DMs!",
                                    "I'm totally inspired by your character! It's captivating and full of life. I have a couple of ideas I'd love to share. How about a follow back or DM?",
                                    "Your character sparks creativity in me! I've got a few exciting ideas to discuss that might boost its impact. Let's connect—follow back or DM me!",
                                    "Completely captivated by your character's charm! I've been brainstorming ideas that could make it even more compelling. Mind connecting? Follow or DM!",
                                    "Your character is a masterpiece! I have some creative ideas that might perfectly complement its style. Let's chat—follow back or DM me!",
                                    "Wow, your character is bursting with creativity! I've got some ideas that could add even more sparkle. Would you be open to connecting? Follow or DM!",
                                    "Your character truly stands out! I've been thinking of ways to build on its brilliance with fresh ideas. Connect with me—follow back or send a DM!",
                                    "Your character is a creative gem! I've got ideas that might bring out even more of its magic. Let's collaborate—follow back or DM me!",
                                    "I'm enchanted by your character's creativity! I have some innovative ideas I'd love to share. Interested in connecting? Follow back or DM me anytime!",
                                    "Your character is absolutely stellar! I have a few creative concepts that could elevate it further. Would love to discuss—follow back or hit me up in DMs!",
                                    "Your character has a captivating aura! I've been working on ideas that might enhance its appeal. Let's connect—follow back or slide into my DMs!",
                                    "Totally blown away by your character! I have some creative ideas that could be a perfect match. How about connecting? Follow back or drop a DM!",
                                    "Your character radiates pure magic! I've got a few ideas that I believe would add an extra spark. Let's talk—follow me or DM anytime!",
                                    "Your character is pure brilliance! I've been brainstorming ideas that might resonate with its vibe. Would love to collaborate—follow back or DM me!",
                                    "I'm fascinated by your character's detail and charm! I have creative thoughts that could further elevate it. Let's connect—follow back or DM!",
                                    "Your character truly inspires! I've got some innovative ideas swirling in my mind that might complement it perfectly. Mind connecting? Follow back or DM!",
                                    "Wow, your character is a burst of creativity! I have ideas that might add another dimension to its story. Let's chat—follow back or send me a DM!",
                                    "Your character is a true work of art! I've been thinking of creative angles to showcase its beauty even more. Interested in connecting? Follow or DM!",
                                    "I'm absolutely in awe of your character! It's so unique, and I have a few ideas that might enhance its magic. Connect with me—follow back or DM!",
                                    "Your character's creativity is infectious! I've got ideas I'd love to share that could make it shine even brighter. Let's team up—follow or DM!",
                                    "Your character stands out in every way! I have a couple of creative concepts that might fit perfectly with its vibe. Care to connect? Follow back or DM!",
                                    "Your character is simply captivating! I have exciting ideas that could amplify its charm. Let's connect and collaborate—follow back or DM me!",
                                    "I'm totally inspired by your character's allure! I'd love to share some ideas that might add a new layer to its magic. Let's connect—follow or DM!",
                                    "Your character truly speaks volumes of creativity! I have thoughts that might elevate its brilliance even further. How about connecting? Follow back or DM!",
                                    "Your character is a brilliant creation! I've been mulling over ideas that could complement its style beautifully. Interested in connecting? Follow or DM!",
                                    "In absolute awe of your character! I've got creative ideas that I believe would pair perfectly with its vibe. Let's chat—follow back or DM me!",
                                    "Your character's energy is mesmerizing! I've got a few ideas that might further illuminate its story. Let's connect—follow back or send a DM!",
                                    "Your character is a beacon of creativity! I have ideas that could accentuate its charm even more. Would love to collaborate—follow back or DM!",
                                    "I'm so impressed by your character! Its depth inspires me to think creatively, and I have ideas I'd love to share. Let's connect—follow or DM!",
                                    "Your character radiates such a unique vibe! I have creative ideas that might just add the perfect touch. Let's chat—follow back or DM!",
                                    "Your character is pure inspiration! I've been crafting ideas that I think would enhance its magic. Would you like to connect? Follow or DM me!",
                                    "Completely taken by your character's beauty and detail! I have creative ideas to share—let's collaborate. Follow back or send me a DM!",
                                    "Your character has stolen my creative heart! I have a few ideas that might make it shine even brighter. How about connecting? Follow or DM!",
                                    "I'm utterly captivated by your character! I've been brainstorming ideas that could add another layer of brilliance. Let's connect—follow or DM!",
                                    "Your character is a masterpiece of creativity! I'd love to share ideas to enhance its charm. Interested in connecting? Follow back or DM me!",
                                    "Your character ignites my creative spark! I have thoughts that could complement it perfectly. Let's collaborate—follow or DM anytime!",
                                    "Your character is wonderfully inspiring! I have a few ideas that might bring out even more of its magic. Care to connect? Follow back or DM!",
                                    "Totally inspired by your character's flair! I've got creative ideas brewing that could be a perfect match. Let's chat—follow or DM me!",
                                    "Your character is a canvas of creativity! I'd love to share ideas that might add even more color to it. Let's connect—follow back or DM!",
                                    "Absolutely smitten by your character! I have creative concepts that I think would be a great fit. How about connecting? Follow or DM!",
                                    "Your character is so enchanting! I have a few innovative ideas to discuss that could enhance its magic. Interested in connecting? Follow back or DM!",
                                    "Your character is an endless source of inspiration! I've been working on ideas that might blend seamlessly with its vibe. Let's connect—follow or DM!",
                                    "In awe of your character's uniqueness! I have ideas that could further its brilliance. Let's connect and collaborate—follow back or DM me!",
                                    "Your character truly tells a story! I have creative ideas that might add another exciting chapter. Let's chat—follow back or DM!",
                                    "Your character exudes charm and creativity! I'd love to share ideas that could elevate its allure. Connect with me—follow back or DM!",
                                    "Absolutely inspired by your character! I've been brainstorming ideas that might just be the perfect complement. Let's connect—follow or DM!",
                                    "Your character is a burst of creative energy! I have innovative ideas I'd love to bounce off you. Interested in connecting? Follow or DM!",
                                    "Your character's vibe is pure magic! I've got a few creative sparks I'd love to share with you. Let's collaborate—follow back or send me a DM!"
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