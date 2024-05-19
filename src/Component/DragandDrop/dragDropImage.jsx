import { useState } from 'react';
import './DragDrop.css'
export function DragAndDrop({onDropFile}) {

  // console.log({ onDropFile });
  const [isDrageActive, setDrageActive] = useState(false);

  function setImageOnDrop(files) {
    const fileValue = Object.values(files);
    const fileList = fileValue.map((file, idx) => {
      return {
        url: URL.createObjectURL(file),
        data: file,
      };
    });
    onDropFile(fileList);
  }
  function handleOnDrop(e) {
    console.log({ e });
    e.preventDefault();
    setDrageActive(false);
    const files = e.dataTransfer.files;
    setImageOnDrop(files);
  }
  function handleOnDragOver(e) {
    e.preventDefault();
    setDrageActive(true);
  }

  function handleOnDragLeave() {
    setDrageActive(false);
  }
  function onSelect(e) {
    const files = e.target.files;
    setImageOnDrop(files);
  }
  return (
    <div
      onDrop={handleOnDrop}
      onDragLeave={handleOnDragLeave}
      onDragOver={handleOnDragOver}
      className={`drag-n-drop-conatiner ${
        isDrageActive && "drag-input-active-conatiner"
      }`}
    >
      <input
        onChange={onSelect}
        className="darg-drop-input"
        id="input-file"
        type="file"
        multiple
      />
      <label for="input-file" className="drag-drop-label" id="label-file">
        Upload Image File
      </label>
    </div>
  );
}