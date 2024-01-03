let nums = [1,2,3,4,5,6];
let nums2 = [1,23,323];

function verificaNumElementos(arr) {
  if(arr.length >= 5) {
    console.log("muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

verificaNumElementos(nums);
verificaNumElementos(nums2);