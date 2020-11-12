module.exports = {
	apps : [{
			name: 'track-batch',
			script: './bin/www',
			log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS',
			env: {
				NODE_PORT: 3600,
				DATABASE_HOST: 'localhost',
				DATABASE_PORT: 3306,
				DATABASE_USERNAME: 'root',
				DATABASE_PASSWORD: 'selvas1234!',
				APM_SERVER_URL: 'http://localhost:8200',
				SCHEDULE_CRON: '*/1 * * * *',
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_PORT: 3600,
				DATABASE_HOST: 'localhost',
				DATABASE_PORT: 3306,
				DATABASE_USERNAME: 'root',
				DATABASE_PASSWORD: 'selvas1234!',
				APM_SERVER_URL: 'http://localhost:8200',
				SCHEDULE_CRON: '*/1 * * * *',
				NODE_ENV: 'production'
			}
	}]
};
