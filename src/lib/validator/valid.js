export const Validators = {
    email: (value) => {
        const settings = {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            minLength: 5,
            maxLength: 50,
            required: true
        };

        if (!value && settings.required) return false;
        if (value.length < settings.minLength) return false;
        if (value.length > settings.maxLength) return false;
        return settings.pattern.test(value);
    },

    password: (value) => {
        const settings = {
            minLength: 8,
            maxLength: 32,
            requireUppercase: true,
            requireLowercase: true,
            requireNumbers: true,
            requireSpecial: true,
            required: true
        };

        if (!value && settings.required) return false;
        if (value.length < settings.minLength) return false;
        if (value.length > settings.maxLength) return false;
        if (settings.requireUppercase && !/[A-Z]/.test(value)) return false;
        if (settings.requireLowercase && !/[a-z]/.test(value)) return false;
        if (settings.requireNumbers && !/[0-9]/.test(value)) return false;
        if (settings.requireSpecial && !/[!@#$%^&*]/.test(value)) return false;
        return true;
    },

    username: (value) => {
        const settings = {
            minLength: 3,
            maxLength: 20,
            allowSpaces: false,
            allowSpecial: false,
            pattern: /^[a-zA-Z0-9_-]*$/,
            required: true
        };

        if (!value && settings.required) return false;
        if (value.length < settings.minLength) return false;
        if (value.length > settings.maxLength) return false;
        if (!settings.allowSpaces && /\s/.test(value)) return false;
        if (!settings.allowSpecial && !settings.pattern.test(value)) return false;
        return true;
    }
};