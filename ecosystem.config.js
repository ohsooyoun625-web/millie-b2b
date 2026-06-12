module.exports = {
  apps: [
    {
      name: "millie-b2b",
      script: "start-dev.js",
      cwd: "C:\\Users\\User\\WORKSPACE\\millie-b2b",
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      env: {
        NODE_ENV: "development",
        PORT: "3000",
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "C:\\Users\\User\\.pm2\\logs\\millie-b2b-error.log",
      out_file: "C:\\Users\\User\\.pm2\\logs\\millie-b2b-out.log",
    },
  ],
};
