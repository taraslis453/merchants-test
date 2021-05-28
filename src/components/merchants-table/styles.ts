import { css } from "@emotion/react";

export const styles = {
  container: css`
    width: 100%;
    padding: 32px;
  `,
  table: css`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    .thead {
      background: #fff;
      border-bottom: 1px solid rgba(21, 31, 38, 0.05);
    }
    .tbody {
      cursor: pointer;
      background: #fff;
      .loader {
        text-align: center;
      }
    }
    .tr {
      border-bottom: 1px solid rgba(21, 31, 38, 0.05);
      position: relative;
      display: flex;
      width: 100%;
      &:hover .buttonGroup {
        opacity: 1;
        visibility: visible;
        &:before {
          opacity: 1;
        }
      }
      &:hover .moreVertical {
        border: 1px solid silver;
      }
    }
    .tr .buttonGroup {
      transition: all 0.1s;
      opacity: 0;
      visibility: hidden;
      display: flex;
      position: absolute;
      right: 70px;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 45px;
      background: #ffffff;
      &:before {
        width: 300px;
        height: 65px;

        transition: all 0.1s;

        content: "";
        position: absolute;
        top: 0;
        right: -20px;
        background-image: linear-gradient(
          90deg,
          rgba(250, 251, 252, 0) 0%,
          #fafbfc 100%
        );
        opacity: 0;
      }
      button {
        border: none;
        z-index: 10;
        background: none;
        cursor: pointer;
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 5px;
        margin: 5px;
        transition: all 0.5s ease;
        &:hover {
          border: 1px solid silver;
        }
      }
    }
    .tr .moreVertical {
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 2px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 24px;
      bottom: 0;
      margin: auto;
      height: 20px;
    }
    .tr:last-child {
      border-bottom: none;
    }
    .th,
    .td {
      width: 100%;
    }
    .th {
      font-family: "Montserrat-SemiBold";
      padding: 16px 24px;
      color: rgba(21, 31, 38, 0.85);
    }
    .td {
      font-family: "Montserrat-Medium";
      background: #fbfbfb;
      color: rgba(21, 31, 38, 0.75);
      padding: 22px 24px;
    }
  `,
  info: css`
    color: rgba(21, 31, 38, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-size: 14px;
    font-family: "Montserrat-Regular";
    img {
      margin-right: 10px;
    }
  `,
  noResultsBg: css`
    background: rgba(248, 248, 248, 0.5) !important;
  `,
  noResultsColor: css`
    color: rgba(21, 31, 38, 0.75);
  `,
};
