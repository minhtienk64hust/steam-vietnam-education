# LO 5.2 · Thiết kế và xây dựng Agent, Sub-agent và Workflow: mục lục (bản 17, 22 slide)

Thời lượng: khoảng 100 phút, có 2 hoạt động thực hành (khoảng 27 phút).

Nguyên tắc trình bày: mỗi phần đi theo thứ tự **khái niệm, khung tư duy chung** (không gắn với công cụ nào) → **nội dung cốt lõi** → **ví dụ trên Claude** (và ChatGPT, Gemini khi có).

Trọng tâm (quyết định ngày 05/10/2026): **tạo Agent**. Sub-agent và Agent Teams chỉ giới thiệu (2 slide), sau khi đã tạo Agent; Phần 1 và 2 không nhắc Sub-agent. Phần Workflow minh họa tạo **một** Agent, Trợ lý Khảo thí, trong quy trình ra đề. Bản 11 (07/10/2026): phần Agent trong Workflow chỉ tập trung vào khái niệm Workflow, cách Agent suy nghĩ (thinking) và cách tạo, gọi Agent trong một bước của Workflow; bỏ Human Checkpoint, Workflow Map mẫu, chạy và duyệt tại checkpoint vì LO 5.3 đã trình bày điểm duyệt và vận hành Workflow.

