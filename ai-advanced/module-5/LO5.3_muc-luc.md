# LO 5.3 · Kết nối công cụ và vận hành Workflow tự động: mục lục (bản 10, 33 slide)

Thời lượng: khoảng 100 phút, có 3 hoạt động thực hành (khoảng 38 phút). Bản 10 (07/10/2026): làm lại slide 27 (Dùng Plugin thế nào? Tìm Plugin có sẵn trên Claude, ChatGPT); thêm mục tiêu 5 về đóng gói Plugin; cập nhật slide Tổng kết Module 5.

Định hướng (05/10/2026): Agent tự làm được trọn chuỗi việc khi được kết nối công cụ: điều khiển máy tính; mở web, thao tác, điền form; tìm kiếm, nghiên cứu; thu thập và khảo sát dữ liệu trên web; làm việc với Drive, Docs, Sheets, Slides; đọc, gửi thư và xếp lịch; tạo và chuyển đổi file (PowerPoint sang PDF); tự chạy theo lịch; thao tác trên hệ thống học tập (LMS). Giáo viên giao việc, đặt lịch chạy và chọn điểm duyệt. Bỏ slide "lầm tưởng và sự thật về tự động hóa" của bản nháp. MCP chỉ giới thiệu như cổng giao tiếp chung giữa AI và các công cụ. Rủi ro, đạo đức và kiểm soát chất lượng chuyên sâu để Module 6. Bản 3: bỏ slide "Viết yêu cầu giao việc: 5 thành phần"; mỗi tác vụ mẫu có yêu cầu giao việc mẫu; vòng lặp giao việc vẽ thành vòng lặp như sơ đồ của Claude Code, Agent xin quyền bất cứ lúc nào cần, giáo viên chấp thuận. Bản 4 (06/10/2026): gộp slide Google Workspace và slide Trình duyệt và máy tính vào bảng Agent trên Claude, ChatGPT, Gemini (xếp theo ba đường kết nối, đặt ngay sau slide MCP); slide Chuẩn bị trình bày như bước khởi đầu của chuỗi việc. Bản 5 (06/10/2026): slide Chuẩn bị thành Thực hành 1 (kết nối công cụ, 8 phút); hai bài thực hành sau (giao việc, Workflow) đi theo đúng các bước của vòng lặp giao việc. Bản 6 (06/10/2026): thêm slide Chế độ quyền trên Claude, ChatGPT, Gemini theo tên chính thức; tác vụ mẫu trình bày cách Agent phân tích, chọn công cụ; bài thực hành tập trung vào Agent phân tích, lập kế hoạch, thực thi, báo cáo kết quả. Bản 7 (06/10/2026): Phần 4 thành vận hành Workflow đầy đủ, dùng lại Skill của LO 5.1, Agent và Sub-agent của LO 5.2; Workflow mẫu đổi sang đánh giá cuối kỳ; thêm slide Kích hoạt và đóng gói Plugin. Bản 8 (06/10/2026): tách Kích hoạt Workflow thành slide riêng (bấm từng cách để xem thư mục dự án và prompt riêng); Đóng gói Plugin thành sơ đồ, đặt sau slide nhật ký; file kế hoạch bỏ trạng thái, thêm prompt mẫu cho Agent chính; slide nhật ký có prompt mẫu ghi nhật ký; Thực hành 3 đi theo sơ đồ Workflow đầy đủ, bước chạy theo lịch là tùy chọn; bỏ slide ví dụ theo cấp học; Phần 5 là tổng kết Module 5, slide tổng kết chỉ còn nội dung cốt lõi của ba bài.

Cấu trúc tham khảo: Introduction to Claude Cowork (Anthropic Academy: giao việc thay vì trò chuyện, vòng lặp giao việc, kết nối, tác vụ hẹn giờ, việc với file, nghiên cứu, quyền) và Agents and Workflows (OpenAI Academy: agent khác chatbot, giao việc để agent tự thực hiện, con người duyệt ở đâu, chạy và cải tiến workflow dùng lại).

Nguyên tắc trình bày: khái niệm chung trước, ví dụ trên Claude sau, rồi ChatGPT và Gemini. Vai trò người: giáo viên bộ môn, tổ trưởng chuyên môn. Quy tắc dữ liệu: chỉ đưa thông tin học sinh cần cho việc, không đưa thông tin nhạy cảm (hoàn cảnh gia đình, sức khỏe, số điện thoại, địa chỉ).

## Mục tiêu học tập

