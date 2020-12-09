// A function that pulls a random cat image from the web
  
function showMeCat() {
  let image = document.createElement('img');
  let div = document.getElementById('cat-gen');
  image.src = "https://media4.giphy.com/media/roZg3KeB7Pzfq/giphy.webp?cid=ecf05e475a9lw70khlk4vobrzqvtx5k3ikgw08b409geyl0i&rid=giphy.webp";
  div.appendChild(image);
}