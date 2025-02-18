import {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useState,
} from "react";
import { Input } from "../../input";
import Image from "next/image";

type TImageUploaderProps = {
  imageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
};

export default function NMImageUploader({
  imageFiles,
  setImageFiles,
}: TImageUploaderProps) {
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  console.log(imageFiles);
  return (
    <Fragment>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        id="image-uploader"
        className="hidden"
      />
      <label
        htmlFor="image-uploader"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        Upload Logo
      </label>
      <div>
        {imagePreview?.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Shop Logo"
            width={250}
            height={250}
          />
        ))}
      </div>
    </Fragment>
  );
}
