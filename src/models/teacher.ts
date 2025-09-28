import client from "../database";

export type TeacherType = {
  id?: number;
  name: string;
  subject: string;
  hire_date?: Date;
};

export class TeacherStore {
    async index(): Promise<TeacherType[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM teachers';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get teachers. Error: ${err}`);
        }
    }
};