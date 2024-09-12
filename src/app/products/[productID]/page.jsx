import React from "react";
import { ThreeDCardDemo } from "../../__components/ThreeDCard";
export default function page({ params }) {
  return (
    <div>
      <ThreeDCardDemo id={params.productID} />
    </div>
  );
}