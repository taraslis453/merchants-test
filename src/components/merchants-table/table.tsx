import React, { useEffect, FC } from "react";
import { useAppDispatch, useTypedSelector } from "../../configureStore";
import { getMerchants } from "../../redux/merchants-reducer";
import { styles } from "./styles";
import { TableHeader } from "./table-header/table-header";
import moreVertical from "./more-vertical.svg";
import deleteIcon from "./delete.png";
import openIcon from "./open-folder.png";
import shopIcon from "./shop.png";
import infoIcon from "./info.svg";

export const MerchantsTable: FC = () => {
  const dispatch = useAppDispatch();
  const totalMerchants = useTypedSelector(
    (state) => state.merchants.totalMerchants
  );
  const merchants = useTypedSelector((state) => state.merchants.merchants);
  const currentPage = useTypedSelector((state) => state.merchants.currentPage);
  const pageSize = useTypedSelector((state) => state.merchants.pageSize);
  const status = useTypedSelector((state) => state.merchants.status);
  const search = useTypedSelector((state) => state.merchants.search);
  useEffect(() => {
    dispatch(
      getMerchants({
        limit: pageSize,
        offset: currentPage * pageSize,
        search: search,
      })
    );
  }, [dispatch, pageSize, currentPage, search]);

  return (
    <div css={styles.container}>
      <TableHeader
        currentPage={currentPage}
        pageSize={pageSize}
        totalMerchants={totalMerchants}
      />
      <div css={styles.table}>
        <div className="thead">
          <div className="tr">
            <div
              className="th"
              css={totalMerchants === 0 ? styles.noResultsColor : undefined}
            >
              Name
            </div>
            <div
              className="th"
              css={totalMerchants === 0 ? styles.noResultsColor : undefined}
            >
              Email
            </div>
            <div
              className="th"
              css={totalMerchants === 0 ? styles.noResultsColor : undefined}
            >
              Website
            </div>
            <div
              className="th"
              css={totalMerchants === 0 ? styles.noResultsColor : undefined}
            >
              Note
            </div>
          </div>
        </div>
        <div
          className="tbody"
          css={totalMerchants === 0 ? styles.noResultsBg : undefined}
        >
          {status === "pending" ? (
            <div className="loader">Loading</div>
          ) : status === "rejected" ? (
            <div>rejected</div>
          ) : search === "" && totalMerchants === 0 ? (
            <div css={styles.info}>
              {" "}
              <img src={infoIcon} alt="info" />
              Create merchant to get started
            </div>
          ) : search !== "" && totalMerchants === 0 ? (
            <div css={styles.info}>
              {" "}
              <img src={infoIcon} alt="info" />
              Merchants matching your request not found
            </div>
          ) : (
            <React.Fragment>
              {merchants?.map((item) => {
                return (
                  <div key={item.id} className="tr">
                    <div className="td">{item.name}</div>
                    <div className="td">{item.email}</div>
                    <div className="td">{item.website}</div>
                    <div className="td">{item.memoText}</div>
                    <div className="buttonGroup">
                      <button>
                        <img src={openIcon} alt="open" />
                      </button>
                      <button>
                        <img src={deleteIcon} alt="delete" />
                      </button>
                      <button>
                        <img src={shopIcon} alt="shops" />
                      </button>
                    </div>
                    <div className="moreVertical">
                      <img src={moreVertical} alt="more" />
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
