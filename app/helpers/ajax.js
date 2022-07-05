export async function ajax(props) {
	let { url, cbSuccess } = props;

	await fetch(url)
		.then((res) => (res.ok ? res.json() : Promise.reject()))
		.then((json) => cbSuccess(json))
		.catch((err) => {
			let message = "Ocurrió un error";

			document.getElementById("main").innerHTML = `
            <div class="error">
                <p>Error: ${message} </p>
            </div>
            `;
		});
}
