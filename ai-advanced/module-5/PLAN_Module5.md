# Kế hoạch slide Module 5: Đóng gói kỹ năng và thiết kế quy trình AI nhiều tác vụ

Khóa: AI Fluency Course (nâng cao) cho giáo viên · Nền tảng: EduOne + dạy trực tiếp
Đối tượng: giáo viên Mầm non, Tiểu học, THCS/THPT, ĐH/CĐ đã học Module 1 đến 4
Thời lượng gợi ý: 4 buổi. LO 5.1 khoảng 150 phút (2 buổi), LO 5.2 và LO 5.3 mỗi bài khoảng 100 phút (29 + 22 + 33 = 84 slide)
Sản phẩm web: `module-5/index.html` (trang tổng quan), 3 bộ slide `lo-5-1.html`, `lo-5-2.html`, `lo-5-3.html`, bản PDF trong `pdf/`, mẫu dùng ngay trong `templates/`

---

## 1. Ý tưởng xuyên suốt: bậc thang 3 tầng

| Tầng | Là gì | Ẩn dụ trong trường học | LO |
|---|---|---|---|
| 1. Skill | Một việc, làm đúng mọi lần | Một quy trình mẫu có văn bản: ai làm cũng ra cùng chất lượng | 5.1 |
| 2. Agent | Một vai trò; AI tự lập kế hoạch, chọn bước, dùng nhiều Skill và công cụ, có Sub-agent khi cần | Một trợ lý chuyên trách (như giáo vụ phụ trách khảo thí) | 5.2 |
| 3. Workflow tự động | Agent kết nối công cụ (máy tính, trình duyệt, Drive, Gmail, lịch, LMS), tự thực hiện việc được giao, chạy theo kế hoạch; giáo viên duyệt ở điểm then chốt | Dây chuyền công việc chạy tự động | 5.3 |

Ví dụ xuyên suốt module (một câu chuyện, ba tầng):

- LO 5.1: Skill `viet-nhan-xet-hoc-sinh` (viết nhận xét học sinh cuối kỳ); `tham-dinh-nhan-xet` chỉ có trong thư viện mẫu của tổ (LO 5.1 không dạy Judge Skill, quyết định 07/10/2026).
- LO 5.2: Agent "Trợ lý Khảo thí Tổ Ngữ văn 9": nhận yêu cầu ra đề, tự lập kế hoạch và dùng nhiều Skill của tổ, Phần 5 giải thích Workflow khác Agent thế nào, Agent suy nghĩ thế nào và cách gọi Agent trong một bước của Workflow; Phần 3 tạo Agent mẫu "Trợ lý Nhận xét" từ 2 Skill của LO 5.1; Sub-agent và Agent Teams chỉ giới thiệu. các Sub-agent soạn song song, thẩm định độc lập, học sinh làm thử, soạn hướng dẫn chấm; LO 5.2 không trình bày điểm dừng; ví dụ ra đề bám cấu trúc đề của tổ.
- LO 5.3: Workflow tự động "Đánh giá cuối kỳ Ngữ văn 9": Agent Khảo thí soạn đề bằng các Skill của tổ, Sub-agent thẩm định độc lập, tổ trưởng duyệt đề; Agent tạo bài trên LMS; Sub-agent tổng hợp điểm từng lớp song song theo lịch; Agent Nhận xét viết nhận xét bằng Skill của LO 5.1; giáo viên duyệt. Bốn tác vụ mẫu: nghiên cứu và thu thập dữ liệu web, bài giảng lên LMS, khảo sát phụ huynh, tác vụ hẹn giờ.

Mỗi LO có thêm một slide ví dụ theo 4 cấp học (Mầm non, Tiểu học, THCS/THPT, ĐH/CĐ) như ghi chú trong master plan.

## 2. Những thay đổi so với bản nháp

