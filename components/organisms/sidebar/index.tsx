import Profile from './profile'
import Footer from './footer'
import MenuItem from './menu-item'

const MENUES = [
  {
    title : 'Overview',
    logo  : '/icon/menu-overview.svg',
    href  : '/'
  },
  {
    title : 'Transactions',
    logo  : '/icon/menu-overview.svg',
    href  : '/member/transactions'
  },
  {
    title : 'Messages',
    logo  : '/icon/menu-messages.svg',
    href  : '/member'
  },
  {
    title : 'Card',
    logo  : '/icon/menu-card.svg',
    href  : '/member'
  },
  {
    title : 'Rewards',
    logo  : '/icon/menu-rewards.svg',
    href  : '/member'
  },
  {
    title : 'Settings',
    logo  : '/icon/menu-settings.svg',
    href  : '/member/edit-profile'
  },
  {
    title : 'Logout',
    logo  : '/icon/menu-logout.svg',
    href  : '/member/sign-in'
  }
]

interface sideBarProps {
  activeMenu: 'Overview' | 'Transactions' | 'Settings'
}

export default function Sidebar({ activeMenu }: sideBarProps) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {
            MENUES.map((menu) => (
              <MenuItem
                key={ menu.title }
                active={ activeMenu === menu.title }
                title={ menu.title }
                logo={ menu.logo }
                href={ menu.href }
              />
            ))
          }
        </div>
        <Footer />
      </div>
    </section>
  )
}
