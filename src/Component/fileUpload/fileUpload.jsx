// import { Cloudinary } from "@cloudinary/url-gen";
import { Carousel } from "../carousel/carousel";
import { DragAndDrop } from "../DragandDrop/dragDropImage";
// import { uploadCloudinary } from "../Util/cloudinary";
import { useEffect, useState } from "react";
import { ViewUpdater } from "../viewValidater/ViewUpdater";
import { CardComp } from "../card/cards";
import { TableGallery } from "../table/table";
import { getDataFromApi, uploadImageApi } from "../api/api";
import { useSelector, useDispatch } from "react-redux";
import { setImageList } from "../../redux/slice";

export function FileUpload() {
  // const cld = new Cloudinary({ cloud: { cloudName: "dzmvxu5uw" } });
  const imageList = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const [onDropImg, setImageOnDrop] = useState([]);
  const [imageIds, setImageId] = useState([]);
  const [viewSelect, setViewSelect] = useState({
    carousel: true,
    gallery: false,
    table: false,
  });

  // useEffect(() => {
  //   getDataFromApi()
  // },[])

  function onDropFile(files) {  
    dispatch(setImageList(files));
  }
  function onDelete(index) {
    const newimgList = imageList.filter((elem, idx) => idx !== index);
    setImageList(newimgList);
  }
  async function onSave(file) {
    try {
      console.log(file);
      const imgData = await uploadImage(file.data);
      console.log({ imgData });
      alert("Image uploaded sucessfully!");
    } catch (e) {
      alert("unable to upload");
    }
  }

  const uploadImage = async (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      console.log(image.name);
      reader.onloadend = async () => {
        try {
          const response = await uploadImageApi(
            reader.result,
            image.name,
            image.size
          );
          resolve(response);
        } catch (err) {
          reject(err);
        }
      };
    });
  };
  console.log({imageList})
  return (
    <>
      <DragAndDrop onDropFile={onDropFile} />
      <ViewUpdater setViewSelect={setViewSelect} />
      <button onClick={getDataFromApi}>clicK</button>
      {/* <ShowDroppedImage /> */}
      {viewSelect.carousel && (
      <Carousel imageList={imageList} onDelete={onDelete} onSave={onSave} />
      )}
      {viewSelect.gallery && <CardComp imageList={imageList} />}
      {viewSelect.table&& <TableGallery imageList={imageList}/>}
    </>
  );
}
