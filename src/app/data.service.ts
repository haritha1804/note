import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private data: string[] = [];
  private title:String[]= [];

  getData(): string[] {
    return this.data;
  }
  getTitle():String[]{
    return this.title;
  }

  addData(item: string): void {
    this.data.push(item);
  }
  addTitle(item: string): void {
    this.title.push(item);
  }
}
