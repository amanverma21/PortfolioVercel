import React from 'react'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './components/Loader/Loader'

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      {isLoading && <Loader onFinish={handleLoaderFinish} />}
      {!isLoading && (
        <>
          <Header />
          <Main />
        </>
      )}
    </>
  )
}

export default App
