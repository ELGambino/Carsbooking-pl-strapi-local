import React from 'react';
import { img_path_api } from '../../../environment';
interface Image {
  className?: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  id?:string;
}

const ImageWithBasePathApi = (props: Image) => {
  // Combine the base path and the provided src to create the full image source URL
  const fullSrc = `${img_path_api}${props.src}`;
  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height}
      alt={props.alt}
      width={props.width}
      id={props.id}
    />
  );
};

export default ImageWithBasePathApi;