1. Bỏ khái niệm "thẻ kỹ năng AI (Skill Card)" vì khó hiểu. Dạy thẳng khái niệm Skill như Anthropic định nghĩa (một thư mục có file `SKILL.md`). Nội dung "12 thành phần" trong syllabus được giữ lại, trình bày thành 12 mục của file `SKILL.md`, chia 4 nhóm: Nhận diện, Chuẩn bị, Thực thi và kiểm tra, Quản trị.
2. Bỏ dạng hội thoại comic Thầy Rùa và Bạch Tuộc. Mở bài bằng tình huống thực tế của giáo viên.
3. Bổ sung phần còn thiếu so với syllabus: "Phân biệt Project, Agent và Workflow" (mở rộng thành Project, Agent, Sub-agent và Workflow), "Agentic Workflow Map và Human Checkpoints", "bảng cấp quyền cho Agent", "checklist trước khi chạy tự động" (LO 5.3 dựng lại ngày 05/10/2026 theo hướng Agent tự thực hiện việc được giao). Mục "AI Custom Design Canvas" không dùng nữa (quyết định ngày 05/10/2026): AI Custom và Agent được gộp làm một khái niệm; phần thực hành thay bằng thêm Sub-agent soạn hướng dẫn chấm vào quy trình ra đề.
4. Sửa lỗi bản nháp: thứ tự 4D (Delegation, Description, Discernment, Diligence) bị đảo ở vòng tròn và ảnh minh họa; tiêu đề LO 5.3 bị ghi nhầm là LO 5.2; thư mục `agents/` không phải thành phần chuẩn của một Skill (chuẩn gồm `SKILL.md` và các thư mục tùy chọn `references/`, `scripts/`, `assets/`).
5. Chuyển ví dụ agent từ OpenAI Codex sang Claude Cowork làm ví dụ chính (vẫn nhắc Codex như một lựa chọn tương đương).
6. Thống nhất thuật ngữ 4D theo bản dịch khóa AI Fluency for Educators: Delegation (Giao việc), Description (Mô tả), Discernment (Phân định), Diligence (Cẩn trọng).
7. Mỗi slide một ý chính; mỗi phần có slide chuyển phần; cuối mỗi LO có "Kiểm tra nhanh" 3 câu tương tác; các mẫu (`SKILL.md`, instructions, workflow_prototype, workflow_log, checklist) có nút sao chép và có file mẫu trong `templates/`.

---

## 3. LO 5.1: Từ Prompt đến Skill: Đóng gói năng lực chuyên môn cho AI

Nguyên tắc trình bày: mỗi phần đi từ khái niệm và khung tư duy chung (không gắn với công cụ nào), đến nội dung cốt lõi, rồi mới đến ví dụ trên Claude (và ChatGPT, Gemini). Định nghĩa: Skill (kỹ năng AI) là một bộ hướng dẫn được đóng gói dưới dạng thư mục, giúp AI xử lý các tác vụ hoặc quy trình cụ thể. Hình dung xuyên suốt: Prompt là một yêu cầu, giống giao việc từng lần; Skill là một năng lực đã được đóng gói, giống đào tạo một nhân sự biết làm một nhóm việc cụ thể. Ví dụ xuyên suốt: Skill viết nhận xét học sinh cuối kỳ (môn Ngữ văn 9).

**Mục tiêu học tập.** Sau bài học, thầy cô có thể:

1. Giải thích Skill là gì, khác Prompt thế nào, khi nào nên dùng.
2. Mô tả cấu trúc một Skill và cơ chế AI kích hoạt Skill.
3. Xây dựng, triển khai, kiểm thử một Skill trên Claude, ChatGPT hoặc Gemini.
4. Tinh chỉnh, cải tiến Skill bằng AI và công cụ chuyên sâu skill-creator; tìm Skill có sẵn từ nguồn uy tín, kiểm tra trước khi dùng.
5. Phân biệt Skill với Project; chọn cách tổ chức công việc phù hợp.
6. Tái sử dụng, chia sẻ Skill cho đồng nghiệp và xây thư viện Skill của tổ.

**Sản phẩm:** 1 Skill tự viết (đã review, sửa, ghi 3 lần thử) và 1 Skill tạo bằng skill-creator (kèm 3 dòng so sánh), cả hai đăng ký vào thư viện Skill của tổ.

