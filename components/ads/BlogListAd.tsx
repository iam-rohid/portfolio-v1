import React, { Fragment } from "react";
import Script from "next/script";

const BlogListAd = () => {
  return null;
  return (
    <Fragment>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-53+cr+5o-dn-42"
        data-ad-client="ca-pub-7322439099058988"
        data-ad-slot="8442341112"
      ></ins>
      <Script id="Blog-List-ad">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </Fragment>
  );
};

export default BlogListAd;
