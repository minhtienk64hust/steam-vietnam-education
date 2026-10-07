# Bảng cấp quyền cho Agent (LO 5.3)

Một số quyền thường gặp (ví dụ; mỗi nền tảng có thêm quyền khác):
- Đọc (Read): xem file, thư, trang web, bài nộp. Được phép.
- Ghi (Write): tạo, sửa, lưu file. Agent xin quyền.
- Dùng ứng dụng, chạy lệnh (Execute): mở ứng dụng, chạy lệnh trên máy. Agent xin quyền.
- Gửi, chia sẻ (Send, Share): gửi thư, chia sẻ Drive, đăng bài. Agent xin quyền.
- Xóa (Delete): xóa file, thư. Luôn xin quyền.
- Thanh toán, tạo tài khoản: bị chặn.

Nguyên tắc cấp quyền:
- Chỉ cấp quyền cần thiết: Agent chỉ được truy cập và thực hiện những gì Workflow thực sự cần.
- Cấp quyền theo từng công cụ: cho phép Agent ghi vào thư mục lớp không đồng nghĩa với được sửa mọi file.
- Giữ kiểm soát ở hành động quan trọng: gửi, chia sẻ, xóa, thanh toán hoặc tạo tài khoản mới nên yêu cầu giáo viên xác nhận hoặc bị chặn.

| Bước | Công cụ | Quyền cần | Tự làm hay xin quyền | Người duyệt |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Ví dụ: Workflow đề kiểm tra giữa kỳ (sau vài kỳ đã chạy ổn)
| Bước | Công cụ | Quyền cần | Tự làm hay xin quyền | Người duyệt |
|---|---|---|---|---|
| 2. Soạn đề, hướng dẫn chấm | Google Drive | Đọc, ghi | Luôn cho phép ghi vào thư mục Nhap/ | |
| 3. Xuất PDF, lưu Drive | Google Drive | Ghi | Luôn cho phép ghi vào thư mục Nhap/ | |
| 5. Tạo bài kiểm tra trên LMS | Trình duyệt | Gửi, đăng | Xin quyền | Giáo viên bộ môn |
| 6. Tổng hợp bài nộp | LMS, Google Sheets | Đọc, ghi | Luôn cho phép ghi vào thư mục Bao_cao/ | |
| 7. Gửi báo cáo cho tổ | Gmail | Gửi | Xin quyền | Giáo viên bộ môn |

## Mặc định của nền tảng (kiểm tra ngày 06/10/2026)
- Claude Code: đọc file không cần duyệt; sửa, ghi file và chạy lệnh cần duyệt; có lựa chọn "Yes, and don't ask again".
- Claude, kết nối: mỗi công cụ đặt Always allow, Needs approval hoặc Blocked (Customize > Connectors).
- Claude, Gmail và Google Drive: hỏi trước khi gửi, trả lời, chuyển tiếp thư; chia sẻ, di chuyển, xóa file.
- Claude Cowork: luôn hỏi trước khi xóa vĩnh viễn file. Claude in Chrome: chặn mua hàng, tạo tài khoản ở mọi chế độ.
- ChatGPT: Always ask, Allow read actions, Allow low-risk actions, Allow all actions.
- Gemini Spark: hỏi trước khi gửi, sửa dữ liệu, mua hàng, nộp form.

Kiểm tra nhanh:
- Kết nối nào đang bật mà Workflow không dùng? Tắt hoặc chặn.
- Quyền chia sẻ trên Google Drive có khớp với bảng này không?
