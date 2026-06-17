const perfumes = [
  {
    id: 1,
    name: 'Sauvage EDP',
    brand: 'Dior',
    price: 4650000,
    description: 'Dior Sauvage EDP mang đến một phong cách mạnh mẽ, nam tính với nét phương Đông khi kết hợp hương bergamot, tiêu đen và oải hương quyến rũ. Đây là khía cạnh hương thơm có chút khác biệt của sauvage khi có nét đĩnh đạc, trưởng thành hơn phiên bản EDT đầu tiên. Là sự lựa chọn hoàn hảo cho những người đàn ông hiện đại và cuốn hút, phù hợp cho cả ngày thường lẫn những buổi tiệc tùng.',
    image: '/Product/1.png',
    notes: ['Dương Xỉ Phương Đông (Oriental Fougere)']
  },
  {
    id: 2,
    name: 'Bleu De Chanel EDP',
    brand: 'Chanel',
    price: 5050000,
    description: 'Chanel Bleu De Chanel EDP là hương thơm sang trọng, mạnh mẽ và đầy lôi cuốn. Hương chính bao gồm gỗ đàn hương, bưởi và hương nhang, tạo nên sự cân bằng giữa vẻ tươi mát và nồng nàn, ấm áp. Chai nước hoa huyền thoại này phù hợp cho những quý ông hiện đại, lịch lãm, sử dụng trong các dịp đặc biệt, tiệc tùng và mọi dịp hàng ngày khác.',
    image: '/Product/2.png',
    notes: ['Gỗ Thơm Và Thảo Mộc (Woody Aromatic)']
  },
  {
    id: 3,
    name: 'Eros Parfum',
    brand: 'Versace',
    price: 2850000,
    description: 'Versace là một trong những thương hiệu thời trang danh tiếng trên toàn cầu. Thương hiệu được thành lập vào năm 1987 bởi Gianni Versace. Người được coi là “ông hoàng” của ngành công nghiệp thời trang cao cấp tại Italia. Thương hiệu này nổi tiếng với những thiết kế thời trang, phụ kiện, mỹ phẩm và nội thất sang trọng. Versace đã đạt tới đỉnh cao của ngành công nghiệp thời trang với những sáng tạo độc đáo và thiết kế ấn tượng.',
    image: '/Product/3.jpg',
    notes: ['Dương Xỉ Phương Đông (Oriental Fougere)']
  },
  {
    id: 4,
    name: 'Eau d’Ombré Leather EDT',
    brand: 'Tom Ford',
    price: 4500000,
    description: 'Tom Ford Eau d’Ombré Leather là một trong những phiên bản đáng sở hữu của dòng nước hoa da thuộc nổi tiếng nhà TF. Mùi hương da thuộc tinh tế, hòa quyện cùng vani, hổ phách và bạch đậu khấu, mang tới sự ngọt ngào, sang trọng và rất cân bằng. Dễ dàng sử dụng khi thời tiết mát mẻ, cùng độ lưu hương lâu dài sẽ phù hợp cho nhiều sự kiện quan trọng của bạn!',
    image: '/Product/4.png',
    notes: ['Da Thuộc (Leather)']
  },
  {
    id: 5,
    name: 'Acqua Di Gio Pour Homme EDT',
    brand: 'Giorgio Armani',
    price: 2500000,
    description: 'Giorgio Armani Acqua Di Gio Pour Homme For Men EDT mang mùi hương  tươi mát và nam tính, thể hiện cả sự thanh lịch và phóng khoáng với sự kết hợp của cam quýt, hoa nhài và hương biển đầy gió mát. Hương thơm này lý tưởng sử dụng cho môi trường văn phòng, đi làm hoặc đi học. Phù hợp với thời tiết mùa xuân, màu hè ấm áp nóng nực, nhưng cũng có thể sử dụng quanh năm bởi mùi hương dễ chịu và đa dụng.',
    image: '/Product/5.png',
    notes: ['Thảo Mộc Và Biển Cả (Aromatic Aquatic)']
  },
  {
    id: 6,
    name: 'MYSLF Le Parfum EDP',
    brand: 'Yves Saint Laurent',
    price: 4700000,
    description: 'Nước hoa nam YSL MYSLF Le Parfum EDP với phong cách nam tính, tự tin và sang trọng từ hương thơm gỗ phương Đông. Hoa cam, vani và hổ phách kết hợp tạo nên hương thơm đơn giản nhưng tinh tế, phù hợp cho những cuộc hẹn hò thân mật của riêng bạn!',
    image: '/Product/6.png',
    notes: ['Gỗ Phương Đông (Oriental Woody)']
  },
  {
    id: 7,
    name: 'Her Petals Limited Edition',
    brand: 'Burberry',
    price: 3200000,
    description: 'Burberry Her Petals Limited Edition là sự hòa quyện hoàn hảo của hương quả mọng rừng ngọt ngào, hoa violet dịu dàng và hổ phách ấm áp. Chai nước hoa này như một cơn gió xuân, mang lại cảm giác tươi mới, thanh lịch và quyến rũ cho những người phụ nữ yêu sự nữ tính nhưng không kém phần hiện đại.',
    image: '/Product/7.png',
    notes: ['Hoa Cỏ Trái Cây (Floral Fruity)']
  },
  {
    id: 8,
    name: 'Rush EDT',
    brand: 'Gucci',
    price: 1950000,
    description: 'Tên gọi “Rush” mang một ý nghĩa sâu sắc, khơi gợi sự nồng nàn quyến rũ và mê hoặc. Đây như là một ly cocktail độc đáo, nơi mà mỗi hương vị đều hòa quyện và lan tỏa một cách tinh tế và hài hòa. ',
    image: '/Product/8.png',
    notes: ['Trái Cây Chypre (Chypre Fruity)']
  },
  {
    id: 9,
    name: 'Afnan 9PM Night Out Extrait De Parfum',
    brand: 'Afnan Perfumes',
    price: 1600000,
    description: 'Ngọt ấm, cay nhẹ và đầy sức hút, Afnan 9 PM Night Out mở ra bằng trái cây mọng nước pha chút cognac sang trọng, chuyển dần sang da lộn mềm mại và khép lại với lớp tonka gỗ ấm gợi cảm. Đây là mùi hương dành cho những buổi tối cần sự nổi bật và cuốn hút tự nhiên.',
    image: '/Product/9.png',
    notes: ['Cay Nồng Phương Đông (Oriental Spicy)']
  },
  {
    id: 10,
    name: 'Uomo Born in Roma EDT',
    brand: 'Valentino',
    price: 2800000,
    description: 'Valentino Uomo Born in Roma EDT là một tác phẩm nghệ thuật trong thế giới nước hoa. Nước hoa ra mắt vào năm 2019 và nhanh chóng trở thành biểu tượng của sự tinh tế. Với nhóm hương gỗ thơm phương đông, mỗi lần xịt là một lần khám phá những khu rừng cổ tích. Nơi sự ngọt ngào và nam tính hòa quyện không tưởng. Độ lưu hương lâu dài không chỉ làm nên tên tuổi của Valentino mà còn khẳng định phong cách của người đàn ông hiện đại. Một phong cách không bao giờ lỗi mốt. Hãy để Valentino Uomo Born In Roma EDT chứng minh bạn là ai, mỗi ngày.',
    image: '/Product/10.png',
    notes: ['Gỗ Cay Nồng (Woody Spicy)']
  },
  {
    id: 11,
    name: 'Creed Silver Mountain Water EDP',
    brand: 'Creed',
    price: 6600000,
    description: 'Creed Silver Mountain Water EDP có mùi hương  tươi mát và đầy sức sống. Với sự kết hợp của lá trà, hương cam bergamot, chanh và xạ hương, tạo nên cảm giác thuần khiết, trong lành và rất nên thơ. Hương thơm tươi mới này sẽ hợp cho những ngày hè, khi thời tiết ấm áp hoặc các hoạt động ngoài trời hay các dịp trang trọng của bạn.',
    image: '/Product/11.jpg',
    notes: ['Thảo Mộc (Aromatic)']
  },
  {
    id: 12,
    name: 'Roja Serenity Blend EDP',
    brand: 'Roja Dove',
    price: 12400000,
    description: 'Roja Serenity Blend EDP là làn hương của sự tĩnh tại sang trọng, nơi sắc cam chanh trong trẻo hòa cùng trà đen, hoa cỏ thanh tao và nền gỗ xạ hương ấm mịn. Mùi hương gợi cảm giác thư thái như một buổi chiều chậm rãi, tinh tế, sạch sẽ và đầy chiều sâu.',
    image: '/Product/12.png',
    notes: ['Hoa Cỏ Xanh (Floral Green)']
  }
]

export default perfumes
