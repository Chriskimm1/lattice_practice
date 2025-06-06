import { v4 as uuidv4 } from 'uuid';
import { sign, verify } from 'jsonwebtoken';

const SESSION_SECRET = process.env.SESSION_SECRET || 'your_secret_key';
const SESSION_EXPIRATION = '1h';

export interface Session {
    id: string;
    userId: string;
    createdAt: Date;
    expiresAt: Date;
}

export function createSession(userId: string): Session {
    const sessionId = uuidv4();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour

    return {
        id: sessionId,
        userId,
        createdAt: now,
        expiresAt,
    };
}

export function generateToken(session: Session): string {
    return sign({ sessionId: session.id, userId: session.userId }, SESSION_SECRET, {
        expiresIn: SESSION_EXPIRATION,
    });
}

export function validateToken(token: string): Session | null {
    try {
        const decoded = verify(token, SESSION_SECRET) as { sessionId: string; userId: string };
        return { id: decoded.sessionId, userId: decoded.userId, createdAt: new Date(), expiresAt: new Date() };
    } catch (error) {
        return null;
    }
}

export function destroySession(sessionId: string): void {
    // Logic to destroy the session (e.g., remove from database or in-memory store)
}