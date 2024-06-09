import React from "react";

import { GiReturnArrow, GiDeliveryDrone, GiPayMoney } from "react-icons/gi";


export const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Products", url: "/products" },
  { id: 3, text: "About", url: "/about" },
];

export const services = [
  {
    id: 1,
    name: "Vận Chuyển",
    text: "Đơn hàng của bạn sẽ được giao trong vòng 7-12 ngày làm việc sau khi xác nhận đơn hàng. Có thể cần thêm ngày làm việc để giao hàng trong thời gian",
    icon: <GiDeliveryDrone />,
  },
  {
    id: 2,
    name: "Thanh Toán",
    text: "Mua sắm trước, thanh toán sau. Bạn sẽ chỉ trả tiền cho những món đồ bạn đã mua. Khoản thanh toán của bạn sẽ tự động được trừ vào thẻ của bạn sau 30 ngày, không tính thêm phí",
    icon: <GiPayMoney />,
  },
  {
    id: 3,
    name: "Hoàn Trả Hàng",
    text: "Bạn luôn được trả lại hoặc đổi hàng miễn phí tại bất kỳ cửa hàng nào, Bạn có 30 ngày để quyết định xem món đồ đó có phù hợp với mình không",
    icon: <GiReturnArrow />,
  },
];
