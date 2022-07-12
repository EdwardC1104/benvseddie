module.exports = {
    apps: [
        {
            name: 'benvseddie',
            script: 'npm',
            automation: false,
            args: 'run prod',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
