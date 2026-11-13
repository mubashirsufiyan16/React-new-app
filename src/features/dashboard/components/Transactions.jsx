import { useState } from 'react'
import Card from '../../../shared/components/ui/Card.jsx'
import Button from '../../../shared/components/ui/Button.jsx'
import { transactions } from '../data/data.js'
import TransactionForm from './TransactionForm.jsx'
import './Transactions.scss'

function Transactions({ onAddTransaction, onDeleteTransaction }) {
  const [showForm, setShowForm] = useState(false)
  const [transactionList, setTransactionList] = useState(transactions)

  function toggleForm() {
    setShowForm(!showForm)
  }

  function closeForm() {
    setShowForm(false)
  }

  function handleSave(formData) {
    let amountSign = '-'

    if (formData.type === 'income') {
      amountSign = '+'
    }

    const formattedAmount = formData.amount.toLocaleString()
    const newTransaction = {
      id: Date.now(),
      title: formData.title,
      detail: `${formData.date} · ${formData.category}`,
      amount: `${amountSign} Rs ${formattedAmount}`,
      value: formData.amount,
      type: formData.type,
    }
    console.log('New Transaction:', newTransaction.id)
    setTransactionList([newTransaction, ...transactionList])
    onAddTransaction(formData)
    setShowForm(false)
  }

  function handleDelete(transaction) {
    const remainingTransactions = transactionList.filter(
      (item) => item.id !== transaction.id,
    )

    setTransactionList(remainingTransactions)
    onDeleteTransaction(transaction)
  }

  return (
    <section className="transactions">
      <div className="transactions-header">
        <Button
          aria-controls="transaction-form"
          aria-expanded={showForm}
          onClick={toggleForm}
        >
          {showForm ? 'Close form' : 'Add transaction'}
        </Button>
      </div>

      {showForm && (
        <TransactionForm
          onCancel={closeForm}
          onSave={handleSave}
        />
      )}

      <Card
        className="activity-card"
        title="Recent activity"
        extra={<span>Sample data</span>}
      >
        {transactionList.map((transaction) => (
          <div className="activity-row" key={transaction.id}>
            <div className="activity-details">
              <strong>{transaction.title}</strong>
              <span className="activity-meta">{transaction.detail}</span>
            </div>
            <div className="activity-actions">
              <strong className={`amount ${transaction.type}`}>
                {transaction.amount}
              </strong>
              <Button
                aria-label={`Delete ${transaction.title}`}
                onClick={() => handleDelete(transaction)}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </section>
  )
}

export default Transactions
