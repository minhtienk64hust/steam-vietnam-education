# LO 5.1 · Từ Prompt đến Skill: Đóng gói năng lực chuyên môn cho AI: mục lục (bản 13, 29 slide)

Thời lượng: khoảng 150 phút (gợi ý 2 buổi: Phần 1 đến 3 khoảng 68 phút, Phần 4 đến 7 khoảng 70 phút). Bản 13 (07/10/2026): bỏ Judge Skill; chuyển phần Plugin sang LO 5.3; chuyển phần Skill và Project xuống sau phần Tinh chỉnh, cải tiến chất lượng Skill; thêm slide Tìm Skill có sẵn từ nguồn uy tín, đặt ngay sau demo skill-creator; Thực hành 1, 2 đi theo 4 bước của quy trình; làm lại Thực hành 3.

Nguyên tắc trình bày: mỗi phần đi theo thứ tự **khái niệm, khung tư duy chung** (không gắn với công cụ nào) → **nội dung cốt lõi** → **ví dụ trên Claude** (và ChatGPT, Gemini khi có).
Định nghĩa: Skill (kỹ năng AI) là một bộ hướng dẫn được đóng gói dưới dạng thư mục, giúp AI xử lý các tác vụ hoặc quy trình cụ thể.
Hình dung xuyên suốt: Prompt là một yêu cầu, giống giao việc từng lần; Skill là một năng lực đã được đóng gói, giống đào tạo một nhân sự biết làm một nhóm việc cụ thể.
Ví dụ xuyên suốt: Skill viết nhận xét học sinh cuối kỳ môn Ngữ văn 9 (`viet-nhan-xet-hoc-sinh`).

## Mở đầu (slide 1-2 · 3 phút)
1. Bìa (phụ đề: Hiểu cấu trúc và cơ chế hoạt động của Skill; xây dựng, kiểm thử, cải tiến Skill cho công việc chuyên môn; chia sẻ Skill cho cả tổ)
2. Mục tiêu và lộ trình bài học

## Phần 1. Skill là gì, khác gì Prompt? Vì sao và khi nào cần Skill (slide 3-7 · 15 phút)
3. Skill là gì? (trí tuệ có cấu trúc: Skill là prompt lưu vĩnh viễn trong file SKILL.md; ví dụ của giáo viên theo khung Tên, Mô tả, Hướng dẫn)
4. Skill khác Prompt ở đâu? (hình dung: giao việc từng lần và đào tạo một nhân sự; bảng so sánh)
5. Vì sao và khi nào cần Skill? (lợi ích cho cá nhân và cả tổ; 6 dấu hiệu theo hướng dẫn của Anthropic, bấm chọn được, từ 2 dấu hiệu thì nên tạo Skill; khi nào không cần Skill)
6. Khi nào nên xây dựng Skill: hướng dẫn chính thức (ý cốt lõi của tài liệu Anthropic; ba nhóm việc Skill phát huy hiệu quả, mỗi nhóm kèm ví dụ ở trường; trường hợp không cần Skill)
7. Cùng môn Ngữ văn 9: việc nào nên đóng gói? (hỏi AI nghĩa một từ Hán Việt và viết nhận xét cuối kỳ cho 40 học sinh, đối chiếu 6 dấu hiệu)

## Phần 2. Cấu trúc Skill, file .md và cơ chế AI kích hoạt Skill (slide 8-13 · 20 phút)
8. Cấu trúc một Skill và file .md (thư mục tổng skills/, mỗi Skill một thư mục có SKILL.md; file .md đứng lẻ không đúng chuẩn Skill; .md là một định dạng file như .pdf, .docx, chữ thuần theo chuẩn chung nên người và AI đều dễ đọc)
9. Các thành phần của file SKILL.md (theo chuẩn: phần đầu gồm tên, mô tả bắt buộc và license, compatibility, metadata tùy chọn; phần thân là hướng dẫn) và checklist 12 mục của khóa học
10. Skill mẫu hoàn chỉnh đủ 12 mục: viết nhận xét học sinh
11. AI kích hoạt Skill như thế nào? (3 bước nạp dần; ví dụ so khớp một yêu cầu với mô tả của 3 Skill mẫu; mô tả quyết định tất cả)
12. Nguyên lý cốt lõi của hệ thống vận hành Skill AI (Core design principles của Anthropic): nạp theo tầng (Progressive Disclosure), ghép nối (Composability), khả chuyển (Portability)
13. Ví dụ: một Skill trên Claude và ChatGPT

