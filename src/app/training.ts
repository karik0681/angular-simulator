// ============ ИНТЕРФЕЙСЫ ============

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

// ============ ПЕРЕМЕННЫЕ ============

const uploadStatus: 'loading' | 'success' | 'error' = 'loading';
const textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'capitalize';

// ============ ФУНКЦИИ ============

function add(a: number, b: number): number {
    return a + b;
}

function stringFormat(text: string, format: typeof textFormat): string {
    if (format === 'uppercase') {
        return text.toUpperCase();
    }
    if (format === 'lowercase') {
        return text.toLowerCase();
    }
    if (format === 'capitalize') {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
}

function removeChar(str: string, char: string): string {
    return str.split(char).join('');
}

// ============ ДАННЫЕ ============

const users: IUser[] = [
    { id: 1, name: 'John', surname: 'Doe', age: 30, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane', surname: 'Smith', age: 25, email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice', surname: 'Johnson', age: 28, email: 'alice.johnson@example.com' },
];

const filteredUsers = users.filter(user => user.age > 26);