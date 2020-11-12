module.exports = {
	port: 3600,
	database: {
		database: 'selvy_lawtop_task',
		username: 'root',
		password: 'selvas1234!',
		host: 'localhost',
		port: 3306,
		dialect: 'mariadb',
		timezone: '+09:00',
		charset: 'utf8mb4',
		collate: 'utf8mb4_unicode_ci',
		dialectOptions: {
			connectTimeout: 1000,
			multipleStatements: true,
		},
		sync: {
			force: false,
		},
		logging: false,
	},
	apmServerUrl: 'http://localhost:8200',
	scheduleCron: '0 4 * * *'
};
