import React, { FC } from "react";
import { useAppDispatch } from "../../../configureStore";
import {
  setPageSize,
  setCurrentPage,
  setSearch,
} from "../../../redux/merchants-reducer";
import { styles } from "./styles";
import merchants from "./Icon.svg";
import arrowLeft from "./arrow-left.svg";
import arrowRight from "./arrow-right.svg";

interface Props {
  totalMerchants: number;
  pageSize: number;
  currentPage: number;
}

export const TableHeader: FC<Props> = ({
  totalMerchants,
  pageSize,
  currentPage,
}) => {
  const dispatch = useAppDispatch();
  const onSearch = (e: any) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div css={styles.container}>
      <div css={styles.titleWrapper}>
        <img src={merchants} alt="merchants" />
        <h5>Merchants</h5>
      </div>
      <div css={styles.paginationContainer}>
        <div>
          <input
            onChange={onSearch}
            css={styles.form}
            placeholder="Search..."
            type="text"
          />
        </div>
        {totalMerchants !== 0 && (
          <React.Fragment>
            <div css={styles.pageSizeContainer}>
              <div css={styles.pageSize}>
                <span> Show on page:</span>
                <select
                  onChange={(e) =>
                    dispatch(setPageSize(Number(e.target.value)))
                  }
                  className="select"
                  value={pageSize}
                >
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>

            <span>
              {currentPage * pageSize + 1}-
              {++currentPage * pageSize > totalMerchants
                ? totalMerchants
                : currentPage * pageSize}{" "}
              of {totalMerchants}
            </span>
            <button
              onClick={() => dispatch(setCurrentPage("minus"))}
              css={styles.arrowLeft}
              disabled={currentPage === 1 ? true : undefined}
            >
              <img src={arrowLeft} alt="arrowLeft" />
            </button>
            <button
              onClick={() => dispatch(setCurrentPage("plus"))}
              css={styles.arrowRight}
              disabled={
                currentPage * pageSize > totalMerchants ? true : undefined
              }
            >
              <img src={arrowRight} alt="arrowRight" />
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
