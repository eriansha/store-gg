import cx from 'classnames'

interface RowProps {
  label: string,
  value: string | number,
  isSummary?: boolean
}

export default function Row({ label, value, isSummary }: Partial<RowProps>) {
  const spanClass = cx({
    'purchase-details' : true,
    'color-palette-4'  : isSummary
  })
  return (
    <p className="text-lg color-palette-1 mb-20">
      { label }
      <span className={ spanClass }>
        { value }
      </span>
    </p>
  )
}
