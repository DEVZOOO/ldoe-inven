import mariadb from "mariadb";

console.log(`DB_URL: ${process.env.DB_URL}`);

const pool = mariadb.createPool({
  host: process.env.DB_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  ssl: false,
  connectTimeout: 10000,
});

/**
 * DB Connection
 * @param sql   query
 * @param values parameter
 * @returns result
 */
export async function exec<T>(sql: string, values?: unknown[]) {
  let conn;

  try {
    conn = await pool.getConnection();
    console.log(`[SQL] ${sql}`);
    const result = await conn.query(sql, values);
    console.log(`[RESULT] ${result.length}개`);
    return result as T[];
  } catch (e) {
    console.error(`## FAIL:: ${e}`);
    throw e;
  } finally {
    conn?.release();
  }
}
