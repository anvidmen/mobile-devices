import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MobileDevices from 'views/MobileDevices/MobileDevices'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<MobileDevices/>} />
      </Routes>
    </Router>
  )
}

export default App;
