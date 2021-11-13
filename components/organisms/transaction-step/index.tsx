import StepItem from '../../molecules/step-item'

const steps = [
  {
    title        : '1. Start',
    icon         : '/icon/step-1.svg',
    description1 : 'Pilih salah satu game',
    description2 : 'yang ingin kamu top up'
  },
  {
    title        : '2. Fill up',
    icon         : '/icon/step-2.svg',
    description1 : 'Pilih salah satu game',
    description2 : 'yang ingin kamu top up'
  },
  {
    title        : '3. Be a Winner',
    icon         : '/icon/step-3.svg',
    description1 : 'Siap digunakan untuk',
    description2 : 'improve permainan kamu'
  }
]

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {
            steps.map((step) => <StepItem key={ step.icon } { ...step } />)
          }
        </div>
      </div>
    </section>
  )
}
