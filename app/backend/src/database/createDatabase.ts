import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 3306,
  multipleStatements: true
});

const createDatabase = async () => {
  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}; USE ${process.env.DB_DATABASE};`);
    console.log('Banco de dados criado com sucesso');
  } catch (error) {
    console.error('Erro ao criar o banco de dados', error);
  } finally {
    connection.end();
  }
};

createDatabase();
