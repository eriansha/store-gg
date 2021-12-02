import EditProfileForm from '../../components/organisms/edit-profile-form'
import Sidebar from '../../components/organisms/sidebar'

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu='Settings' />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <EditProfileForm />
          </div>
        </div>
      </main>
    </section>
  )
}
