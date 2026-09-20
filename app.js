const BUILTIN_DICT = {
  "article": {
    "ipa": "/ˈɑːrtɪkəl/",
    "pos": "noun",
    "ko": "기사, 글, 조항",
    "ex": "I read an article about AI.",
    "exKo": "나는 AI에 관한 기사를 읽었다."
  },
  "source": {
    "ipa": "/sɔːrs/",
    "pos": "noun",
    "ko": "출처, 원천",
    "ex": "Check the source before sharing.",
    "exKo": "공유하기 전에 출처를 확인하라."
  },
  "claim": {
    "ipa": "/kleɪm/",
    "pos": "noun / verb",
    "ko": "주장, 주장하다; 청구하다",
    "ex": "The company denied the claim.",
    "exKo": "그 회사는 그 주장을 부인했다."
  },
  "evidence": {
    "ipa": "/ˈevɪdəns/",
    "pos": "noun",
    "ko": "증거, 근거",
    "ex": "There is little evidence for the claim.",
    "exKo": "그 주장에 대한 근거는 거의 없다."
  },
  "research": {
    "ipa": "/rɪˈsɝːtʃ/",
    "pos": "noun / verb",
    "ko": "연구, 조사하다",
    "ex": "Researchers found a link.",
    "exKo": "연구자들이 관련성을 발견했다."
  },
  "study": {
    "ipa": "/ˈstʌdi/",
    "pos": "noun / verb",
    "ko": "연구, 공부하다",
    "ex": "A new study was published.",
    "exKo": "새 연구가 발표되었다."
  },
  "policy": {
    "ipa": "/ˈpɑːləsi/",
    "pos": "noun",
    "ko": "정책, 방침",
    "ex": "The policy changed last year.",
    "exKo": "그 정책은 작년에 바뀌었다."
  },
  "public": {
    "ipa": "/ˈpʌblɪk/",
    "pos": "adjective / noun",
    "ko": "공공의, 대중의",
    "ex": "Public interest is growing.",
    "exKo": "대중의 관심이 커지고 있다."
  },
  "private": {
    "ipa": "/ˈpraɪvət/",
    "pos": "adjective",
    "ko": "민간의, 사적인",
    "ex": "Private companies joined the project.",
    "exKo": "민간 기업들이 그 사업에 참여했다."
  },
  "government": {
    "ipa": "/ˈɡʌvərnmənt/",
    "pos": "noun",
    "ko": "정부",
    "ex": "The government announced a plan.",
    "exKo": "정부가 계획을 발표했다."
  },
  "official": {
    "ipa": "/əˈfɪʃəl/",
    "pos": "noun / adjective",
    "ko": "공무원, 관계자; 공식적인",
    "ex": "Officials confirmed the news.",
    "exKo": "관계자들이 그 소식을 확인했다."
  },
  "local": {
    "ipa": "/ˈloʊkəl/",
    "pos": "adjective / noun",
    "ko": "지역의, 현지의; 지역 주민",
    "ex": "Local officials met residents.",
    "exKo": "지역 관계자들이 주민들을 만났다."
  },
  "global": {
    "ipa": "/ˈɡloʊbəl/",
    "pos": "adjective",
    "ko": "세계적인, 전 지구의",
    "ex": "Global demand is rising.",
    "exKo": "세계 수요가 증가하고 있다."
  },
  "market": {
    "ipa": "/ˈmɑːrkɪt/",
    "pos": "noun",
    "ko": "시장",
    "ex": "The market is changing quickly.",
    "exKo": "시장이 빠르게 변하고 있다."
  },
  "economy": {
    "ipa": "/ɪˈkɑːnəmi/",
    "pos": "noun",
    "ko": "경제",
    "ex": "The economy slowed down.",
    "exKo": "경제가 둔화되었다."
  },
  "cost": {
    "ipa": "/kɔːst/",
    "pos": "noun / verb",
    "ko": "비용; 비용이 들다",
    "ex": "The project cost more than expected.",
    "exKo": "그 사업은 예상보다 비용이 더 들었다."
  },
  "increase": {
    "ipa": "/ɪnˈkriːs/",
    "pos": "verb / noun",
    "ko": "증가하다; 증가",
    "ex": "Costs continue to increase.",
    "exKo": "비용이 계속 증가하고 있다."
  },
  "decrease": {
    "ipa": "/dɪˈkriːs/",
    "pos": "verb / noun",
    "ko": "감소하다; 감소",
    "ex": "Demand decreased slightly.",
    "exKo": "수요가 약간 감소했다."
  },
  "risk": {
    "ipa": "/rɪsk/",
    "pos": "noun / verb",
    "ko": "위험, 위험요인; 위험을 감수하다",
    "ex": "The risk is relatively low.",
    "exKo": "위험은 비교적 낮다."
  },
  "benefit": {
    "ipa": "/ˈbenəfɪt/",
    "pos": "noun / verb",
    "ko": "이익, 혜택; 도움이 되다",
    "ex": "The change could benefit workers.",
    "exKo": "그 변화는 노동자들에게 도움이 될 수 있다."
  },
  "challenge": {
    "ipa": "/ˈtʃælɪndʒ/",
    "pos": "noun / verb",
    "ko": "도전, 과제; 이의를 제기하다",
    "ex": "Climate change is a major challenge.",
    "exKo": "기후변화는 큰 과제다."
  },
  "likely": {
    "ipa": "/ˈlaɪkli/",
    "pos": "adjective / adverb",
    "ko": "가능성이 있는, 아마",
    "ex": "Prices are likely to rise.",
    "exKo": "가격은 오를 가능성이 있다."
  },
  "however": {
    "ipa": "/haʊˈevər/",
    "pos": "adverb",
    "ko": "그러나, 하지만",
    "ex": "However, the plan has risks.",
    "exKo": "그러나 그 계획에는 위험이 있다."
  },
  "although": {
    "ipa": "/ɔːlˈðoʊ/",
    "pos": "conjunction",
    "ko": "비록 ~이지만",
    "ex": "Although costs rose, demand stayed high.",
    "exKo": "비용은 올랐지만 수요는 높게 유지되었다."
  },
  "whether": {
    "ipa": "/ˈweðər/",
    "pos": "conjunction",
    "ko": "~인지 아닌지",
    "ex": "It is unclear whether the rule applies.",
    "exKo": "그 규칙이 적용되는지는 불분명하다."
  },
  "context": {
    "ipa": "/ˈkɑːntekst/",
    "pos": "noun",
    "ko": "문맥, 맥락",
    "ex": "Context changes the meaning.",
    "exKo": "문맥이 의미를 바꾼다."
  },
  "meaning": {
    "ipa": "/ˈmiːnɪŋ/",
    "pos": "noun",
    "ko": "의미, 뜻",
    "ex": "The word has several meanings.",
    "exKo": "그 단어에는 여러 뜻이 있다."
  },
  "expression": {
    "ipa": "/ɪkˈspreʃən/",
    "pos": "noun",
    "ko": "표현",
    "ex": "The expression is common in English.",
    "exKo": "그 표현은 영어에서 흔하다."
  },
  "sentence": {
    "ipa": "/ˈsentəns/",
    "pos": "noun",
    "ko": "문장, 선고",
    "ex": "This sentence is hard to translate.",
    "exKo": "이 문장은 번역하기 어렵다."
  },
  "natural": {
    "ipa": "/ˈnætʃərəl/",
    "pos": "adjective",
    "ko": "자연스러운, 자연의",
    "ex": "That sounds natural in conversation.",
    "exKo": "그것은 대화에서 자연스럽게 들린다."
  },
  "formal": {
    "ipa": "/ˈfɔːrməl/",
    "pos": "adjective",
    "ko": "격식 있는, 공식적인",
    "ex": "Use formal language in the report.",
    "exKo": "보고서에는 격식 있는 표현을 사용하라."
  },
  "casual": {
    "ipa": "/ˈkæʒuəl/",
    "pos": "adjective",
    "ko": "격식 없는, 편한",
    "ex": "This phrase is casual.",
    "exKo": "이 표현은 캐주얼하다."
  }
};

