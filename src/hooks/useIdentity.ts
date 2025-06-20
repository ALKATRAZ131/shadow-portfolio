import { useState, useEffect } from "react";

export type UserInfo = {
    name: string;
    title: string;
    bio: string;
    email: string;
    location: string;
};

export function useIdentity() {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = {
                    "name": "MD Amirul Islam",
                    "title": "Full Stack Developer",
                    "bio": "Passionate about building modern web applications.",
                    "email": "your.email@example.com",
                    "location": "Your City, Country"
                };
                setUser(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, []);

    return { user, loading, error };
}
