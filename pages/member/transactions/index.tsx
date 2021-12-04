import Sidebar from '../../../components/organisms/sidebar'
import TransactionContent from '../../../components/organisms/transaction-content'

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu='Transactions' />
      <TransactionContent />
    </section>
  )
}
