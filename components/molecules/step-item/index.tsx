import Image from 'next/image'

interface StepItemProps {
  title: string,
  icon: string,
  description1: string
  description2: string
}

export default function StepItem({ title, icon, description1, description2 }: StepItemProps) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <div className='mb-4'>
          <Image layout='fixed' src={ icon } alt='Step 1' width={ 80 } height={ 80 } />
        </div>
        <p className="fw-semibold text-2xl mb-2 color-palette-1">
          { title }
        </p>
        <p className="text-lg color-palette-1 mb-0">
          { description1 }
          <br />
          { description2 }
        </p>
      </div>
    </div>
  )
}
