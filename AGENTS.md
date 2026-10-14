# Git 与 AI 协作规则

后续所有 AI 生成代码、提交 Git 记录、创建 PR 或合并 PR 时，必须遵守以下规则，不需要用户逐次重申。

- **Commit（包括 Squash 合并提交）**：Conventional Commits，格式为 `type(scope): 中文描述`。`type` 和 `scope` 均必填，使用英文小写；`subject` 必须包含中文。如 `docs(readme): 更新项目简介`。
- 类型可用：`build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test`；scope 仅英文小写、数字及 `._/-`。Commit 正文若有，也须有中文叙述；Footer 可保留 `Closes #123` 等英文 Issue 引用。
- **PR 标题、正文、Issue 标题、正文**：中文，技术名词、路径、命令可保留英文。
- **Squash and Merge**：必须显式指定中文 Conventional Commit 标题，不要依赖 GitHub 从 PR 标题自动生成。例如 `gh pr merge <编号> --squash --subject "docs(readme): 更新项目简介" --body "更新文档内容。"`，或调用 API 时传入 `commit_title` / `commit_message`。
- 工作流 `.github/workflows/commitlint.yml` 与 `.github/workflows/pr-language.yml` 会检查 Push 和 PR；本地可执行 `git config --local core.hooksPath .githooks` 启用 Commit Hook。
- GitHub Ruleset 的必需检查、限制绕过 PR 和最终提交信息规则需管理员额外启用；单靠 GitHub Actions 的 Push 失败不能阻止已经发生的直接提交或合并。