| # | Phần | Slide | Nội dung | Thời gian |
|---|---|---|---|---|
| 0 | Mở đầu | 1-2 | Bìa; Mục tiêu và lộ trình | 3' |
| 1 | Skill là gì, khác gì Prompt? | 3-7 | Định nghĩa, Skill là prompt lưu thành file (ví dụ của giáo viên); Hình dung: giao việc từng lần và đào tạo một nhân sự, so sánh với Prompt; Vì sao và khi nào cần (6 dấu hiệu, tương tác); Căn cứ trong hướng dẫn chính thức của Claude; Ví dụ cùng môn Ngữ văn 9 | 15' |
| 2 | Cấu trúc Skill và cơ chế kích hoạt | 8-13 | Thư mục tổng skills/, mỗi Skill một thư mục, file .md; Các thành phần của SKILL.md và checklist 12 mục; Skill mẫu hoàn chỉnh viết nhận xét học sinh; AI kích hoạt Skill thế nào; Nguyên lý cốt lõi của hệ thống vận hành Skill; Ví dụ trên Claude và ChatGPT | 20' |
| 3 | Xây dựng Skill và triển khai | 14-17 | Quy trình xây dựng Skill 4 bước (xác định nhiệm vụ, chuẩn hóa cách làm, xây dựng Skill, kiểm thử và hoàn thiện) và 4 nguyên tắc viết SKILL.md; Cấu trúc mô tả 3 phần theo Anthropic; Triển khai trên Claude, ChatGPT, Gemini; Thực hành 1 và 2 | 30' |
| 4 | Tinh chỉnh, cải tiến chất lượng Skill | 18-22 | Nhờ AI review và sửa; công cụ chuyên sâu skill-creator; demo tạo Skill bằng skill-creator; Tìm Skill có sẵn từ nguồn uy tín (Claude, ChatGPT, thư viện của tổ, cộng đồng; kiểm tra trước khi dùng); Thực hành 3: cải tiến Skill, tạo Skill bằng skill-creator | 35' |
| 5 | Skill, Project và cách tổ chức công việc | 23-24 | Project là gì, cấu trúc 3 thành phần; Rules, Project, Skill: khác nhau, khi nào dùng, ví dụ trên Claude | 10' |
| 6 | Tái sử dụng và chia sẻ Skill | 25-26 | Tái sử dụng cho Project khác và chia sẻ cho mọi người; Thư viện của tổ và Thực hành 4 | 15' |
| 7 | Tổng kết | 27-29 | 4D; Kiểm tra nhanh; Tổng kết | 10' |

## 4. LO 5.2: Thiết kế và xây dựng Agent, Sub-agent và Workflow

Mục lục chi tiết: `LO5.2_muc-luc.md` (22 slide, khoảng 100 phút, 2 hoạt động thực hành). Bản dựng lại ngày 05/10/2026: trọng tâm là tạo Agent; Sub-agent và Agent Teams chỉ giới thiệu; phần Workflow (bản 07/10/2026) chỉ tập trung vào khái niệm Workflow, cách Agent suy nghĩ và cách tạo, gọi Agent trong một bước của Workflow; điểm duyệt, kích hoạt và vận hành Workflow để LO 5.3. Định nghĩa Agent theo Anthropic: AI tự điều khiển cách làm việc và cách dùng công cụ; điểm dừng để người duyệt là lựa chọn thiết kế của quy trình, không thuộc định nghĩa; số người dùng không quyết định có cần Agent. Agent được tạo bằng file trong Claude Code (Codex, Gemini CLI tương tự); Project, GPT, Gem chỉ giữ bối cảnh cho trò chuyện. Sub-agent chỉ xuất hiện sau khi đã tạo Agent.

**Mục tiêu học tập.** Sau bài học, thầy cô có thể:

1. Giải thích Agent là gì, khác Skill và Project thế nào; nhận biết khi nào cần một Agent.
2. Thiết kế và tạo một Agent trên Claude bằng cách viết thủ công hoặc ra lệnh; chạy thử và sửa.
3. Nhận biết khi nào nên dùng Sub-agent, Agent Teams và cách yêu cầu AI dùng chúng.
4. Gọi Agent trong một bước của Workflow; phân biệt Workflow với Agent, đọc cách Agent suy nghĩ, chọn Skill và công cụ.

**Sản phẩm:** file Agent của thầy cô (hoặc Instructions tương đương trên Project, GPT, Gem) kèm kết quả 3 yêu cầu chạy thử; prompt gọi Agent trong một bước của Workflow, kèm kết quả chạy thử.

| # | Phần | Slide | Nội dung | Thời gian |
|---|---|---|---|---|
| 0 | Mở đầu | 1-2 | Bìa; Mục tiêu và lộ trình | 3' |
| 1 | Từ Skill đến Agent | 3-6 | Từ một việc đến một vai trò; Khi nào cần một Agent (5 dấu hiệu); Trợ lý Khảo thí Tổ Ngữ văn 9; Tạo Agent trên 3 nền tảng: Claude Code, Codex, Gemini CLI | 12' |
| 2 | Thiết kế và xây dựng Agent | 7-10 | Ba thành phần cốt lõi của một Agent; Cấu trúc một Agent: file .md (Trợ lý Nhận xét); Viết thủ công hoặc ra lệnh; Thực hành 1 kèm 3 yêu cầu thử | 32' |
| 3 | Sub-agent và Agent Teams (giới thiệu) | 11-13 | Agent chính chia việc, nhận lại bản tóm tắt; hai cách tạo Sub-agent; Agent Teams; Ví dụ theo cấp học | 11' |
| 4 | Agent trong Workflow | 14-19 | Workflow là gì, khác Agent thế nào; Agent suy nghĩ thế nào (thinking); 5 mẫu phối hợp; Tạo Trợ lý Khảo thí: file Agent; Gọi Agent trong một bước của Workflow; Thực hành 2 | 35' |
| 5 | Tổng kết | 20-22 | 4D; Kiểm tra nhanh; Tổng kết | 7' |

