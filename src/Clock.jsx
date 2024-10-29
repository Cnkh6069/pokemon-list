import { useState, useEffect } from "react";

export default function Clock(props) {
  const [date, setDate] = useState(new Date());
  //to run effect at each render to refresh by 1 second
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  //Label for the time
  return (
    <>
      <p>
        {/* {props.timeZone}: */}
        {date.toLocaleString("en-GB", { timeZone: `${props.timeZone}` })}
      </p>
    </>
  );
}
