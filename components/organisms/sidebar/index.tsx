import Profile from './profile'
import Footer from './footer'
import MenuItem from './menu-item'

const MENUES = [
  {
    title  : 'Overview',
    logo   : '/icon/menu-overview.svg',
    active : true
  },
  {
    title : 'Transactions',
    logo  : '/icon/menu-overview.svg'
  },
  {
    title : 'Messages',
    logo  : '/icon/menu-messages.svg'
  },
  {
    title : 'Card',
    logo  : '/icon/menu-card.svg'
  },
  {
    title : 'Rewards',
    logo  : '/icon/menu-rewards.svg'
  },
  {
    title : 'Settings',
    logo  : '/icon/menu-settings.svg'
  },
  {
    title : 'Logout',
    logo  : '/icon/menu-logout.svg'
  }
]

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {
            MENUES.map((menu) => (
              <MenuItem
                key={ menu.title }
                active={ menu.active }
                title={ menu.title }
                logo={ menu.logo }
              />
            ))
          }
        </div>
        <Footer />
      </div>
    </section>
  )
}
