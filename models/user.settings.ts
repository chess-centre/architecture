/**
 * User Settings
 * @route /user/settings
 * @description application settings stored for the user i.e theme, notifications, email subcriptions
 */
interface UserSettings {
    theme: "light"  | "dark",
    notifications: {
        email: boolean,
        text: boolean
    }
}