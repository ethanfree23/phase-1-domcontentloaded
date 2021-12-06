// Your code goes here




let text = document.querySelector('#text');
document.addEventListener("DOMContentLoaded", () => {
  text.textContent = "This is really cool!"
})



// let text = document.getElementById('text'); // this line sets a variable equal to the ID in the HTML, which is "text"
  // document.addEventListener("DOMContentLoaded", (event) => { // this line calls the doc, adds event listener, says while content is being loaded, the event to trigger...
  // text.textContent = `This is really cool!` // is, changing the textContent of the ID text's corresponding <p></p> to a new string
  // })


// let text = document.getElementById('p')
// text.innerText = 'This is really cool!'


  // below is Elani's code
  // const textToChange = document.getElementById('text');
  // document.addEventListener('DOMContentLoaded', function () {
  //     textToChange.textContent = 'This is really cool!';
  // })



// document.addEventListener("DOMContentLoaded", function(e) { console.log("The DOM has loaded") } );

// let text = document.querySelector('p')
//   text.innerHTML = 'This is really cool!'

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log("This is really cool!")
// })

// let text = document.getElementById('p');
// text.innerHTML = 'JavaScript is so cool. It lets me add text to my page programmatically'

// let text = document.querySelector('p')
// text.innerHTML = 'JavaScript is so cool. It lets me add text to my page programmatically.'