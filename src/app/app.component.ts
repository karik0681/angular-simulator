import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from '../collection';
import './training';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly companyName: string = 'РУМТИБЕТ';

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.Red, Color.Green, Color.Blue];
    return primaryColors.includes(color);
  }

  saveLastVisitDate(): void {
    const now = new Date().toISOString();
    localStorage.setItem('lastVisitDate', now);
  }

  saveVisitCount(): void {
    const current = localStorage.getItem('visitCount');
    const count = current ? parseInt(current) + 1 : 1;
    localStorage.setItem('visitCount', count.toString());
  }

  constructor() {
    this.saveLastVisitDate();
    this.saveVisitCount();
    console.log(this.isPrimaryColor(Color.Red));
    console.log(this.isPrimaryColor(Color.Yellow));

    const toursCollection = new Collection<string>([
      'Поход на Эльбрус',
      'Алтайский маршрут',
      'Кавказские горы',
    ]);
    console.log('Все походы:', toursCollection.getAll());
    console.log('Первый поход:', toursCollection.getByIndex(0));
    toursCollection.removeByIndex(1);
    console.log('После удаления:', toursCollection.getAll());

    const guidesCollection = new Collection<{ name: string; experience: number }>([
      { name: 'Алексей', experience: 5 },
      { name: 'Мария', experience: 3 },
    ]);
    console.log('Все гиды:', guidesCollection.getAll());
    guidesCollection.replaceByIndex(0, { name: 'Дмитрий', experience: 7 });
    console.log('После замены:', guidesCollection.getAll());
  }
}
