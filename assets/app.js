// 极简交互：环境检测 + 时钟 + 一个按钮
const statusEl = document.getElementById("status");
const clockEl = document.getElementById("clock");
const pingBtn = document.getElementById("ping");

function describeEnv() {
  const where = location.protocol === "file:" ? "本地文件（双击打开）" : location.host;
  return `运行位置：${where} · 视口 ${window.innerWidth}×${window.innerHeight}`;
}

statusEl.textContent = `✅ 脚本已加载 —— ${describeEnv()}`;

let clicks = 0;
pingBtn.addEventListener("click", () => {
  clicks += 1;
  pingBtn.textContent =
    clicks === 1 ? "可以，我在跑 🎉" : `又点了一次（${clicks}）`;
});

function tick() {
  clockEl.textContent = `现在时间：${new Date().toLocaleString("zh-CN")}`;
}
tick();
setInterval(tick, 1000);

window.addEventListener("resize", () => {
  statusEl.textContent = `✅ 脚本已加载 —— ${describeEnv()}`;
});
