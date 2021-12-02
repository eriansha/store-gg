import OverviewContent from '../../components/organisms/overview-content'
import Sidebar from '../../components/organisms/sidebar'

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu='Overview' />
      <OverviewContent />
    </section>
  )
}
