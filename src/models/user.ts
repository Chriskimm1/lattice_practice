import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IUser extends Document {
    id: string;
    internal_id: number;
    email: string;
    name: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    id: { type: String, default: uuidv4, unique: true },
    internal_id: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Auto-increment internal_id before saving
userSchema.pre<IUser>('save', async function (next: (err?: Error) => void) {
    if (this.isNew) {
        const lastUser = await (this.constructor as any).findOne({}, {}, { sort: { internal_id: -1 } });
        this.internal_id = lastUser && lastUser.internal_id ? lastUser.internal_id + 1 : 1;
        if (!this.id) {
            this.id = uuidv4();
        }
    }
    next();
});

export const User = model<IUser>('User', userSchema);