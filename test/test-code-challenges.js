const { newSingle, eresBadBunny, areYouLil, mostViewsThreeVideos, mostViews } = require('../code-challenges.js');
const assert = require('assert');

describe("Hype Machine Tests", function() {

  it('Drip Single', function() {
  	 assert.equal('New single Drip is dropping soon!', newSingle('Drip'));
  });

  it('Body Single', function() {
  	 assert.equal('New single Body is dropping soon!', newSingle('Body'));
  });

  it('Bandido Single', function() {
  	 assert.equal('New single Bandido is dropping soon!', newSingle('Bandido'));
  });

});

describe("Are You Bad Bunny?", function() {

  it('It is Bad Bunny', function() {
  	 assert.equal(eresBadBunny('Bad Bunny'), true);
  });

  it('It is not Bad Bunny (Bad Rabbit)', function() {
  	 assert.equal(eresBadBunny('Bad Rabbit'), false);
  });

  it('It is not Bad Bunny (Good Bunny)', function() {
  	 assert.equal(eresBadBunny('Bad Rabbit'), false);
  });

  it('It is BAD BUNNY', function() {
  	 assert.equal(eresBadBunny('BAD BUNNY'), true);
  });

});

describe("Lil Rapper", function() {

  it('They are Lil (Lil Wayne)', function() {
  	 assert.equal(areYouLil('Lil Wayne'), true);
  });

  it('They are Lil (Lil Baby)', function() {
  	 assert.equal(areYouLil('Lil Baby'), true);
  });

  it('They are Not Lil (DaBaby)', function() {
  	 assert.equal(areYouLil('DaBaby'), false);
  });

  it('They are not Lil (Young Thug)', function() {
  	 assert.equal(areYouLil('Young Thug'), false);
  });

  it('They are not Lil (Liler Wayne)', function() {
  	 assert.equal(areYouLil('Liler Wayne'), false);
  });

});
