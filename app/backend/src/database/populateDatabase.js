import fs from 'fs';
import { connection, createDatabase } from './createDatabase.js';

const populateDatabase = async () => {
  try {
    const sql = fs.readFileSync('./db_shopper.sql', 'utf-8');

    await connection.query(sql);
    console.log('Banco de dados populado com sucesso!');
  } catch (err) {
    console.error(err.sqlMessage);
  }
}

createDatabase();

populateDatabase();