## Phần 3. Cách xây dựng Skill, thực hành tạo Skill thủ công và triển khai (slide 14-17 · 30 phút)
14. Quy trình xây dựng Skill (sơ đồ 4 bước: xác định nhiệm vụ, chuẩn hóa cách làm, xây dựng Skill, kiểm thử và hoàn thiện; theo nội dung của tác giả 07/10/2026) và 4 nguyên tắc viết SKILL.md
15. Cấu trúc mô tả (description) theo Anthropic: làm gì + khi nào dùng + năng lực chính; lưu ý cách nói người dùng hay gõ, loại tệp; 3 kiểu mô tả cần tránh
16. Triển khai Skill trên các nền tảng: giao diện web (Claude: Customize > Skills, tải .zip hoặc soạn cùng Claude; ChatGPT: Plugins > Skills; Gemini: gắn file, Gem) và công cụ làm việc với thư mục (Claude Code, Google Antigravity)
17. Thực hành 1 và 2 theo 4 bước của quy trình: Thực hành 1 (xác định nhiệm vụ, chuẩn hóa cách làm, xây dựng Skill), Thực hành 2 (triển khai, kiểm thử kích hoạt, kiểm thử kết quả, hoàn thiện); gợi ý chọn việc theo cấp học; bảng lỗi khi kiểm thử và chỗ cần sửa

## Phần 4. Tinh chỉnh, cải tiến chất lượng Skill (slide 18-22 · 35 phút)
18. Nhờ AI review Skill (2 câu lệnh mẫu)
19. Skill-creator: công cụ chuyên sâu để tạo Skill (làm được gì, có ở đâu, lợi ích)
20. Demo: tạo Skill mới bằng skill-creator (tương tác 4 bước trên giao diện Claude: gọi /skill-creator và mô tả việc, skill-creator hỏi thêm, viết SKILL.md và đề xuất thử, xem lại, lưu, thử)
21. Tìm Skill có sẵn từ nguồn uy tín (nguồn chính thức trên Claude, ChatGPT; thư viện của tổ, của trường; cộng đồng; kiểm tra trước khi dùng; chuẩn mở Agent Skills)
22. Thực hành 3: cải tiến Skill, tạo Skill bằng skill-creator (A: review, chọn góp ý, sửa thành bản 1.1, kiểm thử lại; B: gọi /skill-creator, trả lời câu hỏi, xem lại SKILL.md, lưu, thử, so sánh; sản phẩm của từng phần; chuẩn bị)

## Phần 5. Skill, Project và cách tổ chức công việc (slide 23-24 · 10 phút)
23. Project là gì? Cấu trúc 3 thành phần (hướng dẫn chung cùng bản chất với rules)
24. Skill và Project: So sánh (bản chất, thành phần, phạm vi, mục đích sử dụng); chọn Prompt, Rules, Project, Skill theo tình huống; ví dụ trên Claude

## Phần 6. Tái sử dụng và chia sẻ Skill (slide 25-26 · 15 phút)
25. Tái sử dụng Skill cho Project khác, chia sẻ cho mọi người (3 cấp chia sẻ, cách làm trên Claude, ChatGPT, Gemini)
26. Thư viện Skill của tổ và Thực hành 4 (đăng ký vào thư viện, chia sẻ cho đồng nghiệp, ghi phản hồi)

## Phần 7. Tổng kết (slide 27-29 · 10 phút)
27. Khung 4D trong vòng đời một Skill
28. Kiểm tra nhanh
29. Tổng kết LO 5.1 (nội dung cốt lõi theo bốn nhóm: hiểu Skill; xây dựng, triển khai; tinh chỉnh, cải tiến; tổ chức, chia sẻ; chuyển sang LO 5.2; không có sản phẩm nộp)