## 5. LO 5.3: Kết nối công cụ và vận hành Workflow tự động

Mục lục chi tiết: `LO5.3_muc-luc.md` (31 slide, khoảng 100 phút, 3 hoạt động thực hành). Bản dựng lại ngày 05/10/2026 theo định hướng mới: Agent tự thực hiện việc được giao (điều khiển máy tính, trình duyệt và điền form, tìm kiếm, nghiên cứu, thu thập và khảo sát dữ liệu, Drive, Gmail, lịch, tạo và chuyển đổi file, lập lịch, thao tác LMS). Bỏ slide "lầm tưởng và sự thật" của bản nháp vì trái với năng lực thực tế (kết nối Google Drive của Claude chia sẻ được file, Gmail gửi được thư, mặc định hỏi trước). MCP chỉ giới thiệu như cổng giao tiếp chung. Rủi ro, đạo đức, kiểm soát chất lượng chuyên sâu để Module 6.

**Mục tiêu học tập.** Sau bài học, thầy cô có thể:

1. Mô tả các nhóm việc Agent tự làm được khi kết nối với ứng dụng, trình duyệt và máy tính.
2. Kết nối Agent với công cụ; chọn chế độ thực thi và cấp quyền phù hợp với từng việc.
3. Giao việc nhiều bước theo vòng lặp giao việc: nêu rõ yêu cầu, duyệt kế hoạch, rà soát báo cáo kết quả.
4. Vận hành Workflow tự động do Agent điều phối Sub-agent, Skill và công cụ: lập kế hoạch, chọn cách kích hoạt và điểm duyệt, theo dõi nhật ký.
5. Đóng gói Workflow thành Plugin cho cả tổ: phân biệt Plugin với Skill, dùng Plugin có sẵn, cài và cập nhật đồng bộ.

**Sản phẩm:** một việc nhiều bước đã giao cho Agent thực hiện (prompt, kế hoạch, báo cáo kết quả, sản phẩm); `workflow_prototype.md` có công cụ, quyền, lịch chạy, điểm duyệt cho từng bước; `workflow_log.md` của lần chạy thử.

| # | Phần | Slide | Nội dung | Thời gian |
|---|---|---|---|---|
| 0 | Mở đầu | 1-2 | Bìa; Mục tiêu và lộ trình | 3' |
| 1 | Agent tự làm được những gì | 3-5 | Từ trò chuyện sang giao việc; Chín nhóm việc; Một tuần làm việc cùng Agent | 12' |
| 2 | Kết nối công cụ | 6-8 | Ba đường kết nối qua giao thức MCP; Agent trên Claude, ChatGPT, Gemini theo ba đường kết nối; Thực hành 1: chuẩn bị kết nối, bước khởi đầu | 14' |
| 3 | Giao việc, ủy quyền cho Agent tự thực hiện | 9-16 | Vòng lặp giao việc (Agent xin quyền, giáo viên chấp thuận); Chế độ thực thi trên Claude, ChatGPT, Gemini; Phân quyền cho Agent; 4 tác vụ mẫu kèm prompt và cách Agent chọn công cụ; Thực hành 2 | 35' |
| 4 | Vận hành Workflow tự động | 17-30 | Workflow đầy đủ ghép Skill, Agent, Sub-agent; Workflow mẫu đánh giá cuối kỳ; File kế hoạch và prompt cho Agent chính; Nội dung file workflow_prototype.md; Ba cách đưa kế hoạch cho Agent (mô tả trong prompt, AI tạo file .md từ mô tả, chụp ảnh); Kích hoạt Workflow (theo yêu cầu, theo sự kiện, theo lịch); Nhật ký và cải tiến; Vì sao cần đóng gói thành Plugin, Plugin khác Skill thế nào; Dùng Plugin thế nào, tìm Plugin có sẵn trên Claude, ChatGPT; Đóng gói thành Plugin; Rủi ro; Thực hành 3 | 30' |
| 5 | Tổng kết Module 5 | 31-33 | 4D; Kiểm tra nhanh; Tổng kết nội dung cốt lõi của Skill, Agent, Workflow tự động | 8' |

---

