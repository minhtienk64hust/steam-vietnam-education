# Phiếu Thực hành 2: gọi Agent trong một bước của Workflow (LO 5.2)

Người thực hiện: ______________   Agent: ______________   Ngày: ________

## 1. Bước giao cho Agent
Quy trình của tổ: ______________________

| Bước trước (đầu vào từ đâu) | Bước giao cho Agent | Bước sau (dùng đầu ra) |
|---|---|---|
| | | |

Đầu vào: ______________________ (file, thư mục)
Đầu ra cần có: ______________________ (tên file, định dạng, nơi lưu)

## 2. Prompt gọi Agent
Khuôn:

```
Dùng agent [tên-agent] [việc cần làm] cho [lớp, phạm vi].
Đầu vào: [file, thư mục].
Lưu kết quả vào [tên file] cho bước [bước sau].
```

Prompt của thầy cô:

______________________

Cách gọi trên Claude Code: gọi theo tên trong yêu cầu; chạy `claude --agent [tên-agent]`; để Claude tự gọi khi yêu cầu khớp mô tả (description) của Agent.

## 3. Chạy thử và đọc quá trình suy nghĩ
| Lần chạy | Agent hiểu yêu cầu thế nào | Kế hoạch các bước | Skill, công cụ Agent chọn | Đầu ra dùng được cho bước sau? |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |

## 4. Sửa đúng chỗ
| Thấy trong quá trình suy nghĩ | Sửa ở | Đã sửa gì |
|---|---|---|
| Hiểu sai việc, thiếu đầu vào | Prompt gọi Agent | |
| Bỏ bước, làm sai thứ tự | Phần Cách làm của Agent | |
| Chọn sai Skill, không mở Skill cần dùng | Mô tả (description) của Skill | |
| Thiếu công cụ, dùng công cụ ngoài phạm vi | Trường tools của Agent | |
| Sai định dạng, sai tên file đầu ra | Phần Đầu ra của Agent | |

Sau mỗi lần sửa, chạy lại cùng prompt để so sánh.

## 5. Tự kiểm
- [ ] Prompt nêu tên Agent, việc cần làm, đầu vào và đầu ra
- [ ] Agent hiểu đúng yêu cầu, lập kế hoạch đủ các bước
- [ ] Agent chọn đúng Skill, chỉ dùng công cụ được phép
- [ ] Đầu ra đúng định dạng, dùng được cho bước sau

## Ví dụ: Trợ lý Nhận xét (Agent mẫu của Thực hành 1)
| Bước trước | Bước giao cho Agent | Bước sau |
|---|---|---|
| Giáo viên bộ môn nhập mức đạt: bang-muc-dat-9A.csv | Viết nhận xét cuối kỳ I lớp 9A | Giáo viên chủ nhiệm duyệt |

Prompt: Dùng agent tro-ly-nhan-xet viết nhận xét cuối kỳ I cho lớp 9A. Đầu vào: bang-muc-dat-9A.csv. Lưu kết quả vào nhan-xet-9A-nhap.md cho bước giáo viên chủ nhiệm duyệt.

Lần 1: Agent viết nhận xét cho cả lớp nhưng bỏ qua 3 học sinh thiếu mức đạt, không báo lại.
Sửa ở phần Cách làm của Agent: "Học sinh thiếu dữ liệu: để trống, liệt kê tên ở cuối file."
Lần 2: đầu ra đủ cả lớp, cuối file có danh sách học sinh thiếu dữ liệu; dùng được cho bước duyệt.
