import 'dotenv/config'

import { bool, cleanEnv, num, str } from 'envalid'

export const env = cleanEnv(process.env, {
  TZ: str({ default: 'America/Sao_Paulo' }),
  HOST: str({ default: '0.0.0.0' }),
  PORT: num({ default: 3000 }),
  LOG_LEVEL: str({ default: 'info' }),
  NODE_ENV: str({ default: 'development' }),

  // Database
  DB_CLIENT: str({ default: 'sqlite' }),
  DB_DEBUG: bool({ default: false }),

  // Discord
  DISC_BOT_NAME: str({ default: 'Ｂｏｔ' }),
  DISC_BOT_PROFILE: str({ default: '' }),
  DISC_BOT_THUMBNAIL: str({ default: '' }),
  DISC_BOT_COLOR: str({ default: '0x4f5aa1' }),

  DISC_BOT_ID: str({ default: '' }),
  DISC_BOT_TOKEN: str({ default: '' }),
  DISC_USER_TOKEN: str({ default: '' }),

  DISC_GUILD_ID: str({ default: '' }),
  DISC_CHANNEL_ID: str({ default: '' }),
  DISC_CLIENT_ID: str({ default: '' }),
  DISC_VOICE_ID: str({ default: '' }),
  DISC_LOG_CHANNEL_ID: str({ default: '' }),
  DISC_OWNER_IDS: str({ default: '[]' }),

  DISC_BOT_PREFIX: str({ default: '!' }),

  BOT_STATUS: str({ default: 'online' }),
  BOT_ACTIVITY: str({ default: 'com oce manã..' }),
  BOT_ACTIVITY_TYPE: num({ default: 2 }),

  SEARCH_ENGINE: str({ default: 'ytsearch' }),
  MAX_QUEUE_SIZE: num({ default: 30 }),
  MAX_PLAYLIST_SIZE: num({ default: 50 }),

  // LavaLink
  LAVALINK_URL: str({ default: 'http://localhost:2333' }),
  LAVALINK_AUTH: str({ default: '' }),
  LAVALINK_PORT: num({ default: 2333 }),
  LAVALINK_NAME: str({ default: 'Bot' }),
  LAVALINK_SECURE: bool({ default: false }),
})
