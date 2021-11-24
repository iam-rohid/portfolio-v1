import React, { Fragment } from "react";
import Script from "next/script";
function WideAd() {
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
        data-ad-client="ca-pub-7322439099058988"
        data-ad-slot="6180630545"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="wide-ad">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </Fragment>
  );
}

export default WideAd;
