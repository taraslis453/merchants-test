import { css } from "@emotion/react";

export const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    padding: 8px 20px;
    border-bottom: 1px solid rgba(21, 31, 38, 0.05);
  `,
  titleWrapper: css`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-family: "Montserrat-SemiBold";
    h5 {
      margin-left: 10px;
    }
  `,
  form: css`
    padding: 8px 16px;
    width: 350px;
    background: rgba(21, 31, 38, 0.01);
    border: 1px solid rgba(21, 31, 38, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Montserrat-Regular";
    &::placeholder {
      color: rgba(21, 31, 38, 0.3);
    }
  `,
  pageSizeContainer: css`
    position: relative;
    padding: 10px 0;
    display: flex;
    &:hover {
      img {
        transform: rotate(180deg);
      }
    }
    .select {
      cursor: pointer;
      right: 0;
      z-index: 2;
      background: #fff;
      border: 1px solid silver;
      border-radius: 5px;
      transition: all 0.3s;
      .option {
        border-bottom: 1px solid silver;
        padding: 5px 20px;
        &:hover {
          color: gray;
        }
      }
    }
  `,
  pageSize: css`
    display: flex;
    align-items: center;
    font-family: "Montserrat-Medium";
    font-size: 14px;
    margin-left: 24px;
    span {
      margin-right: 5px;
    }
    img {
      transition: all 0.3s;
      width: 12px;
      height: 12px;
      padding-left: 5px;
    }
  `,

  paginationContainer: css`
    display: flex;
    align-items: center;
    font-family: "Montserrat-Medium";
    span {
      font-size: 14px;
      color: #73797d;
      display: block;
      margin: 0 24px 0 27px;
    }
  `,

  arrowLeft: css`
    padding: 0 8px;
    background: none;
    border: 0;
    cursor: pointer;
    &:hover {
      background: rgba(21, 31, 38, 0.05);
    }
  `,
  arrowRight: css`
    padding: 0 8px;
    background: none;
    border: 0;
    cursor: pointer;
    &:hover {
      background: rgba(21, 31, 38, 0.05);
    }
  `,
};