## 6. Đối chiếu với khóa học chính chủ của Anthropic (Claude Academy)

Danh mục khóa: https://academy.claude.com/courses (trước đây là anthropic.skilljar.com)

| Phần của Module 5 | Khóa hoặc tài liệu chính chủ | Ý được dùng |
|---|---|---|
| LO 5.1 | Introduction to Agent Skills (6 bài) | Skill là thư mục có `SKILL.md`; `name` và `description` quyết định việc tự kích hoạt; nạp theo 3 tầng (progressive disclosure); chia sẻ; xử lý sự cố |
| LO 5.1 | Claude 101: Working with skills; Help Center "Creating custom skills" | Tạo Skill bằng hội thoại (skill-creator); tải lên file .zip; `description` nên dưới 200 ký tự trên claude.ai |
| LO 5.1 | Bài blog "Skills explained" | Prompt, Skill, Project, Subagent, MCP khác nhau thế nào; "gõ lại cùng một prompt nhiều lần thì đã đến lúc tạo Skill" |
| LO 5.2 | Claude 101: Introduction to projects | Project lưu kiến thức nền và hướng dẫn chung |
| LO 5.2 | Introduction to Subagents (4 bài) | Sub-agent làm việc trong ngữ cảnh riêng, chỉ gửi tóm tắt về; khi nào nên và không nên dùng |
| LO 5.2 | Claude Code docs: Extend Claude Code, Subagents, Agent teams | Sub-agent nhận việc và báo cáo về Agent chính; Agent Teams (thử nghiệm); tạo Sub-agent bằng câu lệnh hoặc file .md |
| LO 5.2 | Building Effective Human-Agent Teams | 4 nguyên tắc: vai trò rõ, mục tiêu viết thành văn bản, trao quyền dần, quyền truy cập thông tin vừa đủ |
| LO 5.2 | Bài kỹ thuật "Building effective agents" | Workflow và Agent; 5 mẫu: nối chuỗi, phân luồng, song song, điều phối, soạn và thẩm định; bắt đầu từ giải pháp đơn giản nhất |
| LO 5.2 | Bài kỹ thuật "How we built our multi-agent research system" | Hệ nhiều agent dùng khoảng 15 lần tài nguyên so với chat; hợp với việc chia nhỏ song song |
| LO 5.3 | Claude 101: Connecting your tools; Help Center: Use Google Workspace connectors | MCP như cổng giao tiếp chung (USB-C cho AI); Agent đọc, gửi thư, xếp lịch, chia sẻ file trên Drive |
| LO 5.3 | Introduction to Claude Cowork (Anthropic Academy); OpenAI Academy: Agents and Workflows | Vòng lặp giao việc; giao việc để agent tự thực hiện; con người duyệt ở đâu; tác vụ hẹn giờ |
| LO 5.3 | Help Center: Claude Cowork, Claude in Chrome, Schedule recurring tasks; ChatGPT Work; Gemini Spark | Dùng máy tính, trình duyệt, điền form; lịch chạy; bước hỏi trước có sẵn; lệnh ẩn |
| Xuyên suốt | AI Fluency: Framework and Foundations; AI Fluency for Educators; Teaching AI Fluency | 4D và 12 tiểu năng lực; 3 chế độ tương tác; vòng Description và Discernment; vòng Delegation và Diligence |

Bản dịch tiếng Việt tham khảo nội bộ: wiki "Claude Course 2026" (Transform Group, Lark).

## 7. Đánh giá

- Mỗi LO: "Kiểm tra nhanh" 3 câu trong slide (tương tác).
- Thực hành LO 5.1 chấm Skill tự viết theo thang 10 điểm: đủ 12 mục (3), mô tả đúng công thức và AI kích hoạt đúng khi thử (2), các bước và định dạng đầu ra rõ, có ví dụ (2), có bảng review và ít nhất 1 lần sửa ghi nhật ký (2), có quy tắc dữ liệu học sinh (1).
- LO 5.2 và 5.3 đánh giá theo sản phẩm bàn giao (danh sách trong slide tổng kết mỗi LO).

## 8. Ghi chú kiểm chứng

- Số liệu và trích dẫn Anthropic đã kiểm tra trên trang chính thức ngày 04/10/2026. Giao diện và gói dịch vụ của Claude, Gemini, ChatGPT thay đổi thường xuyên: nên kiểm tra lại đường dẫn menu trước mỗi đợt dạy.
- Nhãn menu trên claude.ai trong slide: Tùy chỉnh (Customize) > Skills; bật "Thực thi mã và tạo tệp" (Code execution) trong Cài đặt > Tính năng.
