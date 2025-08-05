module.exports = {
  apps: [{
    name: 'ankur-web-ssr',
    script: './dist/ankur-web/server/server.mjs',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 4006
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 4006
    }
  }]
}; 
