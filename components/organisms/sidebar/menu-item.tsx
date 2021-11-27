import Image from 'next/image'
import cx from 'classnames'

interface MenuItemProps {
  title: string,
  logo: string,
  active?: boolean
}

export default function MenuItem({ title, logo, active }: Partial<MenuItemProps>) {
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
        <a href="" className="text-lg text-decoration-none">{ title }</a>
      </p>
    </div>
  )
}
