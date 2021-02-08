function newSingle(single) {
  return `New single ${single} is dropping soon!`;
}

function eresBadBunny(name) {
  return name.toUpperCase() === 'BAD BUNNY'
};

function areYouLil(name) {
  name = name + " ";
  return name.startsWith('Lil ');
};

function mostViewsThreeVideos(videoOneViews, videoTwoViews, videoThreeViews){
  return Math.max(videoOneViews, videoTwoViews, videoThreeViews);
};

function mostViews(videoViews){
  return Math.max(...videoViews);
};

module.exports = {
    newSingle,
    eresBadBunny,
    areYouLil,
    mostViewsThreeVideos,
    mostViews
}
