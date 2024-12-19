"use client"

export default function MainTitle() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>자산관리를 시작해봅시다. Ver 0.1.5</h1>
          <h3>가능한 기능들 모음</h3>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">드디어 회원가입이 가능해졌습니다. 여러분의 비밀번호는 암호화되어 관리하고 있습니다.</li>
          <li className="mb-2">가계부 분류 설정 기능이 추가되었습니다. 등록/수정/삭제가 가능한 상태입니다.</li>
          <li className="mb-2">삭제 로직의 변경/가계부 분류 구조 수정/기타 수정(통화 단위 대문자화/자산에 따른 가계부 작성등)</li>
          <li className="mb-2">버그를 발견했을 시 알려주세요 Ver 0.1.6 예정 : 이미지 읽기 기능(바로는 적용안될 수도), 계속해서 기타 기능 추가 예정 /고민중이니 아이디어 있으면.../</li>
        </ol>
        <div>
          <h3>이전 패치 내역</h3>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">가계부 리스트 수정 및 더 보기 기능 추가, 가계부 수정/삭제 기능 추가[Ver0.1.4]</li>
          <li className="mb-2">자산의 금액 변경시 가계부 차액 자동 등록 기능 추가[Ver0.1.4]</li>
          <li className="mb-2">한국어 지원 추가 현재는 언어 2개 대응(영어, 한국어)[Ver0.1.4]</li>
          <li className="mb-2">가계부 데이터 입력/조회 기능 추가[Ver0.1.3]</li>
          <li className="mb-2">날짜별 총합, 달별 이력 조회 가능[Ver0.1.3]</li>
          <li className="mb-2">
            Signin Signout 가능[Ver0.1.2]
          </li>
          <li className="mb-2">자산 데이터 입력/수정/삭제 가능[Ver0.1.2]</li>
          <li className="mb-2">가계부 일단 화면만 열림[Ver0.1.2]</li>
        </ol>
      </main>

    </div>
  )
}