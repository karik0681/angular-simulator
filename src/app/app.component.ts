import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from '../enums/Color';
import { Collection } from '../collection';
import { IBenefit } from '../interfaces/benefit';

interface IGuide {
  name: string;
  experience: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // ---- Свойства ----
  readonly companyName: string = 'РУМТИБЕТ';

  tourAdvantages: IBenefit[] = [
    {
      id: 1,
      icon: 'icon-guide.svg',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: 'icon-safety.svg',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      icon: 'icon-price.svg',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];

  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';

  currentDateTime: string = '';
  clickCount: number = 0;
  showCounter: boolean = false;
  liveInputText: string = '';
  isLoading: boolean = true;

  private timerId: any;

  // ---- Конструктор ----
  constructor() {
    this.saveLastVisitDate();
    this.saveVisitCount();
    this.startTimer();
    this.hideLoader();

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

  // ---- Методы ----
  get isSearchDisabled(): boolean {
    return !this.selectedLocation || !this.selectedDate || !this.selectedParticipants;
  }

  get isDecrementDisabled(): boolean {
    return this.clickCount === 0;
  }

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.RED, Color.GREEN, Color.BLUE];
    return primaryColors.includes(color);
  }

  incrementCount(): void {
    this.clickCount++;
  }

  decrementCount(): void {
    if (this.clickCount > 0) {
      this.clickCount--;
    }
  }

  toggleWidget(): void {
    this.showCounter = !this.showCounter;
  }

  private saveLastVisitDate(): void {
    const now: string = new Date().toISOString();
    localStorage.setItem('lastVisitDate', now);
  }

  private saveVisitCount(): void {
    const current: string | null = localStorage.getItem('visitCount');
    const count: number = current ? parseInt(current) + 1 : 1;
    localStorage.setItem('visitCount', count.toString());
  }

  private startTimer(): void {
    this.updateDateTime();
    this.timerId = setInterval(() => this.updateDateTime(), 1000);
  }

  private updateDateTime(): void {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.currentDateTime = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  }

  private hideLoader(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
