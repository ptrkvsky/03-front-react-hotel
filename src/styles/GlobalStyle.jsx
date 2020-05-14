import React from "react";
import { Global, css } from "@emotion/core";
import theme from "./theme";
import mediaQueries from "./mediaQueries";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* RESET CSS ERIC MEYER */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        /* ------------- */
        /* STYLES GLOBAL */
        /* ------------- */

        body {
          background: ${theme.colors.mainBg};
          color: ${theme.colors.main};
          font-size: 18px;
          font-family: ${theme.fonts.primary};
          min-height: 100vh;
        }

        img {
          max-width: 100%;
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: none;
        }

        /* TITLES */
        .primary-title {
          font-size: 45px;
          text-align: center;
          font-family: ${theme.fonts.logo};
          color: ${theme.colors.primary};

          ${mediaQueries.tabletteHorizontale} {
            font-size: 24px;
          }
        }

        .f400{
          font-weight: 400;
        }
        .extra-bold{
          font-weight: 900;
        }

        /* buttons */
        .btn-primary {
          background: #9b5656;
          border: none;
          color: #FFF;
          padding: 10px 25px;
          font-size: 19px;
          font-family: Roboto;
          border-radius: 3px;
          cursor: pointer;
          letter-spacing: 1px;
          font-family: "Slabo 27px";
                &:hover {
            transform: scale(0.95);
          }
        }

        form{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .relative{
          position: relative;
        }
        
        /* LAYOUT */
        .max-container {
          width: 1280px;
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;

          ${mediaQueries.tabletteHorizontale} {
            width: 100%;
            padding: 0 5%;
          }
        }
      `}
    />
  );
}
