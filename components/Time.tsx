// Time component for the Menu Bar.
import type { NextPage } from "next";
import moment from "moment";
import { useState, useEffect } from "react";

const Time: NextPage = () => {
  const [time, setTime] = useState(moment().format("ddd h:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((oldTime) => moment().format("ddd h:mm A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className=" text-sm">{time}</div>;
};

export default Time;
