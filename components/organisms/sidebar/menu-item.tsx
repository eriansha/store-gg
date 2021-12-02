import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'

interface MenuItemProps {
  title: string,
  logo: string,
  href: string,
  active?: boolean
}

export default function MenuItem({ title, logo, href, active }: Partial<MenuItemProps>) {
  const classItem = cx({
    'item'  : true,
    'mb-30' : true,
    active
  })

  return (
    <div className={ classItem }>
      <div className='me-3'>
        <Image src={ logo } layout='fixed' width={ 25 } height={ 25 } alt='overview' />
      </div>
      <p className="item-title m-0">
        <Link href={ href }>
          <a className="text-lg text-decoration-none">{ title }</a>
        </Link>
      </p>
    </div>
  )
}
