container = document.querySelector(".cartcontainer");

function fetchProducts() {
  fetch("items.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        displayItems(item);
      });
    })
    .catch((error) => console.error(error));
}

function displayItems(item) {
  container.innerHTML += `
        <div class="cartitem">
            <h1>${item.name}</h1>
            <p>₱${item.price}</p>
        </div>
      `;
}
let totalPrice = 0;
if (items.length === 0) {
    container.innerHTML += `
      <div>
        <h1 class="empty">ADD A PRODUCT</h1>
      </div>
    `;
  } else {

    const fetchPromises = items.map((prod) => {
      return fetch("items.json")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((item) => {
            if (item.item === prod) {
              displayItems(item);
              let price = item.price.replace(",", ""); // Remove commas from the price
              console.log(price);
              totalPrice += Number(price);
            }
          });
        })
        .catch((error) => console.error(error));
    });
  
    Promise.all(fetchPromises)
      .then(() => {
        console.log(totalPrice);
        const totalCheckout = document.getElementById('totalCheckout');
        totalCheckout.innerText = `₱${totalPrice}`;
      })
      .catch((error) => console.error(error));
  }

  const checkoutButton = document.querySelector('.cartcheckout button');

checkoutButton.addEventListener('click', ()=>{
    if (items.length === 0) {
        window.alert('ADD AN ITEM FIRST');
      }
      else{
        window.alert(`PLACED ORDER WITH TOTAL: (₱${totalPrice})`);
        window.localStorage.clear();
        location.reload();
      }

})
  
