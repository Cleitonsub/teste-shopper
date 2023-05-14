import { connection } from './createDatabase.js';
import dotenv from 'dotenv';

dotenv.config();

const dropSchema = async () => {
  try {
    const schemaName = process.env.DB_DATABASE;

    await connection.query(`DROP SCHEMA IF EXISTS ${schemaName}`);

    console.log(`Schema ${schemaName} excluído com sucesso`);
  } catch (error) {
    console.error(error);
  }
};

dropSchema();
