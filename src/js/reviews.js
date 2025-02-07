
const reviewList = document.querySelector('.reviews-list');
console.log(reviewList);
const renderReviews = info =>{

    return `
    <li class="reviews-card">
                <img class="reviews-card-avatar" src="${info.avatar_url}"></img>
                <h4 class="reviews-card-name">${info.author}</h4>
                <p class="reviews-card-description">${info.review}</p>
            </li>
    `;
};



fetch('https://portfolio-js.b.goit.study/api/reviews')
.then(response => {
    if(!response.ok){
        throw new Error(response.status);
    }
   
   return response.json();
   
} ).then (data =>{   
    const reviewCards = data.map(el => renderReviews(el)).join('');
    reviewList.innerHTML = reviewCards;

})
.catch(err =>{
    if(err.message === '404'){
        alert('Sorry. there is no reviews yet')
    }
});
