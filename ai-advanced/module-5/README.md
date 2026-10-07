# Module 5: slide web

Mở `index.html` bằng Chrome hoặc Edge (bấm đúp là chạy, không cần cài đặt, không cần Internet).

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang tổng quan: mục tiêu, mục lục có liên kết tới từng slide, đối chiếu khóa Anthropic, mẫu tải về |
| `lo-5-1.html`, `lo-5-2.html`, `lo-5-3.html` | 3 bộ slide (31, 23, 31 slide) |
| `PLAN_Module5.md` | Kế hoạch slide cho nhóm biên soạn |
| `pdf/` | Bản PDF dựng sẵn, mỗi slide một trang 16:9 |
| `templates/` | Mẫu dùng ngay; `templates/skills/*.zip` tải thẳng lên Claude |
| `assets/` | CSS, JS, font Be Vietnam Pro, icon Phosphor, hình minh họa |

## Phím tắt khi trình chiếu
`→`/`Space` slide sau · `←` slide trước · `M` mục lục · `N` ghi chú giảng viên · `F` toàn màn hình · `?` phím tắt.
Thêm `#số` vào cuối địa chỉ để mở thẳng một slide, ví dụ `lo-5-3.html#24`.

## Sửa nội dung
- Mỗi slide là một khối `<section class="slide" data-sec="Tên phần" data-title="Tên slide">`. Ghi chú giảng viên nằm trong `<aside class="notes">`.
- Thêm, xóa, đổi thứ tự slide: số trang, mục lục, chân trang tự cập nhật.
- Khung slide 1600 x 900. Sau khi sửa, kiểm tra chữ không tràn xuống chân trang.
- Khối mẫu có nút "Sao chép": `<div class="code" data-file="tên file"><pre data-lang="md">...</pre></div>`.

## Xuất PDF
Mở bộ slide trên Chrome, `Ctrl + P`, chọn "Lưu dưới dạng PDF", lề "Không", bật "Đồ họa nền".
