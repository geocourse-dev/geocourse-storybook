import Social from '../social'

export default function Contact() {
  return (
    <div className=" bg-gradient-to-tl from-[#8E1EA0] via-[#B63ACA] to-[#CF82DC] p-8 rounded-3xl flex justify-between items-center">
      <div className="text-white">
        <h1 className=" text-5xl font-bold">
          Hubungi <br /> Kami
        </h1>
        <br />
        <p className="font-medium text-xl">
          Mau nanya nanya dulu? Boleh banget! <br />
          Yuk ngobrol bareng!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-1/2">
        <Social
          icon="whatsapp"
          link="https://wa.me/6281313131313"
          width={100}
          height={100}
        />
        <Social
          icon="instagram"
          link="https://www.instagram.com/geocourse.id"
          width={100}
          height={100}
        />
        <Social
          icon="twitter"
          link="https://twitter.com/geocourse_id"
          width={100}
          height={100}
        />
        <Social
          icon="linkedin"
          link="https://www.linkedin.com/company/geocourse-id"
          width={100}
          height={100}
        />
        <Social
          icon="facebook"
          link="https://www.facebook.com/geocourse.id"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}
