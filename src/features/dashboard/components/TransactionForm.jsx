import Button from '../../../shared/components/ui/Button.jsx'

function TransactionForm({ onSave, onCancel }) {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    onSave({
      title: String(formData.get('title')).trim(),
      amount: Number(formData.get('amount')),
      type: String(formData.get('type')),
      category: String(formData.get('category')),
      date: String(formData.get('date')),
    })
  }

  return (
    <form
      className="transaction-form"
      id="transaction-form"
      onSubmit={handleSubmit}
    >
      <h2>Add a transaction</h2>
      <div className="form-fields">
        <label className="form-field">
          Title
          <input name="title" placeholder="e.g. Groceries" required />
        </label>
        <label className="form-field">
          Amount
          <input
            name="amount"
            placeholder="0"
            required
            type="number"
          />
        </label>
        <label className="form-field">
          Type
          <select name="type" required>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>
        <label className="form-field">
          Category
          <select name="category" required>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
            <option value="Salary">Salary</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="form-field">
          Date
          <input name="date" required type="date" />
        </label>
      </div>
      <div className="form-buttons">
        <Button type="submit">
          Save transaction
        </Button>
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default TransactionForm
