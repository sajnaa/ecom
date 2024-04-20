import React, { useEffect } from "react";

const Ad = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://s.adroll.com/j/LAB3KF6UERDR3F4BTH3SZX/roundtrip.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.adroll_adv_id = "LAB3KF6UERDR3F4BTH3SZX";
    window.adroll_pix_id = "QF6DKZPPJJDSVP62MEIIRJ";
    window.adroll_version = "2.0";
    window.adroll = window.adroll || {
      track: function () {
        (window.adroll.q = window.adroll.q || []).push(arguments);
      },
    };

    window.adroll.track("pageView");
  }, []);

  return null; // Since this component doesn't render anything visible, return null
};

export default Ad;
