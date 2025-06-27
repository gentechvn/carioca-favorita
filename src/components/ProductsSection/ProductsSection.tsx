import BenefitsStrip from "../BenefitsStrip/BenefitsStrip"
import { CardCategories } from "../CardCategories/CardCategories";

export const ProductsSection = () => {
  const data = [
    {
      src: "/img/products/cardImage1.jpg",
      title: "Kem dưỡng ẩm & Sữa dưỡng thể",
      description: "giúp làn da được dưỡng ẩm, nuôi dưỡng và bảo vệ, mang lại vẻ ngoài khỏe mạnh và rạng rỡ."
    },
    {
      src: "/img/products/cardImage2.jpg",
      title: "Nước hoa",
      description: "kết hợp các tầng hương đầu, giữa và cuối, mang đến trải nghiệm mùi hương thay đổi suốt cả ngày, đem lại sự tươi mới và tinh tế."
    },
    {
      src: "/img/products/cardImage3.jpg",
      title: "Xà phòng & Tinh dầu thơm",
      description: "loại bỏ bụi bẩn và giữ cho làn da sạch sẽ. Được pha chế với các thành phần dưỡng chất, giúp da mềm mại và lưu hương dịu nhẹ."
    },
    {
      src: "/img/products/cardImage4.jpg",
      title: "Chăm sóc da",
      description: "bao gồm làm sạch, dưỡng ẩm, giúp duy trì làn da khỏe mạnh và rạng rỡ, hỗ trợ phục hồi và mang lại vẻ ngoài tươi sáng, tràn đầy sức sống."
    }
  ]
  return (
    <div id="categories" className="flex flex-col items-center h-full py-12 bg-beigeBase">
      <h1 className="font-fraunces text-xl md:text-5xl font-semibold text-greenBase text-center leading-tight px-6">
        NHỮNG HÀNH ĐỘNG CHĂM SÓC NHỎ, <br />TẠO NÊN SỰ THAY ĐỔI LỚN, CHỈ CÓ TẠI CHÚNG TÔI
      </h1>
      <p className="font-montserrat text-base md:text-lg font-light text-greenBase text-center py-7 px-6">
        Khám phá dòng sản phẩm độc quyền của chúng tôi, được tuyển chọn kỹ lưỡng để đáp ứng nhu cầu của bạn và mang lại trải nghiệm chăm sóc, làm đẹp tốt nhất.
      </p>
      <BenefitsStrip words={['dưỡng ẩm sâu', 'thanh lọc', 'nuôi dưỡng làn da', 'trẻ hóa', 'phục hồi sức sống']}></BenefitsStrip>
      <div className="flex flex-row items-start justify-center w-full mt-10 flex-wrap gap-8">

        {data.map((item, index) => (
          <CardCategories key={index} src={item.src} title={item.title} description={item.description} />
        ))}

      </div>
    </div>
  );
}