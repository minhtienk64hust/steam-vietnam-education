# Câu lệnh mẫu làm việc với Skill (LO 5.1, Phần 5)

Dùng được trên mọi AI: Claude, ChatGPT, Gemini. Thay phần trong ngoặc vuông.

## 1. Nhờ AI review Skill (chỉ nhận xét, chưa sửa)

```text
Bạn là chuyên gia viết Skill cho AI. Hãy review file SKILL.md dưới đây, chưa sửa gì.
[dán nội dung SKILL.md]

Chấm theo 6 tiêu chí:
1. Mô tả nói rõ làm gì và khi nào dùng
2. Đủ 12 mục
3. Các bước rõ ràng, đúng thứ tự
4. Có ví dụ đầu ra
5. Tiêu chí kiểm tra đo được
6. Có quy tắc dữ liệu học sinh

Trả về bảng: Tiêu chí | Đạt/Chưa | Vấn đề | Đề xuất sửa, xếp đề xuất theo mức độ quan trọng.
```

## 2. Nhờ AI sửa Skill theo góp ý đã chọn

```text
Hãy sửa file SKILL.md theo các góp ý số [1, 3, 4] ở trên.
Giữ nguyên tên Skill và những phần tôi không yêu cầu sửa.
Mô tả (description) viết theo cấu trúc: [làm gì] + [khi nào dùng, kèm cách nói hay gõ] + [năng lực chính], dưới 200 ký tự.
Tăng phiên bản lên [1.1] và ghi các thay đổi vào mục "Nhật ký cải tiến".
Trả về toàn bộ file SKILL.md hoàn chỉnh.
```

## 3. Nhờ AI viết Skill mới (khi không dùng skill-creator)

```text
Tôi muốn tạo một Skill cho việc: [tên việc].
Đây là câu lệnh tôi vẫn dùng: [dán câu lệnh].
Đây là một kết quả tốt mà tôi muốn lần nào cũng đạt: [dán ví dụ].

Hãy hỏi tôi lần lượt từng câu để làm rõ: đầu vào, các bước, định dạng đầu ra, tiêu chí kiểm tra, người duyệt, quy tắc dữ liệu.
Sau đó viết file SKILL.md đủ 12 mục, mô tả dưới 200 ký tự.
```

## 4. Mở đầu với skill-creator trên Claude

```text
Hãy tạo một Skill giúp tôi soạn thông báo gửi phụ huynh theo mẫu của trường.
```

```text
Biến quy trình chúng ta vừa làm trong cuộc trò chuyện này thành một Skill để tôi dùng lại.
```
