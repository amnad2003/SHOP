fetch("rates.json")
.then(r => r.json())
.then(data => render(data))

function render(data){
  document.getElementById("shop").innerText = data.shopName

  const box = document.getElementById("content")
  box.innerHTML = ""

  data.games.forEach(game => {
    let html = `
      <section class="card">
        <h2>${game.name}</h2>
    `

    game.items.forEach(item => {
      html += `
        <div class="price-row">
          <span class="price-name">${item.name}</span>

          <div class="price-right">
            <b>${item.price} บาท</b>
            <span class="cart-btn"
              onclick="window.open('${data.orderLink}','_blank')"
              title="สั่งซื้อ">
              🛒
            </span>
          </div>
        </div>
      `
    })

    html += `</section>`
    box.innerHTML += html
  })
}
