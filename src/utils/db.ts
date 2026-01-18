import { Pool } from "pg";

export const postgresQuery = async (
  connectionString: string,
  query: string,
) => {
  const pool = new Pool({
    connectionString,
  });

  try {
    const result = await pool.query(query);
    return {
      isError: false,
      content: result.rows,
    };
  } catch (error) {
    return {
      isError: true,
      error: `${error}`,
    };
  } finally {
    await pool.end();
  }
};

await postgresQuery(
  "postgresql://miusuario:clave_secreta123@localhost:5432/mi_app_db",
  "SELECT NOW()",
);
