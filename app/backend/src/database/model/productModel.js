import dotenv from 'dotenv';
import { connection } from '../createDatabase.js';

dotenv.config();

const productModel = {
  fetchAllData: async () => {
    try {
      const sql = `USE ${process.env.DB_DATABASE}; SELECT * FROM products;`;
      const [rows] = await connection.query(sql);
  
      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
    }
  }
};

export default productModel;
