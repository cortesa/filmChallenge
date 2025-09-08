// Libraries imports
import { FC, ReactNode } from 'react'
import { NavigationBar } from './NavigationBar'

// App level imports

type BaseLayoutProps = {
  children: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <section className="pages">{children}</section>
    </>
  )
}

export default Layout