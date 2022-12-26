export class UserLoginDetails {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role
}

export class OpenNewAccount {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    // gender: string;
    // address: string;
    // country: string;
    // state: string;
    // city: string;
    // mobile: number;
    // email: string;
    // uploadPan: File;
}


export enum Role {
    User = 'User',
    Admin = 'Admin'
}