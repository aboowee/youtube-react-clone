import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => ( // interate over the array (map)
  <div className="video-list">
    <div>
      {props.videos.map((video) => (
        <VideoListEntry video={video} />
      ))}
    </div>
  </div>
);

//<div><h5><em>props.videos.map</em> view goes here</h5></div>



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
