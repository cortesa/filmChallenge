import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Home } from "@/pages/Home"
import { Movie } from "@/pages/Movie"

export const Router = () => {
  const [ hydrated, setHydrated ] = useState(false)
  const queryClient = new QueryClient()

  useEffect(() => { setHydrated(true) }, [])
  if (!hydrated) return (
    <div>Loading...</div>
  )
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/movie/:mId" element={<Movie/>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </QueryClientProvider>
  )
}
