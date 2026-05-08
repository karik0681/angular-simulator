interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  phone?: string;
}

interface IStudent extends IUser {
  course: string;
  grade: number;
}

const uploadStatus: 'loading' | 'success' | 'error' = 'loading';
const textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'capitalize';

function add(a: number, b: number): number {
  return a + b;
}

function stringFormat(text: string, format: typeof textFormat): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1);
    default:
      return text;
  }
}

function removeChar(str: string, char: string): string {
  return str.split(char).join('');
}

const users: IUser[] = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    age: 25,
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Alice',
    surname: 'Johnson',
    age: 28,
    email: 'alice.johnson@example.com',
  },
];

const filteredUsers: IUser[] = users.filter((user: IUser) => user.age > 26);

