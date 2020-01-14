import { Component } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myWordList: string;
  wordList: Array<string>;

  constructor(private httpClient: HttpClient) {}

  lookup(event) {
    const word = event.target.value;
    return this.httpClient.get<Array<string>>(`https://anagram.aryehbeitz.net/anagrams?word=${word}`).subscribe(result => {
        this.wordList = result;
        this.myWordList = this.wordList.join(', ');
    });
  }
}
