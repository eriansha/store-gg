import cx from 'classnames'

interface ButtonTabProps {
  label: string,
  active?: boolean
}

export default function ButtonTab({ label, active }: ButtonTabProps) {
  const buttonClass = cx({
    'btn'          : true,
    'btn-status'   : true,
    'rounded-pill' : true,
    'text-sm'      : true,
    'me-3'         : true,
    'btn-active'   : active
  })
  return (
    <a
      data-filter="*"
      href="#"
      className={ buttonClass }
    >
      { label }
    </a>
  )
}
