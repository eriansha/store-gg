import cx from 'classnames'
import Link from 'next/link'
import PropTypes, { InferProps } from 'prop-types'


const propTypes = {
  title  : PropTypes.string.isRequired,
  href   : PropTypes.string.isRequired,
  active : PropTypes.bool
}

const defaultProps = {
  active : true,
  href   : '/'
}

export default function Menu({ title, href, active }: InferProps<typeof Menu.propTypes>) {
  const classTitle = cx({
    'nav-link' : true,
    'active'   : active
  })

  return(
    <li className="nav-item my-auto">
      <Link href={ href }>
        <a
          className={ classTitle }
          aria-current="page"
        >
          { title }
        </a>
      </Link>
    </li>
  )
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps
