import { LuInstagram, LuMail, LuPhone } from "react-icons/lu"

const ContactSection = () => {
    return (
        <div id="contact" className="flex flex-col md:flex-row h-full">
            <div className="bg-greenBase w-full md:w-2/5 flex flex-col gap-10 pt-24 px-32 bg-left bg-no-repeat bg-cover" style={{ backgroundImage: "url('/img/contacts/lapa.svg')" }}>
                <h1 className="font-fraunces text-xl md:text-5xl font-semibold text-beigeBase leading-snug">CHÚNG TÔI LUÔN CHỜ ĐỢI BẠN!</h1>
                <div className="border border-yellowBase w-12">

                </div>
            </div>
            <div className="bg-beigeBase w-full md:w-3/5 flex flex-col gap-10 py-10 md:py-48 px-10 md:px-24">
                <p className="font-montserrat text-base font-normal text-greenBase text-justify">
                    Carioca Favorita lựa chọn cẩn thận từng sản phẩm để đảm bảo bạn nhận được những gì tốt nhất cho việc chăm sóc làn da.
                    Chúng tôi hợp tác với các thương hiệu nổi tiếng nhất và luôn cập nhật các xu hướng mới nhất để bạn luôn có cơ hội trải nghiệm những sản phẩm hiện đại nhất trên thị trường mỹ phẩm.
                    <br/>Chúng tôi mời bạn theo dõi chúng tôi trên các mạng xã hội để cập nhật những tin tức mới, chương trình khuyến mãi và các bí quyết làm đẹp độc quyền:
                </p>
                <div className="border border-orangeBase w-full"></div>
                <h1 className="font-fraunces font-semibold text-3xl text-greenBase ">
                    Liên hệ với chúng tôi
                </h1>
                <div className="flex flex-row gap-8 items-center">
                    <div className="bg-greenBase p-6 text-2xl text-beigeBase"><LuInstagram /></div>
                    <p className="font-montserrat text-base font-normal text-greenBase ">
                        @ngkhacthinh
                    </p>
                </div>
                <div className="flex flex-row gap-8 items-center">
                    <div className="bg-greenBase p-6 text-2xl text-beigeBase"><LuPhone /></div>
                    <p className="font-montserrat text-base font-normal text-greenBase ">
                        (+84) 911 091 506
                    </p>
                </div>
                <div className="flex flex-row gap-8 items-center">
                    <div className="bg-greenBase p-6 text-2xl text-beigeBase"><LuMail /></div>
                    <p className="font-montserrat text-base font-normal text-greenBase ">
                        ngkhacthinh29@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactSection