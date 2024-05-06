import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../Components/ui/button";

const SpeechRecognitionPage: React.FC = () => {
    const [recognizedText, setRecognizedText] = useState('');
    const [chatbotResponse, setChatbotResponse] = useState('');

    const handleSpeechRecognition = () => {
        const recognition = new (window as any).webkitSpeechRecognition();

        recognition.lang = 'en-US';
        recognition.onresult = function (event:any) {
            const transcript = event.results[0][0].transcript;
            console.log('Recognized Text:', transcript);
            setRecognizedText(transcript);
            sendSpeechToChatbot(transcript);
        };

        recognition.start();
    };

    const sendSpeechToChatbot = (text: string) => {
        axios.post('http://localhost:5000/api/chatbot', { prompt: text })
            .then(response => {
                console.log('Chatbot Response:', response.data);
                setChatbotResponse(response.data.response.description2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // return (
    //     <div className="flex flex-col items-center justify-center h-screen">
    //         <h1 className="text-3xl mb-4">Speech Recognition Page</h1>
    //         <button onClick={handleSpeechRecognition} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
    //             Start Speech Recognition
    //         </button>
    //         <div className="mb-4">
    //             <p className="font-bold">Recognized Text:</p>
    //             <p>{recognizedText}</p>
    //         </div>
    //         <div>
    //             <p className="font-bold">Chatbot Response:</p>
    //             <p>{chatbotResponse}</p>
    //         </div>
    //     </div>
    // );
    const navigate = useNavigate();
    const handlePage = () => {
        navigate(-1);
    }
    return (
        <>
            <button onClick={handlePage} className="text-xl bg-red-600 z-[1000] fixed rounded-lg">Back</button>
            <div className="h-screen flex flex-wrap justify-center items-center overflow-y-scroll backdrop-blur-md">
                {/* <div className="flex flex-col items-center justify-center h-screen z-[1000] ">
                    <h1 className="text-3xl mb-4">Speech Recognition Page</h1>
                    <button onClick={handleSpeechRecognition} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                        Start Speech Recognition
                    </button>
                    <div className="mb-4">
                        <p className="font-bold">Recognized Text:</p>
                        <p>{recognizedText}</p>
                    </div>
                    <div>
                        <p className="font-bold">Chatbot Response:</p>
                        <p>{chatbotResponse}</p>
                    </div>
                </div> */}
                <div className="bg-[#f7f7f7] py-8 px-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold mb-6 text-center">Speech Recognition Page</h1>
                        <div className="flex justify-center mb-6">
                            <Button onClick={handleSpeechRecognition} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Start Speech Recognition</Button>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="bg-blue-100 rounded-md p-4">
                                <h2 className="text-lg font-bold mb-2">Recognized Text:</h2>
                                <p>{recognizedText}</p>
                            </div>
                            <div className="bg-red-100 rounded-md p-4">
                                <h2 className="text-lg font-bold mb-2">Chatbot Response:</h2>
                                <p>{chatbotResponse}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
/**

 
 
</>
);
};

export default SpeechRecognitionPage;
