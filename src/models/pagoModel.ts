import { openDb } from '../config/database';

interface Payment {
  email: string;
  cardHolder: string;
  cardNumber: string;
  expMonth: number;
  expYear: number;
  cvv: string;
  amount: number;
  currency: string;
}

export class PaymentModel {
  async addPayment(payment: Payment): Promise<void> {
    const db = await openDb();
    const stmt = await db.prepare(`
      INSERT INTO payments (email, cardHolder, cardNumber, expMonth, expYear, cvv, amount, currency)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    await stmt.run([
      payment.email,
      payment.cardHolder,
      payment.cardNumber,
      payment.expMonth,
      payment.expYear,
      payment.cvv,
      payment.amount,
      payment.currency
    ]);
    await stmt.finalize(); // Finaliza la declaración
  }

  // Método para recuperar pagos (si es necesario en el futuro)
  async getAllPayments(): Promise<Payment[]> {
    const db = await openDb();
    const payments = await db.all('SELECT * FROM payments ORDER BY created_at DESC');
    return payments;
  }
}