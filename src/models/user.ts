import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    id: string;
    internal_id: string;
    email: string;
    name: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    internal_id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

export const User = model<IUser>('User', userSchema);