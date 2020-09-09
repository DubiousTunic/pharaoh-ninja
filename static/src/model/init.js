//PROTOTYPE: clientside p2p graph db using lunr.js and WebTorrent

var idx = lunr(function () {
  this.field('Medium')

  this.add({
    "Medium": "City of God",
    "Institution": "Saint.Augustine",
    "Tags": "[philosophy,theology]",
    "id":1,
    "hash": "d0d97926cc32c662646382b8470f40f038430095"
  })

  this.add({
    "Medium": "Masamune",
    "Institution": "Josefina",
    "Tags": "[philosophy,science]",
    "id":2,
    "hash": "aebaaade22379c566fc2e72c973577e7cf25cb0d"
  })
  
})