Sau bài học, thầy cô có thể:
1. Mô tả các nhóm việc Agent tự làm được khi kết nối với ứng dụng, trình duyệt và máy tính.
2. Kết nối Agent với công cụ; chọn chế độ thực thi và cấp quyền phù hợp với từng việc.
3. Giao việc nhiều bước theo vòng lặp giao việc: nêu rõ yêu cầu, duyệt kế hoạch, rà soát báo cáo kết quả.
4. Vận hành Workflow tự động do Agent điều phối Sub-agent, Skill và công cụ: lập kế hoạch, chọn cách kích hoạt và điểm duyệt, theo dõi nhật ký.
5. Đóng gói Workflow thành Plugin cho cả tổ: phân biệt Plugin với Skill, dùng Plugin có sẵn, cài và cập nhật đồng bộ.

**Sản phẩm:** một việc nhiều bước đã giao cho Agent thực hiện (prompt, kế hoạch, báo cáo kết quả, sản phẩm); `workflow_prototype.md` có công cụ, quyền, cách kích hoạt, điểm duyệt cho từng bước; `workflow_log.md` của lần chạy thử.

## Mở đầu (slide 1-2 · 3 phút)
1. Bìa: Kết nối công cụ và vận hành Workflow tự động
2. Mục tiêu và lộ trình bài học

## Phần 1. Agent tự làm được những gì (slide 3-5 · 12 phút)
3. Từ trò chuyện sang giao việc (trò chuyện: hỏi, trả lời, tự chép; giao việc: mô tả kết quả, Agent làm, nhận việc đã xong; ba năng lực: lập kế hoạch, thực hiện, kết nối)
4. Chín nhóm việc Agent tự làm được (điều khiển máy tính; mở web, thao tác, điền form; tìm kiếm, nghiên cứu; thu thập, khảo sát dữ liệu; Drive, Docs, Sheets, Slides; Gmail và lịch; tạo và chuyển đổi file; tự chạy theo lịch; thao tác trên LMS)
5. Một tuần làm việc cùng Agent của giáo viên Ngữ văn 9 (5 ngày, 2 tác vụ theo lịch)

