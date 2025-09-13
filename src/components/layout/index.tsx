// Libraries imports
import { FC, ReactNode } from 'react'

import { WhishList } from '@/components/WishList'

import './layout.scss'

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
          <div><WhishList/></div>
        </div>
        <div className="content">
          {children}
        </div>
      </section>
    </div>
  )
}

export default Layout