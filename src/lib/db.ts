import mysql from "mysql2/promise";

/**
 * DB Connection
 * @param sql   query
 * @param values parameter
 * @returns result
 */
export async function exec<T>(sql: string, values?: unknown[]) {
  const conn = await mysql.createConnection(process.env.DB_URL!); // mysql connect
  const [rows] = await conn.execute(sql, values);
  await conn.end();
  return rows as T[];
}
