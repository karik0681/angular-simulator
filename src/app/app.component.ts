import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from '../enums/Color';
import { Collection } from '../collection';
import { IBenefit } from '../interfaces/benefit';
import { IDirection } from '../interfaces/direction';
import { IBlogPost } from '../interfaces/blog-post';

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

  directions: IDirection[] = [
    {
      id: 1,
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      price: 480,
      image: 'lake-mountains.jpg',
    },
    {
      id: 2,
      title: 'Ночь в горах',
      subtitle: 'романтическое приключение',
      image: 'night-mountains-stars.jpg',
      price: 500,
    },
    {
      id: 3,
      title: 'Рассвет в горах',
      subtitle: 'романтическое приключение',
      image: 'sunrise-rock.jpg',
      price: 230,
    },
  ];

  blogPosts: IBlogPost[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      image: 'italy-cinque-terre.jpg',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/06/2023',
    },
    {
      id: 2,
      title: 'Долгой сомнения! Весь мир открыт для вас!',
      image: 'ocean-sunset.jpg',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/06/2023',
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку?',
      image: 'street-travel.jpg',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/06/2023',
    },
    {
      id: 4,
      title: 'Индия... летит?',
      image: 'taj-mahal.jpg',
      description: 'Для современного мира базовый.',
      date: '01/06/2023',
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

  private timerId: number = 0;

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
    this.currentDateTime = new Date().toLocaleString('ru-RU');
  }

  private hideLoader(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
