<<<<<<< HEAD
const DEV = false;
const DEV_API_URL = "http://localhost";
const LIVE_API_URL = "http://192.168.0.2";

export const API_USERS_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8080";
export const API_NOTIFICATIONS_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8081";
export const API_LOCATION_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8085";
export const API_STATE_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8086";
export const API_DEVICES_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8087";
=======
export const API_USERS_URL = process.env.API_USERS_URL;
export const API_NOTIFICATIONS_URL = process.env.API_NOTIFICATIONS_URL;
export const API_LOCATION_URL = process.env.API_LOCATION_URL;
export const API_STATE_URL = process.env.API_STATE_URL;
export const API_DEVICES_URL = process.env.API_DEVICES_URL;
>>>>>>> docker

//Global Variables
export const USER_COOKIE_IDENTIFIER = process.env.USER_COOKIE_IDENTIFIER;
export const APP_NAME = process.env.APP_NAME;