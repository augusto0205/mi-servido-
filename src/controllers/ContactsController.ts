import { Request, Response } from 'express';
import { ContactsModel } from '../models/ContactsModel';
import { validationResult } from 'express-validator';

export class ContactsController {
  private contactsModel: ContactsModel;

  constructor() {
    this.contactsModel = new ContactsModel();
  }

  async add(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const contactData = {
        email: req.body.email,
        name: req.body.name,
        comment: req.body.comment,
        ip_address: req.ip || ''
      };

      await this.contactsModel.addContact(contactData);
      res.redirect('/contact/success');
    } catch (error) {
      res.status(500).json({ error: 'Error saving contact' });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const contacts = await this.contactsModel.getAllContacts();
      res.render('admin/contacts', { contacts });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching contacts' });
    }
  }
}