Định nghĩa dùng trong bài:
- **Agent** (tác nhân AI): AI tự điều khiển cách làm việc để hoàn thành nhiệm vụ: tự lập kế hoạch, chọn bước, dùng công cụ, xem kết quả rồi làm tiếp (theo Anthropic, agent là hệ thống trong đó AI "dynamically direct their own processes and tool usage"). Agent cho một vai trò được cấu hình bằng hướng dẫn (vai trò, cách làm, đầu ra, giới hạn), kiến thức nền, các Skill và công cụ được dùng. Điểm dừng để người duyệt và số người dùng không thuộc định nghĩa Agent. Agent được tạo bằng file: Claude Code (.claude/agents/*.md, chạy bằng claude --agent; Cowork qua plugin), OpenAI Codex (.codex/agents/*.toml), Gemini CLI (.gemini/agents/*.md). Project của Claude, GPT của ChatGPT, Gem của Gemini giữ bối cảnh cho trò chuyện, không phải Agent.
- **Sub-agent** (agent con): agent nhận một phần việc từ Agent chính, làm trong ngữ cảnh riêng với hướng dẫn, công cụ, quyền riêng, rồi gửi kết quả tóm tắt về.
- **Agent Teams** (đội agent, thử nghiệm trên Claude Code): một phiên làm trưởng nhóm, các thành viên dùng danh sách việc chung và nhắn trực tiếp cho nhau.
- **Project**: không gian làm việc có ngữ cảnh, chứa tài liệu và hướng dẫn chung cho nhiều cuộc trò chuyện.
- **Workflow**: quy trình có các bước định sẵn do con người thiết kế; mỗi bước giao cho người hoặc Agent; điểm duyệt của con người đặt ở các bước rủi ro.

Ví dụ: Phần 2 dùng Agent "Trợ lý Nhận xét" (dùng 2 Skill của LO 5.1); Phần 4 dùng Agent "Trợ lý Khảo thí" Tổ Ngữ văn 9 (soạn đề theo cấu trúc đề của tổ, tự thẩm định, soạn hướng dẫn chấm; LO 5.2 không trình bày điểm dừng, phần duyệt ở LO 5.3). Vai trò người: giáo viên bộ môn, tổ trưởng chuyên môn (không dùng tên riêng). Quy tắc dữ liệu: giáo viên làm việc bình thường với họ tên học sinh; chỉ dùng thông tin cần cho việc đang làm, không đưa thông tin nhạy cảm (hoàn cảnh gia đình, sức khỏe, số điện thoại, địa chỉ).

## Mục tiêu học tập

Sau bài học, thầy cô có thể:
1. Giải thích Agent là gì, khác Skill và Project thế nào; nhận biết khi nào cần một Agent.
2. Thiết kế và tạo một Agent trên Claude bằng cách viết thủ công hoặc ra lệnh; chạy thử và sửa.
3. Nhận biết khi nào nên dùng Sub-agent, Agent Teams và cách yêu cầu AI dùng chúng.
4. Gọi Agent trong một bước của Workflow; phân biệt Workflow với Agent, đọc cách Agent suy nghĩ, chọn Skill và công cụ.

**Sản phẩm:** file Agent của thầy cô (hoặc Instructions tương đương trên Project, GPT, Gem) kèm kết quả 3 yêu cầu chạy thử; prompt gọi Agent trong một bước của Workflow, kèm kết quả chạy thử.

## Mở đầu (slide 1-2 · 3 phút)
1. Bìa: Thiết kế và xây dựng Agent, Sub-agent và Workflow
2. Mục tiêu và lộ trình bài học

## Phần 1. Từ Skill đến Agent (slide 3-6 · 12 phút)
3. Từ Skill đến Agent: từ một việc đến một vai trò (định nghĩa Agent (tác nhân AI) theo Anthropic; công thức hướng dẫn + kiến thức nền + Skill, công cụ + AI tự chọn bước = Agent cho một vai trò; bảng Skill và Agent có hàng Cách làm việc; hiểu đúng: AI tự ghép nhiều Skill trong một cuộc trò chuyện)
4. Khi nào cần một Agent? (5 dấu hiệu: nhiều việc lặp lại theo đợt, nhiều bước khó định trước, dùng nhiều Skill và công cụ có tự kiểm tra, cùng tài liệu nền, ranh giới rõ; bấm chọn được, từ 3 dấu hiệu thì nên tạo)
5. Một Agent cho một vai trò: Trợ lý Khảo thí Tổ Ngữ văn 9 (một yêu cầu, Agent đọc hướng dẫn và tài liệu nền, tự mở các Skill khớp mô tả, dừng chờ duyệt theo thiết kế; mỗi thành phần nằm ở đâu trong Claude Code; ai quyết định điều gì)
6. Tạo Agent trên 3 nền tảng: Claude Code, Codex, Gemini CLI (dùng ở đâu; cách cấu hình bằng file .md hoặc .toml; tự làm nhiều bước; Project, GPT, Gem không phải Agent)


## Phần 2. Thiết kế và xây dựng Agent (slide 7-10 · 32 phút)
7. Ba thành phần cốt lõi của một Agent (mô hình, hướng dẫn, công cụ, theo OpenAI và Google ADK; viết hướng dẫn rõ ràng theo 4 nguyên tắc của OpenAI; bắt đầu đơn giản, kiểm thử rồi mở rộng theo Anthropic và OpenAI). Bỏ khung "4 bước" (quyết định 07/10/2026)
8. Cấu trúc một Agent: file .md (file `tro-ly-nhan-xet.md` bên trái; thẻ Phần đầu, thông tin nhận diện (frontmatter): name, description, tools, skills; thẻ Phần thân, hướng dẫn (Markdown): vai trò, cách làm, đầu ra, giới hạn; cuối cùng: viết description chưa rõ và rõ ràng)
9. Tạo Agent trên Claude: viết thủ công hoặc ra lệnh (viết file trước; nhờ Claude tạo sau; dùng: claude --agent, gọi tên)
10. Thực hành 1 (15'): tạo Agent của mình (3 bước: chọn vai trò, viết file Agent, chạy thử và sửa; khung file Agent điền chỗ trống `agents/khung-agent.md`; gợi ý vai trò theo cấp học; 3 yêu cầu thử kèm phần của file mà mỗi yêu cầu kiểm tra)

## Phần 3. Sub-agent và Agent Teams: giới thiệu (slide 11-13 · 11 phút)
11. Sub-agent: Agent chính chia việc, nhận lại bản tóm tắt (sơ đồ cùng kiểu slide Agent Teams: Agent chính giao việc, ba Sub-agent làm trong ngữ cảnh riêng rồi gửi báo cáo tóm tắt; nên dùng, không nên dùng, mỗi dòng kèm ví dụ; ví dụ thẩm định đề: câu lệnh "Dùng 3 Sub-agent..." và bản tổng hợp ba báo cáo; hai cách tạo Sub-agent: nêu trong câu lệnh (AI tự tạo, không cần chuẩn bị trước) hoặc tạo file .md trong .claude/agents/ để dùng lại, gõ @ để gọi; lời giao việc phải tự đủ)
12. Agent Teams: nhiều agent làm việc như một đội (sơ đồ trưởng nhóm, danh sách việc chung, thành viên trao đổi trực tiếp; nên dùng, không nên dùng; ví dụ đội 3 thành viên kiểm chứng giả thuyết về điểm Đọc hiểu; cách bật, quy mô, theo dõi; không bắt buộc thực hành); câu lệnh mẫu nêu rõ "Dùng Agent Teams gồm 3 thành viên"
13. Ví dụ theo cấp học: Agent và Sub-agent (mỗi ví dụ bắt đầu từ một Agent; khi nào thêm Sub-agent)

## Phần 4. Agent trong Workflow (slide 14-19 · 35 phút)
14. Workflow là gì, khác Agent thế nào (định nghĩa theo Anthropic; ba thẻ Workflow, Agent, Agent trong Workflow, mỗi thẻ nêu phù hợp với việc gì)
15. Agent suy nghĩ thế nào (slide tương tác: 4 bước đọc yêu cầu và hướng dẫn, suy nghĩ và lập kế hoạch, chọn Skill và công cụ theo mô tả, thực hiện và kiểm tra; giao diện minh họa Claude và ChatGPT đang chạy, có khung Thinking và các dòng công cụ, ví dụ Trợ lý Khảo thí; xem quá trình suy nghĩ trên Claude, ChatGPT, Gemini; Agent hiểu sai thì sửa mô tả hoặc hướng dẫn)
16. 5 mẫu phối hợp nhiều bước (theo Building effective agents; ra đề với Trợ lý Khảo thí = Nối chuỗi + Soạn và thẩm định)
17. Tạo Trợ lý Khảo thí: file Agent (slide tương tác nối với 5 mẫu ở slide 16: file áp dụng bốn mẫu Nối chuỗi, Song song, Điều phối và thực thi, Soạn và thẩm định; Agent chính chia đề cho Sub-agent soan-phan-de soạn song song, ghép đề, giao Sub-agent tham-dinh-de-kiem-tra thẩm định độc lập; tools: Read, Write, Agent(soan-phan-de, tham-dinh-de-kiem-tra); chạy bằng claude --agent)
18. Gọi Agent trong một bước của Workflow (Workflow 4 bước, Agent ở bước 2 và 4; ba cách gọi trên Claude Code: gọi theo tên, claude --agent, Claude tự gọi theo mô tả; mỗi lần gọi nêu đủ tên Agent, đầu vào, đầu ra)
19. Thực hành 2 (12'): gọi Agent trong một bước của Workflow (chọn bước giao cho Agent của Thực hành 1, viết prompt gọi Agent, chạy thử và đọc quá trình suy nghĩ; bảng sửa đúng chỗ; tự kiểm 4 mục). Không dùng Workflow Map (quyết định 07/10/2026)

## Phần 5. Tổng kết (slide 20-22 · 7 phút)
20. Khung 4D khi tạo Agent và đặt vào Workflow
21. Câu hỏi ôn tập (3 câu: AI dùng nhiều Skill trong một cuộc trò chuyện; giới hạn công cụ và phần Giới hạn; đọc quá trình suy nghĩ để sửa đúng chỗ)
22. Tổng kết LO 5.2 (nội dung cốt lõi của bốn phần; chuyển sang LO 5.3; không có sản phẩm nộp)

## Bảng tóm tắt

| # | Phần | Slide | Thời gian |
|---|---|---|---|
| 0 | Mở đầu | 1-2 | 3' |
| 1 | Từ Skill đến Agent | 3-6 | 12' |
| 2 | Thiết kế và xây dựng Agent (Thực hành 1) | 7-10 | 32' |
| 3 | Sub-agent và Agent Teams (giới thiệu) | 11-13 | 11' |
| 4 | Agent trong Workflow (Thực hành 2) | 14-19 | 35' |
| 5 | Tổng kết | 20-22 | 7' |


## Mẫu dùng trong bài (thư mục templates/)
- `agents/tro-ly-nhan-xet.md`: Agent mẫu của Phần 2, dùng 2 Skill của LO 5.1 (slide 8 đến 10)
- `agents/khung-agent.md`: khung file Agent điền chỗ trống cho Thực hành 1 (slide 10)
- `agents/tro-ly-khao-thi.md`: Agent Trợ lý Khảo thí của Phần 4; hai Sub-agent đi kèm `agents/soan-phan-de.md`, `agents/tham-dinh-de-kiem-tra.md` (slide 15, 17, 18)
- `plugins/khao-thi-ngu-van-9/` và `.zip` (bản 2.0.0): Agent Trợ lý Khảo thí và Skill `tham-dinh-cau-hoi`, tải lên Customize > Plugins để dùng trong Cowork; nay chỉ dùng ở LO 5.3 (LO 5.2 không dạy Plugin)
- `goi-agent-trong-workflow.md`: phiếu Thực hành 2: bước giao cho Agent, prompt gọi Agent, kết quả chạy thử và các chỗ đã sửa (slide 19)
- Đã xóa ngày 07/10/2026 vì không còn dùng: `agents/hoc-sinh-lam-thu.md`, `agents/soan-dap-an-huong-dan-cham.md`, `ai-custom-design-canvas.md`, `ai-custom-canvas.md`, `instructions-tro-ly-khao-thi.md` (bản trùng), `skills/tham-dinh-cau-hoi/` và `.zip` (Skill này đã có trong Plugin mẫu). Giữ `tro-ly-khao-thi-instructions.md` (bản cho Project, GPT, Gem) vì trang chủ có liên kết tải.

## Liên kết với LO khác
- LO 5.1: Skill, SKILL.md, kích hoạt theo mô tả, nguyên lý Composability (slide 12). Plugin học ở LO 5.3. LO 5.2 không dạy lại, chỉ dẫn chiếu; Agent mẫu ở Phần 2 dùng lại 2 Skill của LO 5.1.
- LO 5.3: kết nối công cụ (máy tính, trình duyệt, Drive, Gmail, lịch, LMS), phân quyền cho Agent, giao việc cho Agent tự thực hiện, vận hành Workflow đầy đủ (file kế hoạch, điểm duyệt, kích hoạt, nhật ký, Plugin). LO 5.2 chỉ nêu nguyên tắc "công cụ tối thiểu cho Agent" và dẫn sang LO 5.3.

## Nguồn (kiểm tra ngày 05/10/2026)

Anthropic
- Building effective agents (Erik Schluntz, Barry Zhang, 19/12/2024): https://www.anthropic.com/engineering/building-effective-agents. Định nghĩa workflow và agent ("systems where LLMs dynamically direct their own processes and tool usage"; "LLMs using tools based on environmental feedback in a loop"); ba nguyên tắc: simplicity, transparency, documentation and testing; 5 mẫu: prompt chaining, routing, parallelization (sectioning, voting), orchestrator-workers, evaluator-optimizer; "finding the simplest solution possible, and only increasing complexity when needed"; agent "can pause for human feedback at checkpoints or when encountering blockers".
- How we built our multi-agent research system (13/06/2025): https://www.anthropic.com/engineering/multi-agent-research-system. Hệ nhiều agent dùng khoảng 15 lần token so với trò chuyện; hợp với việc song song, không hợp khi các agent cần chung ngữ cảnh hoặc phụ thuộc nhiều vào nhau; giao việc cho Sub-agent cần "an objective, an output format, guidance on the tools and sources to use, and clear task boundaries".
- Our framework for developing safe and trustworthy agents (04/08/2025): https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents. "humans should retain control over how their goals are pursued, particularly before high-stakes decisions".
- Claude Code docs, Extend Claude Code: https://code.claude.com/docs/en/features-overview. Skill và Subagent; "They can combine. A subagent can preload specific skills."; Plugins là lớp đóng gói.
- Claude Code docs, Subagents: https://code.claude.com/docs/en/sub-agents. Định nghĩa, lợi ích, Sub-agent có sẵn (Explore, Plan, general-purpose), tạo bằng cách nhờ Claude hoặc viết file .md, trường name, description, tools, model, skills, nơi lưu, cách gọi; lệnh /agents ở bản mới chỉ nhắc hai cách tạo, bản v2.1.197 trở về trước có trình hướng dẫn.
- Claude Code docs, Subagents (chạy một agent làm Agent chính): "Pass --agent <name> to start a session where the main thread itself takes on that subagent's tool restrictions and model"; đặt "agent" trong .claude/settings.json để mặc định cho dự án. Giao việc và báo cáo: "Each subagent starts with a fresh, isolated context window"; "returns only the summary".
- OpenAI Codex, Subagents: https://learn.chatgpt.com/docs/agent-configuration/subagents. "To define your own custom agents, add standalone TOML files under ~/.codex/agents/ for personal agents or .codex/agents/ for project-scoped agents"; trường bắt buộc name, description, developer_instructions; dùng ở Codex CLI, extension IDE, ứng dụng ChatGPT trên máy tính.
- Gemini CLI, Subagents (từ 04/2026): https://geminicli.com/docs/core/subagents/. File .gemini/agents/*.md hoặc ~/.gemini/agents/*.md; "The body of the markdown file becomes the agent's System Prompt"; gọi bằng @tên.
- Claude Code docs, Agent teams: https://code.claude.com/docs/en/agent-teams. Thử nghiệm, tắt mặc định, bật bằng CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1; so sánh với Sub-agent; 3 đến 5 thành viên; bắt đầu từ nghiên cứu và rà soát.
- Claude Code docs, Permission modes: https://code.claude.com/docs/en/permission-modes. "In Manual mode, Claude Code stops and asks you before most actions that edit files..."; ở chế độ auto, mô hình phân loại duyệt thay người.
- Claude Help Center, Get started with Cowork: https://support.claude.com/en/articles/13345190-get-started-with-cowork. Gói Pro, Max, Team, Enterprise; "Claude breaks complex work into smaller tasks and coordinates parallel workstreams to complete them."
- Anthropic Academy: Introduction to Subagents (4 bài; nguyên tắc "phần việc trung gian có quan trọng không"; các mẫu nên tránh); Building Effective Human-Agent Teams (4 nguyên tắc: clear roles, a written north star, gradual release, the right information access): https://academy.claude.com/courses/building-effective-human-agent-teams. Bản dịch tham khảo: wiki "Claude Course 2026" (Lark), bài 16.2, 16.3.
- Agent Skills: nguyên lý Composability, "Claude can load multiple skills simultaneously" (The Complete Guide to Building Skills for Claude), đã dùng ở LO 5.1.

Google
- Use Gems in Gemini Apps: https://support.google.com/gemini/answer/15146780 (Gems > New Gem; Instructions, Knowledge; "Gems transition to skills beginning November 2026").
- About the transition to skills (Google Workspace Admin): https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills (Workspace doanh nghiệp không sớm hơn 01/03/2027, giáo dục không sớm hơn 01/06/2027; định dạng SKILL.md).
- Gemini Spark (trước là Gemini Agent): https://support.google.com/gemini/answer/16596215.
- Tin tổng hợp về mốc 17/11/2026 với tài khoản cá nhân: Android Central, TechRepublic (10/2026).

OpenAI (trang chính thức trả lỗi 403 khi kiểm tra, đã đối chiếu qua tin tổng hợp; cần kiểm tra lại trước buổi dạy)
- Creating a GPT: https://help.openai.com/en/articles/8554397.
- ChatGPT agent: https://help.openai.com/en/articles/11752874.
- Introducing AgentKit (10/2025): Agent Builder có bước User approval; dành cho nhà phát triển.
- Introducing workspace agents in ChatGPT (22/04/2026): gói Business, Enterprise, Edu, Teachers; GPT vẫn dùng được.

## Điều chưa kiểm chứng được (ghi trong ghi chú giảng viên)
- Tên menu và quyền theo gói của ChatGPT (GPT, agent mode, workspace agents): trang trợ giúp OpenAI không truy cập được khi biên soạn.
- Trường `skills` có nạp sẵn Skill khi chạy agent bằng `claude --agent` hay không: tài liệu chỉ nêu công cụ và mô hình; Agent vẫn tự mở Skill theo mô tả.
- Tên công cụ Read, Write trong trường `tools`: đúng với Claude Code; trong Cowork chưa kiểm tra.
- Các câu lệnh tạo Agent và đội agent trong slide là bản chuyển thể từ ví dụ chính thức, chưa chạy thử; cách tạo và gọi Agent trong Codex, Gemini CLI chưa chạy thử.
