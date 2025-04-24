
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const VoiceSearch = () => {
  const [isListening, setIsListening] = useState(false);
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const { toast } = useToast();

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        toast({
          title: "Listening...",
          description: "Try saying: 'From Mumbai to Delhi'",
        });
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        processVoiceCommand(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
        toast({
          title: "Error",
          description: "Could not recognize voice. Please try again.",
          variant: "destructive",
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      toast({
        title: "Not Supported",
        description: "Voice recognition is not supported in your browser.",
        variant: "destructive",
      });
    }
  };

  const processVoiceCommand = (transcript: string) => {
    const fromMatch = transcript.match(/from\s+(\w+)/i);
    const toMatch = transcript.match(/to\s+(\w+)/i);

    if (fromMatch) setFromStation(fromMatch[1]);
    if (toMatch) setToStation(toMatch[1]);

    toast({
      title: "Recognized Command",
      description: `From: ${fromMatch?.[1] || ''}, To: ${toMatch?.[1] || ''}`,
    });
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <Button
        variant="outline"
        size="icon"
        onClick={startListening}
        className={isListening ? "bg-red-100" : ""}
      >
        {isListening ? (
          <MicOff className="h-4 w-4" />
        ) : (
          <Mic className="h-4 w-4" />
        )}
      </Button>
      {(fromStation || toStation) && (
        <span className="text-sm text-gray-600">
          {fromStation && `From: ${fromStation}`} {toStation && `To: ${toStation}`}
        </span>
      )}
    </div>
  );
};

export default VoiceSearch;
