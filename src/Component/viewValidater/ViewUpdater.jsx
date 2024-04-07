import './viewUpdater.css'
export function ViewUpdater({ setViewSelect }) {
    function handleOnCrouselButton() {
        setViewSelect({
            carousel: true,
            gallery: false,
            table: false,
        })
    }
    function handleOnGalleryButton() {
        setViewSelect({
            carousel: false,
            gallery: true,
            table: false,
        })
    }
      function handleOnTableButton() {
        setViewSelect({
          carousel: false,
          gallery: false,
          table: true,
        });
      }

  return (
    <div className="view-button-container">
      <button onClick={handleOnCrouselButton} className="crouselView">
        Carousel view
      </button>
      <button onClick={handleOnGalleryButton} className="Gallery">
        Gallery View
      </button>
      <button onClick={handleOnTableButton} className="tableView">
        Table View
      </button>
    </div>
  );
}