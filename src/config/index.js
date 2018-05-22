const DEV = false;
const DEV_API_URL = "http://localhost";
const LIVE_API_URL = "http://192.168.0.2";

export const API_USERS_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8080";
export const API_NOTIFICATIONS_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8081";
export const API_LOCATION_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8085";
export const API_STATE_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8086";
export const API_DEVICES_URL = (DEV ? DEV_API_URL : LIVE_API_URL) + ":8087";

//Global Variables
export const USER_COOKIE_IDENTIFIER = "cybersmart:state";
export const APP_NAME = "CyberSmart";