module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNC == 'true',
};

// {
//   "type": "postgres",
//   "host": "db",
//   "port": 5432,
//   "username": "postgres",
//   "password": "postgres",
//   "database": "nest_api_1",
//   "entities": ["dist/**/*.entity{.ts,.js}"],
//   "synchronize": true
// }
