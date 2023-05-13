import { connection } from './createConnectionDB';
import dotenv from 'dotenv';

dotenv.config();

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

module.exports = createDatabase;
