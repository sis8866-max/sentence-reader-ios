# Sentence Reader Lite iOS PWA v0.3

GitHub Pages에 바로 올릴 수 있도록 정리한 iOS/PWA 버전입니다.

## 핵심 방향

이 버전은 API 기능 없이, 수동 AI 분석 연계만 제공합니다.

- API Key 입력 없음
- OpenAI/Gemini API 직접 호출 없음
- 외부 CDN 없음
- 광고/분석 코드 없음
- 앱이 기사·노트·단어를 서버로 자동 전송하지 않음
- 선택 문장/기사/단어 분석 프롬프트를 클립보드로 복사
- 사용자가 직접 Gemini/ChatGPT에 붙여넣기
- AI 답변을 복사해서 앱에 붙여넣고 학습노트로 저장
- 기사·단어·표현·노트는 iPad 브라우저 저장소에 저장
- JSON 백업/복원 지원

## 포함 기능

- 기사 본문 붙여넣기
- 클립보드에서 기사 가져오기
- 제목·출처·URL 저장
- 문단형 리더
- 단어 탭/더블탭 → 내장 사전 팝업
- 단어 저장
- 표현 저장
- 학습노트
- 복습
- JSON 백업/복원
- 홈 화면 아이콘
- Service Worker 캐시
- 선택 문장 AI 분석 프롬프트 복사
- 기사 전체 AI 분석 프롬프트 복사
- 단어 상세 AI 분석 프롬프트 복사
- AI 답변 붙여넣기 → 학습노트 저장

## 제거 기능

- 영어듣기
- 오디오 재생
- 오디오 링크 추출
- PC용 브라우저 창 제어
- 기사 자동 스크래핑
- API 직접 호출
- API 키 저장

## iPad 사용 흐름

```text
NYT 앱 또는 Safari에서 기사 본문 복사
→ Sentence Reader Lite 실행
→ 클립보드에서 기사 가져오기
→ 제목 확인
→ 기사 저장
→ 리더에서 읽기
→ 문장 선택
→ 선택문장 AI분석 복사
→ Gemini/ChatGPT에 직접 붙여넣기
→ 답변 복사
→ 앱으로 돌아와 AI답변 저장
→ 학습노트에 저장
```

## GitHub Pages 배포 방법

1. GitHub에서 새 저장소를 만듭니다.
   - 예: `sentence-reader-ios`
   - Public 저장소로 만들어도 됩니다. 개인 학습 데이터는 GitHub에 올라가지 않습니다.

2. 이 폴더 안의 파일을 전부 업로드합니다.

   업로드 대상:

   ```text
   index.html
   app.js
   styles.css
   manifest.json
   service-worker.js
   assets/
   .nojekyll
   README.md
   ```

3. 저장소의 `Settings`로 들어갑니다.

4. 왼쪽 메뉴에서 `Pages`를 누릅니다.

5. `Build and deployment`에서 다음처럼 설정합니다.

   ```text
   Source: Deploy from a branch
   Branch: main
   Folder: /root
   ```

6. 저장하면 잠시 후 주소가 생깁니다.

   예:

   ```text
   https://사용자ID.github.io/sentence-reader-ios/
   ```

7. iPad Safari에서 그 주소를 엽니다.

8. 공유 버튼 → 홈 화면에 추가를 누릅니다.

## 보안 메모

GitHub Pages에 공개되는 것은 앱 코드입니다.

```text
공개됨:
HTML, CSS, JS, 기본 아이콘, 기본 미니 사전

공개되지 않음:
iPad에서 저장한 기사 본문, 단어장, 표현장, 학습노트
```

다만 다음 경우에는 외부 서비스로 내용이 전달됩니다.

```text
사용자가 직접 Gemini/ChatGPT에 프롬프트를 붙여넣는 경우
JSON 백업 파일을 iCloud, 메일, 메신저 등에 공유하는 경우
```
