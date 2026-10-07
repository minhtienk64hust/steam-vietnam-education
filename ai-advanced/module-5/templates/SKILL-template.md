---
name: ten-skill-viet-thuong-gach-noi
description: "[Câu 1: Skill làm gì, bắt đầu bằng động từ]. Dùng khi [tình huống giáo viên cần đến Skill này]. (Nên dưới 200 ký tự)"
license: "Nội bộ [tên tổ]"                 # tùy chọn: phạm vi sử dụng
compatibility: "Claude, ChatGPT, Gemini"   # tùy chọn: môi trường dùng được
metadata:                                   # tùy chọn: thông tin quản lý
  author: "[họ tên, tổ]"
  version: "1.0"
  updated: "[năm-tháng-ngày]"
---

<!-- Mẫu SKILL.md theo checklist 12 mục của khóa học.
     Phần đầu: name và description là bắt buộc; license, compatibility, metadata là tùy chọn (xóa nếu không dùng).
     Quy tắc tên: chữ thường, số, dấu gạch nối; tối đa 64 ký tự; trùng tên thư mục chứa file này. -->

# [Tên đầy đủ của Skill]

## Trường hợp không áp dụng
<!-- Thành phần 3: giới hạn phạm vi, tránh AI gọi nhầm Skill -->
- [Trường hợp không dùng Skill này, và nên dùng gì thay thế]

## Đầu vào cần có
<!-- Thành phần 4: phần thay đổi mỗi lần dùng -->
- [Thông tin 1, ví dụ: môn, lớp, tên bài]
- [Thông tin 2, kèm giá trị mặc định nếu có]

## Tài liệu tham chiếu
<!-- Thành phần 5: chuẩn, mẫu, quy định. Có thể đặt file trong thư mục references/ -->
- references/[ten-file].md: [nội dung file]

## Chỉ dẫn cốt lõi
<!-- Thành phần 6: vai trò và nhiệm vụ cố định (phần không đổi của prompt cũ) -->
Đóng vai [vai trò]. Nhiệm vụ: [nhiệm vụ]. [Giới hạn quan trọng nhất].

## Các bước
<!-- Thành phần 7 -->
1. [Bước 1]
2. [Bước 2]
3. [Bước 3]
4. Tự kiểm tra theo tiêu chí bên dưới trước khi trả kết quả.

## Định dạng đầu ra
<!-- Thành phần 8: mô tả cụ thể, nên kèm một ví dụ mẫu ngắn -->
[Bảng/danh sách/đoạn văn... gồm những cột/mục nào]

## Tiêu chí chất lượng
<!-- Thành phần 9: tiêu chí kiểm tra đo được -->
- [Tiêu chí 1]
- [Tiêu chí 2]
- [Tiêu chí 3]

## Người duyệt
<!-- Thành phần 10: ghi vai trò người duyệt và việc mỗi vai trò cần duyệt -->
- [Vai trò, ví dụ: giáo viên bộ môn]: [duyệt nội dung gì, trước bước nào]
- [Vai trò, ví dụ: tổ trưởng chuyên môn]: [duyệt nội dung gì, trước bước nào]
AI chỉ trả bản nháp, không tự gửi đi hay nhập vào hệ thống.

## Quy tắc dữ liệu
<!-- Thành phần 11 -->
[Thông tin học sinh được dùng và không được dùng, ví dụ: chỉ dùng thông tin trong bảng; không nêu hoàn cảnh gia đình, sức khỏe, kỷ luật].

## Nhật ký cải tiến
<!-- Thành phần 12 (cùng dòng "Phiên bản" ở đầu file) -->
- v1.0 ([ngày]): bản đầu tiên
