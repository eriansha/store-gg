import Category from './category'
import TransactionTable from './transaction-table'

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <Category amount={ 18000500 } icon='/icon/desktop.svg'>
                Game <br/> Desktop
              </Category>
              <Category amount={ 8455000 } icon='/icon/mobile.svg'>
                Game <br/> Mobile
              </Category>
              <Category amount={ 5000000 } icon='/icon/desktop.svg'>
                Other <br/> Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <TransactionTable />
          </div>
        </div>
      </div>
    </main>
  )
}
