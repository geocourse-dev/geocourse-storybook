import { Button, Card, CardBlog, Contact, Footer } from '../components'

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
        <div className="w-8/12 mt-2 flex flex-col gap-5">
          <CardBlog
            image="blog.png"
            size="small"
            title="Belajar Geospasial"
            description="Geospasial atau ruang kebumian adalah aspek keruangan yang
            menunjukkan lokasi, letak, dan posisi."
            date="Nov 21, 2021"
            author="Admin"
          />
          <CardBlog
            image="blog-2.png"
            size="large"
            title="Belajar Geospasial"
            description="Geospasial atau ruang kebumian adalah aspek keruangan yang
            menunjukkan lokasi, letak, dan posisi."
            date="Nov 21, 2021"
            author="Admin"
          />
        </div>
      </div>

      <Footer />
    </>
  )
}
