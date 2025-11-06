
import React, { useState, useRef, useEffect } from 'react';
import { getPetBotResponse, getTextToSpeech, audioContext } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        if(isOpen && messages.length === 0) {
            setMessages([{ sender: 'bot', text: "Hi there! I'm PetBot 🐶. Ask me anything about pet care or our adoption process!" }]);
        }
    }, [isOpen, messages.length]);

    const playAudio = (audioBuffer: AudioBuffer) => {
        try {
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            source.start();
        } catch (error) {
            console.error("Error playing audio:", error);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const botResponseText = await getPetBotResponse(input);
            const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
            setMessages(prev => [...prev, botMessage]);

            const audioBuffer = await getTextToSpeech(botResponseText);
            if (audioBuffer) {
                playAudio(audioBuffer);
            }
        } catch (error) {
            console.error("Chatbot error:", error);
            const errorMessage: ChatMessage = { sender: 'bot', text: "Oops! Something went wrong." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chatbot Trigger */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/50 backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 focus:outline-none"
                aria-label="Open PetBot Chat"
            >
                <div className="w-12 h-12 text-4xl transform -rotate-12 animate-bounce">🍾</div>
            </button>

            {/* Chat Window */}
            <div className={`fixed bottom-24 right-6 z-50 w-full max-w-sm h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-teal text-white rounded-t-lg">
                    <h3 className="text-lg font-bold">Ask PetBot 🐕</h3>
                    <button onClick={() => setIsOpen(false)} className="hover:opacity-75">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-soft-orange flex items-center justify-center flex-shrink-0">🐾</div>}
                                <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.sender === 'user' ? 'bg-soft-orange text-gray-800 rounded-br-none' : 'bg-pastel-green text-gray-800 rounded-bl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-end gap-2 justify-start">
                                <div className="w-8 h-8 rounded-full bg-soft-orange flex items-center justify-center flex-shrink-0">🐾</div>
                                <div className="px-4 py-2 rounded-2xl bg-pastel-green text-gray-800 rounded-bl-none">
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-0"></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="p-4 border-t">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="flex-1 px-3 py-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-teal"
                            disabled={isLoading}
                        />
                        <button type="submit" className="bg-teal text-white rounded-full p-2 hover:bg-dark-teal transition-colors disabled:bg-gray-400" disabled={isLoading || !input.trim()}>
                            <svg className="w-6 h-6 transform rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Chatbot;