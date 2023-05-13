import fs from 'fs';
import { connection } from './createConnectionDB';

export const populateDatabase = async () => {
  try {
    const sql = fs.readFileSync('./path/to/file.sql', 'utf-8');

    await connection.query(sql);
    console.log('Banco de dados populado com sucesso!');
  } catch (err) {
    console.error(err);
  }
}

module.exports = populateDatabase;
