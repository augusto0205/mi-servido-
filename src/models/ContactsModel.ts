import { openDb } from '../config/database';

interface Contact {
  email: string;
  name: string;
  comment: string;
  ip_address: string;
}

export class ContactsModel {
  async addContact(contact: Contact): Promise<void> {
    const db = await openDb();
    const stmt = await db.prepare(`
      INSERT INTO contacts (email, name, comment, ip_address)
      VALUES (?, ?, ?, ?)
    `);
    await stmt.run([contact.email, contact.name, contact.comment, contact.ip_address]);
    await stmt.finalize(); // Finaliza la declaración
  }

  async getAllContacts(): Promise<Contact[]> {
    const db = await openDb();
    const contacts = await db.all('SELECT * FROM contacts ORDER BY created_at DESC');
    return contacts;
  }
}