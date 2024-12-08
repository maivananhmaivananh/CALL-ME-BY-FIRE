document.addEventListener("DOMContentLoaded", () => {
	const cart = [];
	const cartItems = document.getElementById("cart-items");
	const totalPriceElement = document.getElementById("total-price");

	function updateCart() {
		cartItems.innerHTML = "";
		let totalPrice = 0;

		cart.forEach(item => {
			const li = document.createElement("li");
			li.textContent = `${item.name} - $${item.price}`;
			cartItems.appendChild(li);
			totalPrice += item.price;
		});

		totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
	}

	document.querySelectorAll(".add-to-cart").forEach(button => {
		button.addEventListener("click", () => {
			const product = {
				id: button.getAttribute("data-id"),
				name: button.parentElement.querySelector("h2").textContent,
				price: parseFloat(button.parentElement.querySelector(".price").textContent.replace("$", ""))
			};
			cart.push(product);
			updateCart();
		});
	});
});
