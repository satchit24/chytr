// Use require for synchronous import to avoid top-level await error
const config = require('./config.local.json');
export const API_BASE_URL = config.apiBaseUrl;