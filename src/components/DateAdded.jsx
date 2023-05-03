import React from "react";
import { Text } from "rebass";
import { parseISO, formatDistanceToNow, parse } from "date-fns";

function DateAdded({ timeStamp, sx }) {
  let TimeAgo = "";
  if (timeStamp) {
    let TimePeriod = formatDistanceToNow(parseISO(timeStamp));

    if (TimePeriod.includes("minute"))
      TimePeriod = TimePeriod.replace("minute", "min");
    else if (TimePeriod.includes("month"))
      TimePeriod = TimePeriod.replace("month", "mon");
    if (TimePeriod.includes("less than"))
      TimePeriod = TimePeriod.replace("less than", " ");
    if (TimePeriod.includes("about"))
      TimePeriod = TimePeriod.replace("about", " ");

    TimeAgo = `${TimePeriod} ago`;
  }

  return (
    <Text width={`15%`} sx={sx}>
      {TimeAgo}
    </Text>
  );
}

export default DateAdded;
