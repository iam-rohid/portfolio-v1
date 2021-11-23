import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
          crossOrigin="anonymous"
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
