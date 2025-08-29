module.exports = {
  apps: [{
    name: 'flashcard-app',
    script: 'npm',
    args: 'start',
    cwd: '/Users/game/Project/flashcard/flashcard-app',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3002
    }
  }]
}