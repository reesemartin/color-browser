type PagingProps = {
  pagesTotal: number
  currentPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
export const Paging = ({ pagesTotal, currentPage, setPage }: PagingProps) => {
  const doSetPage = (page: number) => () => {
    if (page <= 0) return
    if (page > pagesTotal) return


    setPage(page)
  }

  let firstPages: number[] = []
  for (let i = 0; i < (pagesTotal > 7 ? 7 : pagesTotal); i++) {
    firstPages.push(i + 1)
  }

  return (
    <div className="max-w-lg m-auto mt-12">
      {pagesTotal > 1 && (
        <ul className="text-theme-darkGrey flex justify-center xs:gap-2">
          {firstPages.map((page) => {
            if (currentPage < 5 || pagesTotal <= 7) {
              return (
                <li
                  key={page}
                  className={`px-2 ${
                    currentPage === page
                      ? 'font-bold text-gray-800 border-b-2 border-theme-darkGray'
                      : 'cursor-pointer'
                  }`}
                  onClick={() => {
                    if (currentPage !== page) {
                      setPage(page)
                    }
                  }}>
                  {page}
                </li>
              )
            }
          })}

          {pagesTotal > 7 && currentPage > 4 && <li
            onClick={doSetPage(1)}
            className={`px-2 ${
              currentPage === 1 ? 'font-bold text-gray-800 border-b-2 border-theme-darkGray' : 'cursor-pointer'
            }`}>
            1
          </li> }

          {pagesTotal > 7 && currentPage > 4 && <li className="text-gray-800 px-2">...</li>}

          {pagesTotal > 7 && currentPage > 4 && (
            <li className="cursor-pointer px-2" onClick={doSetPage(currentPage - 2)}>
              {currentPage - 2}
            </li>
          )}
          {pagesTotal > 7 && currentPage > 4 && (
            <li className="cursor-pointer px-2" onClick={doSetPage(currentPage - 1)}>
              {currentPage - 1}
            </li>
          )}

          {pagesTotal > 7 && currentPage > 4 && (
            <li className="font-bold text-gray-800 border-b-2 border-theme-darkGray px-2">{currentPage}</li>
          )}

          {pagesTotal > 7 && currentPage > 4 && currentPage < pagesTotal - 3 && (
            <li className="cursor-pointer px-2" onClick={doSetPage(currentPage + 1)}>
              {currentPage + 1}
            </li>
          )}
          {pagesTotal > 7 && currentPage > 4 && currentPage < pagesTotal - 2 && (
            <li className="cursor-pointer px-2" onClick={doSetPage(currentPage + 2)}>
              {currentPage + 2}
            </li>
          )}

          {pagesTotal > 7 && currentPage < pagesTotal - 3 && <li className="text-gray-800 px-2">...</li>}

          {pagesTotal > 7 && currentPage < pagesTotal && (
            <li className="cursor-pointer px-2" onClick={doSetPage(pagesTotal)}>
              {pagesTotal}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
