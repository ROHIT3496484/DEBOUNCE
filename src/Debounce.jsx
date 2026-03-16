import React, { useEffect, useState } from "react";

export default function Debounce(val) {
  let timer = setTimeout(() => {
    console.log(val);
  }, 2000);
  return () => clearTimeout(timer);
}
