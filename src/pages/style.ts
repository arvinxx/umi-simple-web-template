import img from '@/assets/yay.jpg';
import { createStyles } from 'antd-style';

export default createStyles(({ token, css, responsive }) => ({
  normal: css`
    font-family: Georgia, sans-serif;
    margin-top: 4em;
    text-align: center;

    ${responsive.mobile} {
      margin-top: 10px;
    }
  `,

  welcome: css`
    height: 512px;
    background: url(${img}) no-repeat center 0;
    background-size: 512px 512px;
  `,

  list: css`
    font-size: 1.2em;
    margin: 1.8em 0 0;
    list-style: none;
    line-height: 1.5em;
  `,

  code: css`
    padding: 8px;
    background: ${token.colorBgLayout};
  `,
}));
