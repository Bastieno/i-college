import Document, { DocumentContext, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { extractStyles } from 'evergreen-ui';

type Props = {
  css: string;
  hydrationScript: string
};

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const { css, hydrationScript } = extractStyles();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        hydrationScript,
        css,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { css, hydrationScript } = this.props;

    return (
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </html>
    );
  }
}
