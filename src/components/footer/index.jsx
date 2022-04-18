import Social from './social'

export default function Footer() {
  return (
    <footer className="bg-dark w-full px-5 md:px-0 py-10 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-around text-white text-center md:text-left">
      <div className="w-full md:w-3/12 flex flex-col justify-between gap-3">
        <div className="">
          <h1 className="font-bold text-4xl">Geocourse.id</h1>
          <p className="text-center md:text-justify font-medium">
            Merupakan startup yang berfokus dalam pengembangan SDM di bidang
            geospatial 4.0
          </p>
        </div>
        <div className="flex justify-center md:justify-start gap-5 items-end">
          <Social icon="whatsapp" link="https://wa.me/6281313131313" />
          <Social
            icon="instagram"
            link="https://www.instagram.com/geocourse.id"
          />
          <Social icon="twitter" link="https://twitter.com/geocourse_id" />
          <Social
            icon="linkedin"
            link="https://www.linkedin.com/company/geocourse-id"
          />
          <Social
            icon="facebook"
            link="https://www.facebook.com/geocourse.id"
          />
        </div>
      </div>
      <div className="w-full md:w-3/12 flex flex-col justify-between">
        <div className="">
          <h1 className="font-bold">Alamat</h1>
          <p className=" font-light">
            Alamat Jl. Raya Pondok Gede No.37A Kel. Dukuh, Kramat Jati, Jakarta
            Timur
          </p>
        </div>
        <div className="font-light">
          <a href="#">Syarat dan Ketentuan</a> |{' '}
          <a href="#">Kebijakan Privasi</a>
        </div>
      </div>
      <div className="w-full md:w-3/12 ">
        <h1 className="font-bold">Informasi</h1>
        <ul className="font-light flex flex-col gap-3">
          <li>
            <a href="#">Beranda</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Tentang Kami</a>
          </li>
          <li>
            <a href="#">Telusuri</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
