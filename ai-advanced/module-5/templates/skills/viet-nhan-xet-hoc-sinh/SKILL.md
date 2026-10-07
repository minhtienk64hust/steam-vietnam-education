---
name: viet-nhan-xet-hoc-sinh
description: Viết nhận xét cuối kỳ cho từng học sinh từ bảng mức đạt. Ghi nhận điểm mạnh, gợi mở điều cần cố gắng, không trùng lặp. Dùng khi cần nhận xét học bạ, sổ liên lạc.
license: Nội bộ Tổ Ngữ văn 9
compatibility: Claude, ChatGPT, Gemini; không cần chạy code, truy cập mạng
metadata:
  author: Cô Vy, Tổ Ngữ văn 9
  version: "1.1"
  updated: "2026-10-02"
---

# Viết nhận xét học sinh cuối kỳ

## Trường hợp không áp dụng
- Học sinh có hoàn cảnh đặc biệt, vấn đề sức khỏe hoặc kỷ luật: giáo viên tự viết

## Đầu vào cần có
- Bảng: Họ tên | Mức đạt | Điểm mạnh | Điều cần cố gắng
- Môn hoặc nội dung nhận xét; độ dài mỗi nhận xét (mặc định: 2 đến 3 câu)

## Tài liệu tham chiếu
- references/quy-dinh-danh-gia.pdf (nếu có): quy định đánh giá học sinh của trường
- references/tap-huan-nhan-xet.pptx (nếu có): slide tập huấn viết nhận xét của tổ
- assets/mau-nhan-xet-hoc-ba.docx (nếu có): mẫu trình bày nhận xét của trường
- references/cum-tu-goi-y.md: cụm từ khích lệ theo từng mức đạt

## Chỉ dẫn cốt lõi
- Viết với tư cách giáo viên Ngữ văn: xưng "cô" hoặc "thầy", gọi học sinh là "em".
- Gắn nhận xét với kỹ năng của môn: đọc hiểu, viết, nói và nghe. Nêu đúng kỹ năng, không khen chung chung ("em học tốt").
- Mức Tốt, Khá: ghi nhận thế mạnh, gợi hướng nâng cao. Mức Đạt, Chưa đạt: ghi nhận nỗ lực, nêu 1 đến 2 việc cụ thể cần làm.
- Viết điều cần cố gắng thành việc em làm được (luyện thêm, đọc thêm, sửa lại); không dùng từ "yếu", "kém", "lười".
- Ô điểm mạnh hoặc điều cần cố gắng trống: ghi "[GV bổ sung]", không tự suy đoán.

## Các bước
1. Đọc từng dòng của bảng.
2. Câu 1: ghi nhận điểm mạnh cụ thể.
3. Câu 2: nêu điều cần cố gắng bằng lời gợi mở, không chê trách.
4. Câu 3 (nếu cần): một lời động viên ngắn.
5. Rà cả bảng: không để hai học sinh có nhận xét giống hệt nhau.

## Định dạng đầu ra
Bảng 2 cột: Họ tên | Nhận xét (2 đến 3 câu, dưới 50 từ)
Ví dụ: Nguyễn Văn An | Em đọc hiểu văn bản tốt, trình bày ý mạch lạc. Em hãy luyện thêm cách mở bài để bài viết hấp dẫn hơn. Cô tin em sẽ tiến bộ.

## Tiêu chí chất lượng
- Mỗi nhận xét có ít nhất 1 điểm mạnh cụ thể
- Điều cần cố gắng viết theo hướng gợi mở
- Khớp với mức đạt trong bảng
- Không có hai nhận xét giống hệt nhau

## Người duyệt
- Giáo viên bộ môn: đọc từng nhận xét, chỉnh cho đúng với từng em.
- Tổ trưởng chuyên môn: kiểm tra xác suất trước khi nhập vào hệ thống.
AI chỉ trả bản nháp, không tự nhập vào hệ thống.

## Quy tắc dữ liệu
Chỉ dùng thông tin trong bảng; không nêu hoàn cảnh gia đình, sức khỏe, kỷ luật trong nhận xét.

## Nhật ký cải tiến
- v1.1 (02/10/2026): thêm bước rà trùng lặp cả bảng theo góp ý của tổ
- v1.0 (15/09/2026): bản đầu tiên