// v0.2 no-api build:
// - No API key field
// - No direct AI service call
// - No external analytics/CDN
// - No AI prompt copy menu
// - User data stays in localStorage unless the user exports JSON manually.

const STORAGE_KEY = "sentence_reader_lite_ios_v0_2_no_api";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const state = {
  data: loadData(),
  currentArticleId: null,
  currentWord: "",
  reviewQueue: [],
  reviewIndex: 0
};

function uid(prefix = "id") {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { articles: [], expressions: [], notes: [] };
    const parsed = JSON.parse(raw);
    return {
      articles: Array.isArray(parsed.articles) ? parsed.articles : [],
      expressions: Array.isArray(parsed.expressions) ? parsed.expressions : [],
      notes: Array.isArray(parsed.notes) ? parsed.notes : []
    };
  } catch {
    return { articles: [], expressions: [], notes: [] };
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  renderAll();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function snippet(value, len = 120) {
  const s = String(value || "").replace(/\s+/g, " ").trim();
  return s.length > len ? s.slice(0, len - 1) + "…" : s;
}

function fmtDate(value) {
  if (!value) return "";
  try {
    return new Date(value).toLocaleString("ko-KR", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return "";
  }
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.add("hidden"), 1700);
}

function setView(view) {
  $$(".tab").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  $$(".view").forEach(v => v.classList.remove("active"));
  $("#" + view + "View")?.classList.add("active");
  if (view === "reader") renderReader();
}

function splitParagraphs(text) {
  return String(text || "")
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n|\n(?=\s{0,3}[A-Z0-9“"'])/g)
    .map(x => x.trim())
    .filter(Boolean);
}

function normalizeWord(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .trim()
    .replace(/^[^a-z]+/, "")
    .replace(/[^a-z'-]+$/, "");
}

function wordCandidates(word) {
  const w = normalizeWord(word);
  const out = [w];
  const irregular = {
    children: "child",
    went: "go",
    gone: "go",
    came: "come",
    made: "make",
    took: "take",
    taken: "take",
    found: "find",
    was: "be",
    were: "be",
    is: "be",
    are: "be",
    had: "have",
    did: "do"
  };
  if (irregular[w]) out.push(irregular[w]);
  if (w.endsWith("'s")) out.push(w.slice(0, -2));
  if (w.endsWith("ies") && w.length > 4) out.push(w.slice(0, -3) + "y");
  if (w.endsWith("ing") && w.length > 5) {
    out.push(w.slice(0, -3));
    out.push(w.slice(0, -3) + "e");
  }
  if (w.endsWith("ed") && w.length > 4) {
    out.push(w.slice(0, -2));
    out.push(w.slice(0, -1));
  }
  if (w.endsWith("es") && w.length > 4) out.push(w.slice(0, -2));
  if (w.endsWith("s") && w.length > 3) out.push(w.slice(0, -1));
  return [...new Set(out.filter(Boolean))];
}

function lookupWord(word) {
  const candidates = wordCandidates(word);

  const saved = state.data.expressions.find(e =>
    e.type === "word" && candidates.includes(normalizeWord(e.english))
  );

  if (saved) {
    return {
      found: true,
      source: "saved",
      word: saved.english,
      ipa: saved.ipa || "",
      pos: saved.pos || "",
      ko: saved.korean || "",
      ex: saved.example || "",
      exKo: "",
      note: saved.note || "저장된 단어장에서 찾았습니다."
    };
  }

  for (const c of candidates) {
    if (BUILTIN_DICT[c]) return { found: true, source: "builtin", word: c, ...BUILTIN_DICT[c] };
  }

  return {
    found: false,
    source: "none",
    word: normalizeWord(word),
    ipa: "",
    pos: "",
    ko: "내장 사전에 없음",
    ex: "",
    exKo: "",
    note: "직접 단어장에 추가하거나, 필요한 경우 별도로 사전을 확인해 주세요."
  };
}

function guessTitle(text) {
  const lines = String(text || "").split("\n").map(x => x.trim()).filter(Boolean);
  return snippet(lines[0] || "New York Times Article", 80);
}

function saveArticleFromForm() {
  const title = $("#articleTitle").value.trim() || "제목 없는 기사";
  const source = $("#articleSource").value.trim() || "New York Times";
  const url = $("#articleUrl").value.trim();
  const body = $("#articleBodyInput").value.trim();

  if (!body) {
    toast("본문을 붙여넣어 주세요.");
    return;
  }

  const article = {
    id: uid("article"),
    title,
    source,
    url,
    body,
    paragraphs: splitParagraphs(body),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  state.data.articles.unshift(article);
  state.currentArticleId = article.id;
  $("#articleTitle").value = "";
  $("#articleUrl").value = "";
  $("#articleBodyInput").value = "";
  saveData();
  setView("reader");
  toast("기사 저장 완료");
}

async function pasteClipboardToArticle() {
  try {
    const text = await navigator.clipboard.readText();
    if (!text.trim()) {
      toast("클립보드가 비어 있습니다.");
      return;
    }

    $("#articleBodyInput").value = text.trim();
    if (!$("#articleTitle").value.trim()) $("#articleTitle").value = guessTitle(text);
    toast("클립보드 본문을 가져왔습니다.");
  } catch {
    toast("클립보드 권한이 필요합니다. 직접 붙여넣어 주세요.");
  }
}

async function quickPasteArticle() {
  await pasteClipboardToArticle();
  setView("articles");
}

function openArticle(id) {
  state.currentArticleId = id;
  setView("reader");
}

function deleteArticle(id) {
  if (!confirm("기사를 삭제할까요? 연결된 표현/노트는 유지됩니다.")) return;
  state.data.articles = state.data.articles.filter(a => a.id !== id);
  if (state.currentArticleId === id) state.currentArticleId = null;
  saveData();
}

function selectedText() {
  return String(window.getSelection?.().toString() || "").trim();
}

function articleCardHtml(a) {
  return `
    <div class="card">
      <h3>${escapeHtml(a.title)}</h3>
      <p>${escapeHtml(snippet(a.body, 150))}</p>
      <div class="meta">
        <span>${escapeHtml(a.source || "출처 없음")}</span>
        <span>${fmtDate(a.createdAt)}</span>
        <span>${a.paragraphs?.length || 0}문단</span>
      </div>
      <div class="actions">
        <button class="primary small" data-open-article="${a.id}">읽기</button>
        <button class="ghost small" data-copy-url="${escapeHtml(a.url || "")}">URL 복사</button>
        <button class="ghost small" data-delete-article="${a.id}">삭제</button>
      </div>
    </div>`;
}

function renderToday() {
  $("#statArticles").textContent = state.data.articles.length;
  $("#statExpressions").textContent = state.data.expressions.filter(e => e.type !== "word").length;
  $("#statWords").textContent = state.data.expressions.filter(e => e.type === "word").length;
  $("#statNotes").textContent = state.data.notes.length;

  const recent = state.data.articles.slice(0, 5);
  $("#recentArticles").innerHTML = recent.length
    ? recent.map(articleCardHtml).join("")
    : `<div class="empty">아직 저장된 기사가 없습니다.</div>`;
}

function renderArticles() {
  $("#articleList").innerHTML = state.data.articles.length
    ? state.data.articles.map(articleCardHtml).join("")
    : `<div class="empty">저장된 기사가 없습니다.</div>`;
}

function renderReader() {
  const article = state.data.articles.find(a => a.id === state.currentArticleId) || state.data.articles[0];

  if (!article) {
    $("#readerEmpty").classList.remove("hidden");
    $("#readerArticle").classList.add("hidden");
    return;
  }

  state.currentArticleId = article.id;
  $("#readerEmpty").classList.add("hidden");
  $("#readerArticle").classList.remove("hidden");
  $("#readerTitle").textContent = article.title;
  $("#readerMeta").textContent = [article.source, fmtDate(article.createdAt), article.url].filter(Boolean).join(" · ");
  $("#readerBody").innerHTML = (article.paragraphs || splitParagraphs(article.body)).map((p, idx) =>
    `<p class="paragraph" data-idx="${idx}">${escapeHtml(p)}</p>`
  ).join("");
}

function expressionCardHtml(e) {
  const badge = e.type === "word" ? "단어" : "표현";
  return `
    <div class="card">
      <h3>${escapeHtml(e.english)} <span class="meta">${badge}</span></h3>
      <p>${escapeHtml(e.korean || "")}</p>
      ${e.ipa ? `<p class="meta">${escapeHtml(e.ipa)}</p>` : ""}
      ${e.example ? `<p>${escapeHtml(snippet(e.example, 130))}</p>` : ""}
      ${e.note ? `<p>${escapeHtml(snippet(e.note, 130))}</p>` : ""}
      <div class="meta"><span>${fmtDate(e.createdAt)}</span><span>복습 ${e.reviewCount || 0}회</span></div>
      <div class="actions">
        <button class="secondary small" data-review-one="${e.id}">복습</button>
        <button class="ghost small" data-delete-expression="${e.id}">삭제</button>
      </div>
    </div>`;
}

function renderExpressions() {
  const q = $("#expressionSearch").value.trim().toLowerCase();
  const list = state.data.expressions.filter(e =>
    !q || [e.english, e.korean, e.note, e.example, e.ipa].join(" ").toLowerCase().includes(q)
  );

  $("#expressionList").innerHTML = list.length
    ? list.map(expressionCardHtml).join("")
    : `<div class="empty">저장된 표현/단어가 없습니다.</div>`;
}

function noteCardHtml(n) {
  return `
    <div class="card">
      <h3>${escapeHtml(n.title || "제목 없는 노트")}</h3>
      <p>${escapeHtml(snippet(n.summary || n.question || n.answer, 170))}</p>
      <div class="meta"><span>${fmtDate(n.createdAt)}</span></div>
      <div class="actions">
        <button class="secondary small" data-open-note="${n.id}">보기</button>
        <button class="ghost small" data-delete-note="${n.id}">삭제</button>
      </div>
    </div>`;
}

function renderNotes() {
  const q = $("#noteSearch").value.trim().toLowerCase();
  const list = state.data.notes.filter(n =>
    !q || [n.title, n.question, n.answer, n.summary].join(" ").toLowerCase().includes(q)
  );

  $("#noteList").innerHTML = list.length
    ? list.map(noteCardHtml).join("")
    : `<div class="empty">학습노트가 없습니다.</div>`;
}

function renderAll() {
  renderToday();
  renderArticles();
  renderReader();
  renderExpressions();
  renderNotes();
}

function wordFromPointEvent(e) {
  let text = selectedText();
  if (text && /^[A-Za-z][A-Za-z'-]*$/.test(text.trim())) return normalizeWord(text);

  const range = document.caretRangeFromPoint ? document.caretRangeFromPoint(e.clientX, e.clientY) : null;
  if (range && range.startContainer?.nodeType === Node.TEXT_NODE) {
    const node = range.startContainer;
    const raw = node.textContent || "";
    let start = range.startOffset;
    let end = range.startOffset;
    while (start > 0 && /[A-Za-z'-]/.test(raw[start - 1])) start--;
    while (end < raw.length && /[A-Za-z'-]/.test(raw[end])) end++;
    return normalizeWord(raw.slice(start, end));
  }

  return "";
}

function openDictionary(word) {
  const w = normalizeWord(word);
  if (!w) return;

  const item = lookupWord(w);
  state.currentWord = w;
  $("#dictWord").textContent = item.word || w;
  $("#dictIpa").textContent = item.ipa || (item.found ? "발음기호 없음" : "내장 사전에 없음");
  $("#dictMeaning").textContent = item.found
    ? `${item.pos ? item.pos + " · " : ""}${item.ko}`
    : "내장 사전에서 찾지 못했습니다.";
  $("#dictExample").innerHTML = item.ex
    ? `${escapeHtml(item.ex)}<br>${escapeHtml(item.exKo || "")}`
    : escapeHtml(item.note || "직접 단어장에 추가할 수 있습니다.");
  $("#dictPopup").classList.remove("hidden");
}

function closeDictionary() {
  $("#dictPopup").classList.add("hidden");
}

function saveCurrentWord() {
  const item = lookupWord(state.currentWord);

  if (!state.currentWord) return;

  if (!item.found) {
    openExpressionModal(state.currentWord, "", "word");
    closeDictionary();
    return;
  }

  const existing = state.data.expressions.find(e =>
    e.type === "word" && normalizeWord(e.english) === normalizeWord(item.word)
  );

  if (existing) {
    existing.reviewCount = existing.reviewCount || 0;
    existing.updatedAt = new Date().toISOString();
  } else {
    state.data.expressions.unshift({
      id: uid("expr"),
      type: "word",
      english: item.word,
      korean: item.ko,
      ipa: item.ipa,
      pos: item.pos,
      example: item.ex,
      note: item.note || "",
      articleId: state.currentArticleId,
      createdAt: new Date().toISOString()
    });
  }

  saveData();
  toast("단어 저장 완료");
  closeDictionary();
}

function saveWordAsNote() {
  const item = lookupWord(state.currentWord);
  if (!state.currentWord) return;

  state.data.notes.unshift({
    id: uid("note"),
    title: `단어: ${state.currentWord}`,
    question: `${state.currentWord}의 뜻과 쓰임`,
    summary: item.found ? item.ko : "내장 사전에 없음",
    answer: item.found
      ? [`단어: ${item.word}`, `발음: ${item.ipa || ""}`, `뜻: ${item.ko}`, `예문: ${item.ex || ""}`, item.exKo || ""].filter(Boolean).join("\n")
      : "직접 확인 후 내용을 보완하세요.",
    articleId: state.currentArticleId,
    createdAt: new Date().toISOString()
  });

  saveData();
  toast("노트 저장 완료");
  closeDictionary();
}

function openExpressionModal(defaultEnglish = null, defaultKorean = "", type = "expression") {
  const selected = defaultEnglish ?? selectedText();
  openModal(type === "word" ? "단어 직접 추가" : "표현 추가", `
    <label>영어 표현</label>
    <input id="modalEnglish" value="${escapeHtml(selected)}" />
    <label>한국어 뜻</label>
    <input id="modalKorean" value="${escapeHtml(defaultKorean)}" />
    <label>예문 / 메모</label>
    <textarea id="modalNote" rows="5"></textarea>
  `, () => {
    const english = $("#modalEnglish").value.trim();
    if (!english) return toast("영어 표현을 입력하세요.");

    state.data.expressions.unshift({
      id: uid("expr"),
      type,
      english,
      korean: $("#modalKorean").value.trim(),
      note: $("#modalNote").value.trim(),
      articleId: state.currentArticleId,
      createdAt: new Date().toISOString()
    });

    saveData();
    closeModal();
    toast(type === "word" ? "단어 저장 완료" : "표현 저장 완료");
  });
}

function openNoteModal(noteId = null, selectedOverride = null) {
  const old = state.data.notes.find(n => n.id === noteId) || {};
  const selected = selectedOverride ?? selectedText();

  openModal(noteId ? "학습노트 보기/수정" : "학습노트 추가", `
    <label>제목</label>
    <input id="modalNoteTitle" value="${escapeHtml(old.title || "")}" />
    <label>질문 / 연결 문장</label>
    <input id="modalQuestion" value="${escapeHtml(old.question || selected || "")}" />
    <label>핵심 요약</label>
    <input id="modalSummary" value="${escapeHtml(old.summary || "")}" />
    <label>답변 / 설명</label>
    <textarea id="modalAnswer" rows="9">${escapeHtml(old.answer || "")}</textarea>
  `, () => {
    if (noteId) {
      Object.assign(old, {
        title: $("#modalNoteTitle").value.trim(),
        question: $("#modalQuestion").value.trim(),
        summary: $("#modalSummary").value.trim(),
        answer: $("#modalAnswer").value.trim(),
        updatedAt: new Date().toISOString()
      });
    } else {
      state.data.notes.unshift({
        id: uid("note"),
        title: $("#modalNoteTitle").value.trim() || "제목 없는 노트",
        question: $("#modalQuestion").value.trim(),
        summary: $("#modalSummary").value.trim(),
        answer: $("#modalAnswer").value.trim(),
        articleId: state.currentArticleId,
        createdAt: new Date().toISOString()
      });
    }

    saveData();
    closeModal();
    toast("노트 저장 완료");
  });
}

function openModal(title, bodyHtml, onOk) {
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = bodyHtml;
  $("#modal").classList.remove("hidden");
  $("#modalOkBtn").onclick = onOk;
}

function closeModal() {
  $("#modal").classList.add("hidden");
  $("#modalBody").innerHTML = "";
  $("#modalOkBtn").onclick = null;
}

function startReview(items = null) {
  state.reviewQueue = items || state.data.expressions.slice();
  state.reviewIndex = 0;
  setView("review");
  renderReviewCard(false);
}

function renderReviewCard(showAnswer) {
  const box = $("#reviewBox");
  const item = state.reviewQueue[state.reviewIndex];

  if (!item) {
    box.innerHTML = `<div class="empty">복습할 카드가 없습니다.</div>`;
    return;
  }

  box.innerHTML = `
    <div class="review-word">${escapeHtml(item.english)}</div>
    ${item.ipa ? `<div class="meta">${escapeHtml(item.ipa)}</div>` : ""}
    ${showAnswer ? `<p><b>${escapeHtml(item.korean || "")}</b></p><p>${escapeHtml(item.note || item.example || "")}</p>` : `<p class="meta">뜻을 떠올린 뒤 답을 확인하세요.</p>`}
    <div class="row">
      ${showAnswer ? `
        <button class="secondary" id="reviewHardBtn">어려움</button>
        <button class="primary" id="reviewEasyBtn">쉬움</button>
      ` : `<button class="primary" id="showAnswerBtn">답 보기</button>`}
    </div>`;

  $("#showAnswerBtn")?.addEventListener("click", () => renderReviewCard(true));
  $("#reviewHardBtn")?.addEventListener("click", () => markReview("hard"));
  $("#reviewEasyBtn")?.addEventListener("click", () => markReview("easy"));
}

function markReview(status) {
  const item = state.reviewQueue[state.reviewIndex];

  if (item) {
    item.reviewStatus = status;
    item.reviewCount = (item.reviewCount || 0) + 1;
    item.lastReviewedAt = new Date().toISOString();
  }

  state.reviewIndex++;
  saveData();
  renderReviewCard(false);
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sentence-reader-lite-ios-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

async function importJson(file) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);

    if (!Array.isArray(data.articles) || !Array.isArray(data.expressions) || !Array.isArray(data.notes)) {
      throw new Error("bad schema");
    }

    state.data = data;
    saveData();
    toast("복원 완료");
  } catch {
    toast("복원 실패: JSON 형식을 확인하세요.");
  }
}

document.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (tab) return setView(tab.dataset.view);

  const jump = e.target.closest("[data-view-jump]");
  if (jump) return setView(jump.dataset.viewJump);

  const open = e.target.closest("[data-open-article]");
  if (open) return openArticle(open.dataset.openArticle);

  const delArticle = e.target.closest("[data-delete-article]");
  if (delArticle) return deleteArticle(delArticle.dataset.deleteArticle);

  const copyUrl = e.target.closest("[data-copy-url]");
  if (copyUrl) {
    const url = copyUrl.dataset.copyUrl || "";
    if (!url) return toast("저장된 URL이 없습니다.");
    return navigator.clipboard.writeText(url).then(() => toast("URL 복사 완료")).catch(() => toast("복사 실패"));
  }

  const delExpr = e.target.closest("[data-delete-expression]");
  if (delExpr) {
    state.data.expressions = state.data.expressions.filter(x => x.id !== delExpr.dataset.deleteExpression);
    return saveData();
  }

  const reviewOne = e.target.closest("[data-review-one]");
  if (reviewOne) {
    const item = state.data.expressions.find(x => x.id === reviewOne.dataset.reviewOne);
    if (item) startReview([item]);
    return;
  }

  const openNote = e.target.closest("[data-open-note]");
  if (openNote) return openNoteModal(openNote.dataset.openNote);

  const delNote = e.target.closest("[data-delete-note]");
  if (delNote) {
    state.data.notes = state.data.notes.filter(x => x.id !== delNote.dataset.deleteNote);
    return saveData();
  }
});

$("#saveArticleBtn").addEventListener("click", saveArticleFromForm);
$("#pasteClipboardBtn").addEventListener("click", pasteClipboardToArticle);
$("#quickPasteBtn").addEventListener("click", quickPasteArticle);
$("#backupBtn").addEventListener("click", exportJson);
$("#exportJsonBtn").addEventListener("click", exportJson);
$("#importJsonInput").addEventListener("change", e => e.target.files[0] && importJson(e.target.files[0]));
$("#addExpressionBtn").addEventListener("click", () => openExpressionModal());
$("#newNoteBtn").addEventListener("click", () => openNoteModal());
$("#addNoteBtn").addEventListener("click", () => openNoteModal());
$("#saveSelectedExpressionBtn").addEventListener("click", () => {
  const text = selectedText();
  if (!text) return toast("저장할 문장이나 표현을 먼저 선택하세요.");
  openExpressionModal(text);
});
$("#saveSelectedNoteBtn").addEventListener("click", () => {
  const text = selectedText();
  if (!text) return toast("노트로 만들 문장을 먼저 선택하세요.");
  openNoteModal(null, text);
});
$("#startReviewBtn").addEventListener("click", () => startReview());
$("#saveWordBtn").addEventListener("click", saveCurrentWord);
$("#saveWordNoteBtn").addEventListener("click", saveWordAsNote);
$("#closeDictBtn").addEventListener("click", closeDictionary);
$("#closeModalBtn").addEventListener("click", closeModal);
$("#modalCancelBtn").addEventListener("click", closeModal);
$("#expressionSearch").addEventListener("input", renderExpressions);
$("#noteSearch").addEventListener("input", renderNotes);

$("#readerBody").addEventListener("click", (e) => {
  const p = e.target.closest(".paragraph");
  if (!p) return;
  const word = wordFromPointEvent(e);
  if (word) openDictionary(word);
});

$("#readerBody").addEventListener("dblclick", (e) => {
  const p = e.target.closest(".paragraph");
  if (!p) return;
  const word = wordFromPointEvent(e);
  if (word) openDictionary(word);
});

$("#readerBody").addEventListener("touchend", () => {
  clearTimeout(window.__touchWordTimer);
  window.__touchWordTimer = setTimeout(() => {
    const text = selectedText();
    if (/^[A-Za-z][A-Za-z'-]*$/.test(text.trim())) openDictionary(text);
  }, 220);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}

renderAll();