"use client"

export default function MainTitle(){
    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div>
            <h1>자산관리를 시작해봅시다. Ver 0.1.2</h1>
            <h3>가능한 기능들 모음</h3>
          </div>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Signin Signout 가능
            </li>
            <li className="mb-2">Asset 데이터 입력/수정/삭제 가능</li>
            <li className="mb-2">Household 일단 화면만 열림</li>
            <li className="mb-2">버그를 발견했을 시 알려주세요 Ver 0.1.3 예정 : Household오픈</li>
          </ol>
        </main>
      
      </div>
    )
}