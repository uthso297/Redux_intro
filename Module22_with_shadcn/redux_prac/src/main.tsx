import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { RouterProvider } from 'react-router'
import router from './Routes/Root.tsx'
import { ThemeProvider } from './provider/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router}>
          {/* <App /> */}
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
