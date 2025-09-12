// Libraries imports
import { FC, JSX, ReactNode } from 'react'

import './layout.scss'
// App level imports

type BaseLayoutProps = {
  title: ReactNode
  children: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ title, children  }) => {
  return (
    <div>
      <section className="main">
        <div className="header">
          <h1>{title}</h1>
        </div>
        <div className="content">
          {children}
        </div>
      </section>
    </div>
  )
}

export default Layout