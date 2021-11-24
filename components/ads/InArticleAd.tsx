import React, { Fragment } from "react";
import Script from "next/script";

const InArticleAd = () => {
  return (
    <Fragment>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-7322439099058988"
        data-ad-slot="8797564335"
      ></ins>
      <Script id="in-article-ad">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
    </Fragment>
  );
};

export default InArticleAd;
