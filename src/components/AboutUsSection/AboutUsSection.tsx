import Image from "next/image"
import { BrandList } from "../BrandList/BrandList"


const AboutUsSection = () => {
    const data = [
        {
            brandName: 'Natura',
            src: '/img/brandList/natura.svg'
        },
        {
            brandName: 'Natura Crer Pra Ver',
            src: '/img/brandList/crerPraVer.svg'
        },
        {
            brandName: 'Ekos',
            src: '/img/brandList/LogoEkos.svg'
        },
        {
            brandName: 'Nativa Spa',
            src: '/img/brandList/nativa.svg'
        },
        {
            brandName: 'O Boticário',
            src: '/img/brandList/oBoticario.svg'
        },
        {
            brandName: 'Cuide Se Bem',
            src: '/img/brandList/cuideSeBem.svg'
        }
    ]
    return (
        <div className="flex flex-col">

            <BrandList data={data} />

            <div id="about" className="flex flex-col lg:flex-row bg-left bg-no-repeat w-full h-full bg-beigeBase px-10 md:px-24 pb-24" style={{ backgroundImage: "url('/img/aboutUs/lapaAboutUs.svg')" }}>
                <div className="relative">
                    <Image
                        className="object-cover"
                        src="/img/aboutUs/tagAboutUs.svg"
                        alt="tag"
                        width={2000}
                        height={700}
                    />
                </div>
                <div className="flex flex-col justify-center gap-10">
                    <h1 className="font-fraunces text-5xl font-semibold text-greenBase">
                        ĐÂY LÀ ĐIỀU KHIẾN CHÚNG TÔI TRỞ THÀNH FAVORITA
                    </h1>
                    <div className="border border-orange-600 w-12"></div>
                    <h1 className="font-fraunces font-semibold text-3xl text-greenBase ">
                        Chúng tôi là ai?
                    </h1>
                    <p className="font-montserrat text-base font-normal text-greenBase text-justify">
                        Giấc mơ carioca của chúng tôi bắt đầu từ niềm đam mê với việc chăm sóc hàng ngày và cam kết với vẻ đẹp xuất phát từ bên trong.
                        Sứ mệnh của chúng tôi không chỉ đơn giản là cung cấp các sản phẩm vệ sinh và làm đẹp; chúng tôi ở đây để thúc đẩy một văn hóa tự chăm sóc bản thân và yêu thương chính mình.
                        Ngoài việc chăm sóc hàng ngày, chúng tôi còn tận tâm kỷ niệm những khoảnh khắc đặc biệt trong cuộc sống. Từ những mùi hương tinh tế đến những món quà quyến rũ cho các dịp đặc biệt, chúng tôi ở đây để giúp mỗi dịp trở nên đáng nhớ hơn.
                        Bởi vì chúng tôi tin rằng tình yêu nên được sẻ chia, không chỉ với chính mình mà còn với những người xung quanh.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <Image
                    src="/img/aboutUs/mosaico-left.svg"
                    alt="tag"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="object-cover"
                />
                <Image
                    src="/img/aboutUs/mosaico-right.svg"
                    alt="tag"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="object-cover"
                />
            </div>
        </div>

    )
}

export default AboutUsSection