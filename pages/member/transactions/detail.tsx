import Sidebar from '../../../components/organisms/sidebar'
import TranscationDetailContent from '../../../components/organisms/transaction-detail-content'

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu='Transactions' />
      <TranscationDetailContent />
    </section>
  )
}
