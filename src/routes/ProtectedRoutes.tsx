import { ComponentLoading } from '../components/index'
import { useAuth } from '../hooks/authHook'
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const { loadUserStorageData } = useAuth()

  useEffect(() => {
    async function fetchData() {
      const verifyAuth = await loadUserStorageData()
      setIsAuth(verifyAuth)
      setIsLoading(false)
    }
    fetchData()
  }, [loadUserStorageData])

  if (isLoading) {
    return <ComponentLoading />
  }

  return (
    <>
      {isAuth ? (
        <Outlet />
      ) : (
        <Navigate to='/login' replace={true} />
      )}
    </>
  )
}