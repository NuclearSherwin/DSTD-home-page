import Bapcai from "../assets/imgs/bapcai.png";

const ModalXatNhan = () => {
  return (
    <div className="mt-[100px] items-center max-w-[1177px] p-[50px] m-auto">
      <div className="flex">
        <div className="w-[183px] h-[152px]">
          <img className="w-[100%] object-cover" alt="" src={Bapcai} />
        </div>

        <div className="flex items-center">
          <h3 className="font-bold leading-[24.2px] text-[20px]">
            Bây giờ hãy lựa chọn tư vấn viên mà bạn thích nhất để thiết lập
            Career Dating nhé!
          </h3>
        </div>
      </div>

      <div className="mt-[20px] mb-[20px]">
        <h1 className="text-[#F80404] font-bold text-[20px] underline">
          !!! LƯU Ý:
        </h1>

        <ul className="italic text-[20px] leading-[24.2px]">
          <li>
            1 . Sau khi bạn lựa chọn tư vấn viên, bạn không thể thay đổi thông
            tin trong bản khảo sát. Nếu bạn chưa chắc chắn hãy nhấn{" "}
            <b>“Sửa thông tin khảo sát”</b>
          </li>
          <li>
            2 . Nếu bạn chưa chắc chắn hãy nhấn <b>“Sửa thông tin khảo sát”</b>{" "}
            Nếu bạn đã chắc chắn, hãy nhấn “Đến Danh sách tư vấn viên
          </li>
          <li>
            3 . Bạn chỉ có thể matching tối đa <b>1 lần/tháng</b>. Nếu bạn chưa
            may mắn vì chưa có tư vấn viên nào lựa chọn, hệ thống sẽ thông báo
            đến bạn vào ngày cuối cùng của tháng. Sau đó, hãy bắt đầu lựa chọn
            lại nghề nghiệp và thực hiện khảo sát để Dầu tiếp tục tìm Tư vấn
            viên cho bạn nhé!
          </li>
          <li>
            4 . Để cảm ơn tư vấn viên đã dành thời gian gặp gỡ và chia sẻ những
            câu chuyện bổ ích và thú vị, sau khi <b>match Career Dating</b>, Dầu
            sẽ gợi ý cho bạn 1 món quà nhỏ (<b>50k</b>) để bạn có thể tặng tư
            vấn viên trong buổi hẹn.
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-[50px]">
        <div>
          <span className="leading-[24.2px] text-[20px] font-bold text-[#74C156] py-[10px] px-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[8px] hover:bg-[#F6F6F6] cursor-pointer">
            Sửa thông tin khảo sát
          </span>
        </div>
        <div>
          <span className="leading-[24.2px] text-[20px] font-bold text-[#74C156] py-[10px] px-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[8px] hover:bg-[#F6F6F6] cursor-pointer">
            Đến Danh sách tư vấn viên
          </span>
        </div>
      </div>
    </div>
  );
};
export default ModalXatNhan;
