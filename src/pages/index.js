import { Button, Card, Contact, Footer } from '../components'

export default function Home() {
  return (
    <>
      <div className="mx-auto p-5 min-h-screen">
        <h1>test komponen storybook</h1>
        <Button variant="primary">Test </Button>
        <Card
          title="Google Earth Engine untuk Pemula"
          textButton="Lihat Course"
          img="dummy.png"
        />
        <Card
          img="dummy-2.png"
          textButton="Daftar Gratis"
          title="Membuat Visualisasi 3D untuk Topografi Menggunakan Blender"
          onClick={() => console.log('test')}
        />
        <Contact />
      </div>

      <Footer />
    </>
  )
}
