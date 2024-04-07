export async function uploadImageApi(image, name, size) {
  try {
    const response = await fetch("/image/upload-image", {
      method: "POST",
      body: JSON.stringify({
        image,
        name,
        size,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}


export async function getDataFromApi(){
  try {
    const respose = await fetch("/image/get-images");
    console.log(await respose.json());
     
  } catch (err) {
    return err
   }
}
