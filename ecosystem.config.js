/** @format */

module.exports = {
  apps: [
    {
      name: "bill",
      script: "npm run start",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      port: 3003,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
