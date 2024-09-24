import { createClient, sql } from '@vercel/postgres';

export async function connectToDb() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log('Connected to database');
      return client;
    }
  } catch (error) {
    console.error('Error connecting to database', error);
  }
}

export async function getPosts() {
  try {
    const data = await sql`SELECT * FROM posts`
    // console.log(data.rows)
    return data.rows;
  } catch (error) {
    console.error('Error getting posts', error);
  }
}

