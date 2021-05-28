import { css } from "@emotion/react";
export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #151f26;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);

    width: 76px;
    padding: 8px;
  `,
  logo: css`
    padding: 8px;
    cursor: pointer;
  `,
  separator: css`
    display: block;
    position: relative;
    content: "";
    height: 1px;
    width: 44px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1px;
    margin: 14px 0 16px;
  `,
  iconContainer: css`
    width: 44px;
    height: 44px;
    border-radius: 5px;
    margin: 2px 0;
    cursor: pointer;
    background: inherit;
    transition: all 0.3s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  `,
  fixed: css`
    position: fixed;
  `,
  fixedBottom: css`
    position: fixed;
    bottom: 0;
  `,
  icon: css`
    padding: 11px;
  `,
  avatar: css`
    margin-top: 10px;
    cursor: pointer;
  `,
};
