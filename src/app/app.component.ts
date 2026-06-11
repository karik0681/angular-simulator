import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from '../collection';

interface IGuide {
  name: string;
  experience: number;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly companyName: string = 'РУМТИБЕТ';

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.RED, Color.GREEN, Color.BLUE];
    return primaryColors.includes(color);
  }

  saveLastVisitDate(): void {
    const now: string = new Date().toISOString();
    localStorage.setItem('lastVisitDate', now);
  }

  saveVisitCount(): void {
    const current: string | null = localStorage.getItem('visitCount');
    const count: number = current ? parseInt(current) + 1 : 1;
    localStorage.setItem('visitCount', count.toString());
  }

  constructor() {
    this.saveLastVisitDate();
    this.saveVisitCount();

    const toursCollection: Collection<string> = new Collection<string>([
      'Поход на Эльбрус',
      'Алтайский маршрут',
      'Кавказские горы',
    ]);

    const guidesCollection: Collection<IGuide> = new Collection<IGuide>([
      { name: 'Алексей', experience: 5 },
      { name: 'Мария', experience: 3 },
    ]);
  }
}
