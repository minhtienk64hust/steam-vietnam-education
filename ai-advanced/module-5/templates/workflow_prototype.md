# workflow_prototype.md: kế hoạch Workflow tự động (LO 5.3)
<!-- Đặt ở thư mục gốc của dự án trên Drive. Đính kèm file này vào prompt cho Agent chính:
     Giúp tôi [tên công việc] theo file kế hoạch đính kèm, sử dụng Agent / Sub-agent điều phối Workflow.
     Sau mỗi bước, ghi nhật ký vào workflow_log.md.
     Trước khi bắt đầu, trình bày kế hoạch thực hiện để tôi duyệt. -->

## 1. Tổng quan
- Workflow: [tên Workflow]
- Sản phẩm cuối: [sản phẩm cần bàn giao]
- Phụ trách: [vai trò, ví dụ: giáo viên bộ môn]
- Duyệt: [vai trò, ví dụ: tổ trưởng chuyên môn]
- Agent chính: [tên]; Agent, Sub-agent khác: [tên]
- Skill: [tên các Skill]
- Thư mục dự án: [Drive/...]

## 2. Các bước
<!-- Mỗi bước một mục đánh số. Bước chạy theo lịch thì ghi giờ chạy trong tên bước. Quyền: đọc, ghi, dùng ứng dụng, gửi và chia sẻ, xóa (xem permission-matrix.md). -->
1. [Tên việc]
   - Người làm: [giáo viên, Agent hoặc Sub-agent]
   - Skill: [nếu có]
   - Công cụ: [ứng dụng (quyền)]
   - Điểm duyệt: [ai duyệt, nếu có]
   - Lưu: [thư mục]
2. [Tên việc]
   - Người làm:
   - Skill:
   - Công cụ:
   - Điểm duyệt:
   - Lưu:
3. [Tên việc]
   - Người làm:
   - Skill:
   - Công cụ:
   - Điểm duyệt:
   - Lưu:

## 3. Cấu trúc thư mục gợi ý
```
[Ten_du_an]/
  workflow_prototype.md
  workflow_log.md
  Tai_lieu_ra_de/  yêu cầu ra đề, ngữ liệu giáo viên cung cấp
  Nhap/        bản nháp Agent tạo
  Da_duyet/    bản đã duyệt
  Bao_cao/     bảng tổng hợp, báo cáo
```

---

## Ví dụ: Đánh giá cuối kỳ Ngữ văn 9, từ ra đề đến nhận xét

### Kế hoạch Workflow: Đánh giá cuối kỳ Ngữ văn 9

#### 1. Tổng quan
- Phụ trách: giáo viên bộ môn
- Duyệt đề: tổ trưởng chuyên môn
- Agent chính: Agent Khảo thí; Agent khác: Agent Nhận xét
- Thư mục dự án: Drive/Danh_gia_cuoi_ky/9

#### 2. Các bước
1. Giao yêu cầu: lớp, phạm vi, ngữ liệu
   - Người làm: giáo viên bộ môn
   - Lưu: Tai_lieu_ra_de/
2. Soạn đề, hướng dẫn chấm
   - Người làm: Agent Khảo thí
   - Skill: Soạn câu hỏi, Soạn hướng dẫn chấm
   - Công cụ: Drive (đọc, ghi)
   - Lưu: Nhap/
3. Thẩm định độc lập
   - Người làm: Sub-agent
   - Skill: Thẩm định câu hỏi
   - Công cụ: Drive (đọc)
4. Duyệt đề
   - Người làm: tổ trưởng chuyên môn
   - Điểm duyệt: xem, chỉnh sửa và duyệt
   - Lưu: Da_duyet/
5. Xuất PDF, tạo bài trên LMS
   - Người làm: Agent Khảo thí
   - Công cụ: Drive (ghi), trình duyệt (đăng)
6. Tổng hợp điểm (theo lịch, 7:00 sau hạn nhập điểm)
   - Người làm: Sub-agent mỗi lớp
   - Công cụ: LMS (đọc), Sheets (ghi)
   - Lưu: Bao_cao/
7. Viết nhận xét
   - Người làm: Agent Nhận xét
   - Skill: Viết nhận xét học sinh, Thẩm định nhận xét
   - Lưu: Nhap/
8. Duyệt nhận xét, nhập LMS
   - Người làm: giáo viên bộ môn, Agent
   - Điểm duyệt: xem, chỉnh sửa và duyệt
   - Công cụ: trình duyệt (nhập)

#### 3. Thư mục dự án
Tai_lieu_ra_de/, Nhap/, Da_duyet/, Bao_cao/, workflow_log.md

Giáo viên chấm bài như thường lệ; Agent không chấm bài.
