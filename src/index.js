//Fetch data from db.json
//Pull the image source from ramen data
//Create an image element and append it to the ramen menu div
//Pull data from the ramen db to insert into the details


//Fetching data
const fetchData = () =>{
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then (data => data.forEach(data => {
        console.log(data)
        createImage(data)}))
    }
fetchData()

let ramenMenu = document.getElementById('ramen-menu')

//Creating each image
const createImage = (data) => {
    let ramenImg = document.createElement('img')
    ramenImg.src = data.image
    console.log(ramenImg)
    ramenMenu.append(ramenImg)

    //adding click functionality
    ramenImg.addEventListener('click', () =>{
        console.log('ramen')
        //Reference all elements we want to change
        let detailImage = document.querySelector('.detail-image')
        let ramenName = document.querySelector('.name')
        let whatShop = document.querySelector('.restaurant')
        let rating = document.querySelector('#rating-display')
        let comment = document.querySelector('#comment-display')

        //Change element attributes
        detailImage.src = data.image
        ramenName.textContent = data.name
        whatShop.textContent = data.restaurant
        rating.textContent = data.rating
        comment.textContent = data.comment

        // console.log (detailImage, ramenName, whatShop, rating, comment)
    })
}

//Prevent default submit button behavior
//Take input values from each field after submit is clicked
//Pass new values through createImage() function


let newRamen = document.querySelector('#new-ramen')
let submitBtn = document.querySelector('#submit-button')

submitBtn.addEventListener('click', () => {

    //Prevent default form submit
    event.preventDefault()

    //Pulling all values from the form
    let newName = document.querySelector('#new-name').value
    let newRestaurant = document.querySelector('#new-restaurant').value
    let newImage = document.querySelector('#new-image').value
    let newRating = document.querySelector('#new-rating').value
    let newComment = document.querySelector('#new-comment').value

    console.log(newName, newRestaurant, newImage, newRating, newComment)

    //Consolidating values and passing through createImage()
    let newRamen = [
        {
            "name": newName, 
            "restaurant": newRestaurant,
            "image": newImage,
            "rating": newRating,
            "comment": newComment
        }
    ]

    console.log(newRamen)
    createImage(newRamen)
})