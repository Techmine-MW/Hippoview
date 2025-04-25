import Image from "next/image";
import type { RenderPhotoProps, Photo } from "react-photo-album";

const NextJsImage = ({
  photo,
  imageProps: { alt, title, sizes, onClick },
  wrapperStyle,
}: RenderPhotoProps<Photo>) => {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        src={photo.src}
        alt={alt}
        title={title}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        onClick={onClick}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default NextJsImage;
