# Câu lệnh giao việc cho Agent (LO 5.3)

## Yêu cầu giao việc nên ghi rõ
1. Kết quả cần có: sản phẩm cuối, số lượng, chất lượng
2. Nguồn: thư mục, file, email, trang web
3. Công cụ được dùng: Drive, Gmail, lịch, trình duyệt, LMS
4. Định dạng, nơi lưu: loại file, thư mục, tên file
5. Điểm dừng: bước nào hỏi trước

Thêm khi cần: "Trình bày kế hoạch trước khi làm." · "Sau mỗi lần chạy, ghi vào workflow_log.md: đã làm gì, file nào, chưa làm được gì, chờ duyệt gì."

## Tác vụ mẫu 1: nghiên cứu và thu thập dữ liệu trên web
Tìm 10 nghiên cứu, bài viết chính thống từ năm 2023 về dạy viết văn nghị luận ở THCS. Lập bảng trong Google Sheets: tên bài, tác giả, năm, ý chính, đường dẫn. Viết báo cáo 1 trang có trích dẫn, lưu vào Drive thư mục Tu_lieu/Nghi_luan.

## Tác vụ mẫu 2: bài giảng từ giáo án đến lớp học trên LMS
Từ giáo án tiết 12 trong thư mục Giao_an/Tuan_6, tạo bài giảng PowerPoint 15 slide theo mẫu của trường và xuất thêm bản PDF. Lưu cả hai vào Drive, thư mục Bai_giang/9A. Đăng bản PDF vào mục Tài liệu của lớp 9A trên Google Classroom. Trình bày kế hoạch trước khi làm; hỏi tôi trước khi đăng.

## Tác vụ mẫu 3: khảo sát phụ huynh
Tạo phiếu khảo sát phụ huynh lớp 9A về thời gian tự học ở nhà, 8 câu, trên Google Forms. Soạn thư gửi đường dẫn cho phụ huynh, hỏi tôi trước khi gửi. Thứ Sáu tuần sau lúc 16:00, tổng hợp câu trả lời vào Google Sheets, vẽ 3 biểu đồ, viết báo cáo 1 trang gửi tổ trưởng chuyên môn.

## Tác vụ mẫu 4: tác vụ hẹn giờ hằng tuần
Mỗi thứ Hai lúc 7:00: mở lớp 9A trên Google Classroom, lập danh sách học sinh chưa nộp bài tuần trước, soạn thư nhắc gửi phụ huynh từng em (để ở dạng nháp), gửi tôi danh sách và các bản nháp.

## Chạy một Workflow
Prompt cho Agent chính (đính kèm workflow_prototype.md):
Giúp tôi đánh giá cuối kỳ Ngữ văn 9 theo file kế hoạch đính kèm, sử dụng Agent / Sub-agent điều phối Workflow.
Sau mỗi bước, ghi nhật ký vào workflow_log.md.
Trước khi bắt đầu, trình bày kế hoạch thực hiện để tôi duyệt.

Theo yêu cầu (bước 1 đến 3):
Chạy Workflow đánh giá cuối kỳ theo workflow_prototype.md, từ bước 1 đến bước 3.
Yêu cầu ra đề và ngữ liệu trong thư mục Tai_lieu_ra_de/: lớp 9A, 9B, 9C; phạm vi học kỳ I; làm bài 90 phút.
Lưu đề và bảng thẩm định vào Nhap/, rồi dừng chờ tổ trưởng duyệt (bước 4).

Theo sự kiện (bước 5; trên Claude là tác vụ hẹn giờ 7:00 mỗi ngày):
Kiểm tra thư mục Da_duyet/.
Nếu có đề mới: làm bước 5 trong workflow_prototype.md, gồm xuất PDF, tạo bài trên LMS, hẹn giờ mở bài; xin phép tôi trước khi đăng.
Nếu chưa có: ghi vào workflow_log.md rồi dừng, lần chạy sau kiểm tra lại.

Theo lịch (bước 6, 7; tác vụ hẹn giờ 7:00 sau hạn nhập điểm):
Làm bước 6 và 7 trong workflow_prototype.md.
Bước 6: mỗi lớp 9A, 9B, 9C giao một Sub-agent lấy điểm trên LMS, lập bảng mức đạt, lưu vào Bao_cao/.
Bước 7: giao Agent Nhận xét viết nhận xét từ các bảng đó, lưu vào Nhap/.
Học sinh chưa có điểm thì để trống, ghi tên vào nhật ký. Xong thì báo tôi duyệt.

<!-- Dùng được với Claude (Cowork, Claude in Chrome, kết nối Google), ChatGPT Work, Gemini Spark. Đổi tên lớp, thư mục, LMS cho đúng trường mình.
     Dữ liệu học sinh: chỉ đưa thông tin cần cho việc; không đưa thông tin nhạy cảm. -->
