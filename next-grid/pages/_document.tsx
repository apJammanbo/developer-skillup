import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head lang="ko" />
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="/static/" />
          <script type="text/javascript" src="./scripts/realgrid.2.1.0.min.js" />
          <script type="text/javascript" src="./scripts/libs/jszip.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
