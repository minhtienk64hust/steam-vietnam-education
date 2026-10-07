# Module 5: slide web

Mở `index.html` bằng Chrome hoặc Edge (bấm đúp là chạy, không cần cài đặt, không cần Internet).

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang tổng quan: mục tiêu, mục lục có liên kết tới từng slide, đối chiếu khóa Anthropic, mẫu tải về |
| `lo-5-1-v2.html`, `lo-5-2-v2.html`, `lo-5-3-v2.html` | 3 bộ slide bản 2, có hội thoại Thầy Rùa và Octo (37, 28, 41 slide); trang tổng quan trỏ tới bản này |
| `lo-5-1.html`, `lo-5-2.html`, `lo-5-3.html` | 3 bộ slide bản 1, không có hội thoại (29, 22, 33 slide) |
| `PLAN_Module5.md` | Kế hoạch slide cho nhóm biên soạn |
| `pdf/` | Bản PDF dựng sẵn của cả hai bản, mỗi slide một trang 16:9 |
| `templates/` | Mẫu dùng ngay; `templates/skills/*.zip` tải thẳng lên Claude |
| `assets/` | CSS, JS, font Be Vietnam Pro, icon Phosphor, hình minh họa; `img/nhan-vat/` là hình Thầy Rùa, Octo và nền lớp học của bản 2 |

## Phím tắt khi trình chiếu
`→`/`Space` slide sau · `←` slide trước · `M` mục lục · `N` ghi chú giảng viên · `F` toàn màn hình · `?` phím tắt.
Thêm `#số` vào cuối địa chỉ để mở thẳng một slide, ví dụ `lo-5-3-v2.html#28`.

## Sửa nội dung
- Mỗi slide là một khối `<section class="slide" data-sec="Tên phần" data-title="Tên slide">`. Ghi chú giảng viên nằm trong `<aside class="notes">`.
- Thêm, xóa, đổi thứ tự slide: số trang, mục lục, chân trang tự cập nhật.
- Khung slide 1600 x 900. Sau khi sửa, kiểm tra chữ không tràn xuống chân trang.
- Khối mẫu có nút "Sao chép": `<div class="code" data-file="tên file"><pre data-lang="md">...</pre></div>`.

## Xuất PDF
Mở bộ slide trên Chrome, `Ctrl + P`, chọn "Lưu dưới dạng PDF", lề "Không", bật "Đồ họa nền".
