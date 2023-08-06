import { Component } from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent {
  recognition: any;
  spokenText: string = '';
  isListening: boolean = false; // Flag for recognition status

  constructor() {
    this.recognition = new (window as any).webkitSpeechRecognition();
  }

  ngOnInit(): void {
    this.recognition.lang = 'en-US';
    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      this.spokenText = transcript;
    };
  }

  startListening(): void {
    this.isListening = true;
    this.recognition.start();
  }

  stopListening(): void {
    this.isListening = false;
    this.recognition.stop();
  }

}