## Phần 2. Kết nối công cụ (slide 6-8 · 14 phút)
6. Kết nối công cụ qua giao thức MCP: AI làm việc qua đâu (ba đường kết nối: kết nối ứng dụng, trình duyệt, máy tính, mỗi đường dùng cho việc gì; MCP là cổng giao tiếp chung, giống USB-C)
7. Agent làm việc trên Claude, ChatGPT, Gemini, xếp theo ba đường kết nối (Claude Cowork, Connectors, Claude in Chrome, Claude dùng máy tính; ChatGPT Work, trình duyệt trên đám mây, Codex; Gemini Spark, Chrome auto browse)
8. Thực hành 1 (8'): chuẩn bị kết nối công cụ trước khi giao việc, bước khởi đầu của chuỗi việc (thanh chuỗi việc: kết nối, giao việc, Workflow; bảng ba kết nối (Google Workspace, trình duyệt, thư mục trên máy): cách bật trên Claude, câu lệnh kiểm tra chỉ đọc, ô tự kiểm; sẵn sàng giao việc; ChatGPT, Gemini; hồ sơ Chrome riêng)

## Phần 3. Giao việc, ủy quyền cho Agent tự thực hiện (slide 9-16 · 35 phút)
9. Vòng lặp giao việc, vẽ theo sơ đồ "agentic loop" của Claude Code (giáo viên giao việc: prompt, đưa yêu cầu, mô tả nhiệm vụ, kết quả cần; Agent lập kế hoạch; vòng lặp Agent tự làm: tìm hiểu, suy luận và thực hiện, đánh giá, lặp lại đến khi xong; giáo viên duyệt kế hoạch, chấp thuận mỗi khi Agent xin quyền, chỉ đạo bất cứ lúc nào; xong thì xem lại, lưu thành tác vụ)
10. Chế độ thực thi (Claude, ChatGPT, Gemini, theo tên chính thức) (Claude, đúng tên trên giao diện: Manual, Auto trong Cowork, Claude in Chrome, Claude Code; Plan, Edit automatically trong Claude Code, bấm Shift + Tab để đổi; quyền từng công cụ Always allow, Needs approval, Blocked; luôn hỏi trước khi xóa vĩnh viễn file. ChatGPT: Always ask, Allow read actions, Allow low-risk actions, Allow all actions. Gemini Spark: hỏi xác nhận trước khi gửi, sửa dữ liệu, mua hàng, nộp form; Take control)
11. Phân quyền cho Agent (một số quyền thường gặp, chỉ là ví dụ: đọc tự làm; ghi, dùng ứng dụng, gửi và chia sẻ, xóa thì xin quyền; thanh toán, tạo tài khoản bị chặn; ví dụ email cho phụ huynh; nguyên tắc cấp quyền: chỉ cấp quyền cần thiết, cấp theo từng công cụ, giữ kiểm soát ở hành động quan trọng)
12. Tác vụ mẫu 1: nghiên cứu và thu thập dữ liệu trên web (yêu cầu giao việc mẫu; Agent phân tích, chọn công cụ từng bước; Research, deep research, Deep Research; Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15)
13. Tác vụ mẫu 2: bài giảng từ giáo án đến lớp học trên LMS (yêu cầu giao việc mẫu; Agent phân tích, chọn công cụ từng bước; PowerPoint, PDF, Drive, Google Classroom)
14. Tác vụ mẫu 3: khảo sát phụ huynh (yêu cầu giao việc mẫu; Agent phân tích, chọn công cụ từng bước; Google Forms, thư gửi đường dẫn, tự hẹn lịch tổng hợp, Sheets, báo cáo)
15. Tác vụ mẫu 4: tự lập lịch (yêu cầu giao việc mẫu; Agent phân tích, chọn công cụ từng bước; tác vụ hẹn giờ trên Claude, ChatGPT, Gemini; mẫu thứ Hai 7:00 trên LMS)
16. Thực hành 2 (15'): giao một việc nhiều bước cho Agent theo vòng lặp giao việc (giao việc, Agent phân tích và lập kế hoạch, thực thi, báo cáo kết quả)

## Phần 4. Vận hành Workflow tự động (slide 17-30 · 30 phút)
17. Workflow đầy đủ gồm những gì (file kế hoạch, Agent chính điều phối, Skill, Agent và Sub-agent, kết nối công cụ, điểm duyệt, kết quả và nhật ký; so sánh giao một việc và vận hành Workflow)
18. Workflow mẫu: đánh giá cuối kỳ Ngữ văn 9, từ ra đề đến nhận xét (bấm vào từng ô, Agent, Skill để xem chi tiết; Trợ lý Khảo thí, ghi chú Agent Khảo thí, với Skill soạn câu hỏi, soạn hướng dẫn chấm; Sub-agent thẩm định độc lập; tổ trưởng duyệt đề; tạo bài trên LMS; Sub-agent tổng hợp điểm từng lớp song song theo lịch; Trợ lý Nhận xét với Skill viết nhận xét học sinh, thẩm định nhận xét; giáo viên duyệt)
19. Thiết lập Workflow: file kế hoạch workflow_prototype.md (cột Ai làm, Skill, Công cụ và quyền, Điểm duyệt: xem, chỉnh sửa và duyệt; prompt mẫu giao Workflow cho Agent chính, đính kèm file kế hoạch)
20. Nội dung file workflow_prototype.md (demo file Markdown thật trong khung code có nút Sao chép: Tổng quan, Các bước, Thư mục dự án; chú thích từng phần)
21. Đưa kế hoạch cho Agent: mô tả trong prompt (cách 1/3; chạy ngay, không cần file .md; lần chạy sau nhập lại mô tả)
22. Đưa kế hoạch cho Agent: AI tạo file .md (cách 2/3; AI tạo workflow_prototype.md từ mô tả, bản xem trước file; lần chạy sau chỉ cần gọi file)
23. Đưa kế hoạch cho Agent: chụp ảnh (cách 3/3; ảnh chụp bảng kế hoạch gửi AI, AI tạo file .md rồi chạy)
24. Kích hoạt Workflow: theo yêu cầu, theo sự kiện, theo lịch (slide tương tác: bấm từng cách để xem thư mục dự án trên Drive và prompt riêng; theo yêu cầu bước 1 đến 3, theo sự kiện bước 5 khi có đề mới trong Da_duyet/, theo lịch bước 6, 7)
25. Theo dõi, nhật ký và cải tiến (prompt mẫu ghi nhật ký, mỗi dòng ứng với một dòng của workflow_log.md; vòng lặp cải tiến: đọc nhật ký, tìm nguyên nhân, sửa đúng chỗ ở Skill, Agent hoặc file kế hoạch, chạy lại và so sánh)
26. Vì sao cần đóng gói thành Plugin? (dẫn dắt: tổ đã có Skill, Agent, Sub-agent, kết nối, file kế hoạch; chia sẻ rời từng phần dễ thiếu, dễ lệch; gom thành một Plugin; Plugin là gì; Plugin khác Skill thế nào; làm lại 07/10/2026)
27. Dùng Plugin thế nào? Tìm Plugin có sẵn trên Claude, ChatGPT (bảng: mỗi thành phần được dùng khi nào, ai khởi động; ví dụ một yêu cầu soạn đề với Plugin khao-thi-ngu-van-9; tìm, cài trên Claude ở Customize > Plugins, trên ChatGPT ở tab Plugins, gõ @ để gọi đích danh; lưu ý nguồn tin cậy; làm lại 07/10/2026)
28. Đóng gói Workflow thành Plugin cho cả tổ (sơ đồ: Plugin khao-thi-ngu-van-9 gồm Agent, Skill, kết nối, file mẫu; cả tổ cài một lần; sửa Skill ở một chỗ, nâng phiên bản, cả tổ dùng bản mới)
29. Rủi ro khi Agent tự làm (lệnh ẩn, dữ liệu cá nhân, tài khoản và hồ sơ riêng, bước không hoàn tác, tác vụ hẹn giờ chạy khi vắng mặt; Module 6)
30. Thực hành 3 (15'): thiết kế và chạy thử một Workflow đầy đủ, đi theo sơ đồ Workflow đầy đủ (file kế hoạch, Agent chính điều phối, Skill, Agent, Sub-agent, kết nối công cụ, điểm duyệt, kết quả và nhật ký; lần chạy thử kích hoạt theo yêu cầu, bước chạy theo lịch là tùy chọn; tự kiểm 5 mục theo năm thành phần, 1 mục tùy chọn)
## Phần 5. Tổng kết Module 5 (slide 31-33 · 8 phút)
31. Khung 4D khi vận hành Workflow tự động
32. Kiểm tra nhanh (tác vụ hẹn giờ; Gmail mặc định hỏi trước khi gửi; lệnh ẩn)
33. Tổng kết Module 5: nội dung cốt lõi của ba bài (LO 5.1 Skill, LO 5.2 Agent, LO 5.3 Workflow tự động và đóng gói Plugin cho cả tổ), mỗi tầng dùng lại tầng trước; chuyển sang Module 6

## Bảng tóm tắt

| # | Phần | Slide | Thời gian |
|---|---|---|---|
| 0 | Mở đầu | 1-2 | 3' |
| 1 | Agent tự làm được những gì | 3-5 | 12' |
| 2 | Kết nối công cụ (Thực hành 1) | 6-8 | 14' |
| 3 | Giao việc, ủy quyền cho Agent tự thực hiện (Thực hành 2) | 9-16 | 35' |
| 4 | Vận hành Workflow tự động (Thực hành 3) | 17-30 | 30' |
| 5 | Tổng kết Module 5 | 31-33 | 8' |

## Tiêu chí chấm sản phẩm (10 điểm)
- Prompt giao việc nêu rõ yêu cầu, kết quả cần, nơi lưu: 2
- Agent thực hiện: kế hoạch, báo cáo kết quả, sản phẩm: 2
- Kế hoạch Workflow: Skill, Agent hoặc Sub-agent, công cụ, cách kích hoạt, điểm duyệt cho từng bước: 3
- Nhật ký chạy thử và một điều cải tiến: 2
- Dùng dữ liệu học sinh đúng quy tắc: 1

## Mẫu dùng trong bài (thư mục templates/)
- `cau-lenh-giao-viec-agent.md`: yêu cầu giao việc của 4 tác vụ mẫu (slide 12 đến 15) và câu lệnh chạy một Workflow
- `workflow_prototype.md`: kế hoạch Workflow tự động, có ví dụ đánh giá cuối kỳ và prompt cho Agent chính (slide 19 đến 23, Thực hành 3)
- `workflow_log.md`: nhật ký Agent tự ghi (slide 25)
- `permission-matrix.md`: bảng cấp quyền cho Agent, một số quyền thường gặp (slide 11)
- `privacy-checklist.md`: checklist 10 câu trước khi bật chạy tự động (tài liệu thêm, không trình chiếu)

## Nguồn (kiểm tra ngày 05/10/2026)
Anthropic
- Get started with Claude Cowork: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork ("describe an outcome, step away, and come back to finished work"; máy tính, web, điện thoại, Chrome; tác vụ chạy trên đám mây; Cowork và trò chuyện đang được gộp làm một)
- Let Claude use your computer in Cowork: https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork ("clicking, typing, and opening apps just like you would"; hỏi quyền từng ứng dụng; chặn sẵn ứng dụng đầu tư, tiền mã hóa)
- Assign tasks from anywhere in Claude Cowork (Dispatch): https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork
- Schedule recurring tasks in Claude Cowork: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork ("run on their cadence even when your computer is asleep or the Claude Desktop app is closed")
- Get started with Claude in Chrome: https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome (đọc, bấm, chuyển trang, điền form; nhiều tab; ghi lại quy trình; tác vụ trình duyệt định kỳ)
- Use Claude in Chrome safely: https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely (lệnh ẩn; ảnh chụp tab; hồ sơ trình duyệt riêng)
- Claude in Chrome permissions guide: https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide (ba chế độ Manually approve, Automatically approve, Skip all approvals; quyền theo trang web; việc luôn bị chặn)
- Use Claude Cowork safely: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely ("Switch to 'Manually approve' when the task touches sensitive files, accounts, or sites"; luôn hỏi trước khi xóa vĩnh viễn file)
- How Claude Code works: https://code.claude.com/docs/en/how-claude-code-works (vòng lặp gather context, take action, verify results; chế độ Auto, Manual, Accept edits, Plan)
- Use connectors to extend Claude's capabilities: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities (quyền từng công cụ: Always allow, Needs approval, Blocked)
- Use Google Workspace connectors: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors (Gmail gửi thư, Drive chia sẻ, di chuyển, xóa file, mặc định hỏi trước; Calendar tạo, sửa, xóa sự kiện; Docs, Sheets, Slides tạo và sửa)
- Create and edit files with Claude: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
- Use Research on Claude: https://support.claude.com/en/articles/11088861-use-research-on-claude
- Set up the Claude LTI in Canvas by Instructure: https://support.claude.com/en/articles/11725453-set-up-the-claude-lti-in-canvas-by-instructure
- Claude Code routines: https://code.claude.com/docs/en/routines
- Anthropic Academy: Introduction to Claude Cowork (bản dịch tham khảo: wiki "Claude Course 2026", mục 03); Claude 101 (Connectors)

OpenAI
- ChatGPT agent (Help Center): "ChatGPT agent is no longer available. Use ChatGPT Work for longer, multi-step tasks and finished deliverables."; xác nhận với hành động có hệ quả, watch mode, lệnh ẩn; lặp lại tác vụ hằng ngày, tuần, tháng (chatgpt.com/schedules)
- ChatGPT Work and Codex: https://help.openai.com/en/articles/20001275
- OpenAI Academy: Agents and Workflows (06/2026)
- Deep research FAQ: https://help.openai.com/en/articles/10500283-deep-research-faq
- Managing app permissions in ChatGPT: https://help.openai.com/en/articles/20001495-managing-app-permissions-in-chatgpt (Always ask, Allow read actions, Allow low-risk actions, Allow all actions; đối chiếu qua kết quả tìm kiếm vì trang trả lỗi 403 khi mở trực tiếp)

Google
- Use Gemini Spark: https://support.google.com/gemini/answer/16596215 (kết nối Gmail, Calendar, Drive, Docs, Sheets, Slides; lịch theo giờ hoặc sự kiện; hỏi trước khi gửi, sửa dữ liệu, mua hàng, nộp form; hiện dùng với tài khoản cá nhân)
- Chrome auto browse: https://blog.google/products-and-platforms/products/chrome/gemini-3-auto-browse/ (điền form, đặt lịch hẹn)
- Gemini in Chrome cho Workspace: https://support.google.com/chrome/a/answer/16291696
- Scheduled actions in Gemini Apps: https://support.google.com/gemini/answer/16316416
- Gemini Deep Research: https://support.google.com/gemini/answer/15719111

Pháp luật Việt Nam
- Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, thông qua ngày 26/06/2025, hiệu lực từ 01/01/2026.

## Điều chưa kiểm chứng được (ghi trong ghi chú giảng viên)
- Tên menu và tính năng của ChatGPT Work, Gemini Spark thay đổi nhanh; trang trợ giúp OpenAI không mở được trực tiếp khi biên soạn (lỗi 403), thông tin ChatGPT Work đối chiếu qua kết quả tìm kiếm.
- Các câu lệnh mẫu và Workflow mẫu là bản chuyển thể, chưa chạy thử trên LMS thật của trường.
- Thao tác LMS bằng trình duyệt phụ thuộc giao diện từng hệ thống; cần thử trước buổi dạy.
