import { useNavigate } from 'react-router-dom'
import Button from '../../../shared/components/ui/Button.jsx'

function LogOut() {
  const navigate = useNavigate()

  function handleLogOut() {
    navigate('/')
  }

  return (
    <Button onClick={handleLogOut} variant="primary">
      Logout
    </Button>
  )
}

export default LogOut
