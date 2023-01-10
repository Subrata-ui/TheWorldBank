export class UserLoginDetails {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    role: Role;
    balance: number;
}

export class OpenNewAccount {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    mobNum: number;
    email: string;
    address: string;
    country: string;
    state: string;
    city: string;
    pinNumber: number;
    imageInput: File;
}


export enum Role {
    User = 'User',
    Admin = 'Admin'
}