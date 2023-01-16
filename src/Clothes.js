import { ApplicationViews } from "./views/ApplicationViews";
import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export const GirlsClothes = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dm5alwbmv"
    }
  })
  const myImage = cld.image('sample');
  return (
    <>
      <ApplicationViews />
      <div>
        <AdvancedImage cldImg={{myImage}} />
      </div>
    </>
  )
}
