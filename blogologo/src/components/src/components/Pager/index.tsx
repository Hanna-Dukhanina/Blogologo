import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPages } from './getPages'
import styles from './styles.module.scss'

type Props = {
  total: number
  itemPerPage: number
  currentPage: number
}

export const Pager = ({ total, itemPerPage, currentPage }: Props) => {
  const [pages, setPages] = useState<ReturnType<typeof getPages>>([])

  useEffect(() => {
    setPages(getPages(total, itemPerPage, currentPage))
  }, [total, itemPerPage, currentPage])

  return (
    <div className={styles.pager}>
      {
        pages.map((item, i) => (
          item === '..'
            ? (
              <span key={i} className={styles.item}>{item}</span>
            ) : (
              <Link key={i} className={styles.item} to={'/posts/' + item}>{item}</Link>
            )
        ))
      }
    </div>
  )
}
