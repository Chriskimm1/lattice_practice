export interface User {
    id: string;
    internal_id: number;
    email: string;
    name: string;
    password: string;
}

export interface CreateUserInput {
    email: string;
    name: string;
    password: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface UserResponse {
    user: User;
    token: string;
}

export interface Context {
    user?: User;
}