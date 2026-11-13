import { useState } from 'react'
import { Col, Row } from 'antd'
import Card from '../../../shared/components/ui/Card.jsx'
import { stats } from '../data/data.js'
import LogOut from '../components/LogOut.jsx'
import Transactions from '../components/Transactions.jsx'
import './DashboardPage.scss'

function DashboardPage() {
  const [balance, setBalance] = useState(stats[0].value)
  const [income, setIncome] = useState(stats[1].value)
  const [expenses, setExpenses] = useState(stats[2].value)

  const currentStats = [
    { ...stats[0], value: balance },
    { ...stats[1], value: income },
    { ...stats[2], value: expenses },
  ]

  function updateStats(amount, type) {
    const balanceChange = type === 'income' ? amount : -amount

    setBalance((previousBalance) => previousBalance + balanceChange)

    if (type === 'income') {
      setIncome((previousIncome) => previousIncome + amount)
    } else {
      setExpenses((previousExpenses) => previousExpenses + amount)
    }
  }

  function handleAddTransaction(transaction) {
    updateStats(transaction.amount, transaction.type)
  }

  function handleDeleteTransaction(transaction) {
    updateStats(-transaction.value, transaction.type)
  }

  return (
    <main className="dashboard">
      <div className="container">
        <header className="header">
          <div className="brand">
            <span className="logo">S</span>
            <span className="brand-name">Expense Tracker</span>
          </div>
          <LogOut />
        </header>

        <section className="intro">
          <p className="eyebrow">YOUR MONTHLY OVERVIEW</p>
          <h1 className="title">Your money, in balance.</h1>
          <p className="description">A quick look at your income and spending this month.</p>
        </section>

        <Row className="stats" gutter={[16, 16]}>
          {currentStats.map((stat) => (
            <Col key={stat.title} xs={24} md={8}>
              <Card className="stat-card">
                <p className="stat-title">{stat.title}</p>
                <p
                  className="stat-value"
                  style={{ color: stat.color || '#1b2b22' }}
                >
                  Rs {stat.value.toLocaleString()}
                </p>
                <p className="stat-note">{stat.note}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <Transactions
          onAddTransaction={handleAddTransaction}
          onDeleteTransaction={handleDeleteTransaction}
        />
      </div>
    </main>
  )
}

export default DashboardPage