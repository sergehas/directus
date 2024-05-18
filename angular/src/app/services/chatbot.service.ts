import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class Message {
  constructor(public author: string, public content: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  audioFile = new Audio(
    "/asset/success.mp3"
  );
  conversation = new Subject<Message[]>();

  constructor() { }



  messageMap: Record<string, string> = {
    "Hi": "Hello",
    "Who are you": "My name is Angular Bot",
    "What is Angular": "Angular is the best framework ever",
    "default": "I can't understand. Can you please repeat"
  };

  getBotAnswer(msg: string) {
    const userMessage = new Message("user", msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message("bot", this.getBotMessage(msg));

    setTimeout(() => {
      this.playFile();
      this.conversation.next([botMessage]);
    }, 1500);
  }

  playFile() {
    this.audioFile.play();
  }

  playAudio() {
    this.playFile();
  }

  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap["default"];
  }
}
