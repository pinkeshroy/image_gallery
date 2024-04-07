import './table.css'
export function TableGallery({ imageList=[] }) {
    
    return (
      <div className="table-container">
        <table className='table'>
          <thead>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
          </thead>
          <tbody>
            {imageList.map((file) => {
              const date = JSON.stringify(file.data.lastModifiedDate);
              console.log(typeof date);
              return (
                <tr>
                  <td>
                    <img className='td-image' src={file.url} alt="loading" />
                  </td>
                  <td className='image-name'>{file?.data?.name}</td>
                  <td className='image-type'>{file?.data?.type}</td>
                  <td className='image-modifieddate'>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
    
}