import { createStyles, css } from 'antd-style';
import img from '@/assets/yay.jpg';

export default createStyles(({ token }) => ({
  normal: css`
    font-family: Georgia, sans-serif;
    margin-top: 4em;
    text-align: center;
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
