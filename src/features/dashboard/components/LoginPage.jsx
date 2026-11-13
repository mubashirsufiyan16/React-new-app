import './login.scss'
import { Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import Button from '../../../shared/components/ui/Button.jsx'

function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="login-container">
      <Form
        className="login-form"
        onFinish={() => navigate('/dashboard')}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginPage
