export function ContactForm() {
	const d = document,
		$form = d.createElement("form"),
		$styles = d.getElementById("dynamic-styles");

	$styles.innerHTML = `
    .contact-form{
        width: 80%;
        margin: 0 auto;
        display:flex;
        flex-direction: column;
    }

    .contact-form input,textarea{
        width: 100%;
        min-height: 30px;
    }
    `;

	$form.classList.add("contact-form");

	$form.innerHTML = `
    <input type="text" name="name" placeholder="Escribe tu nombre"
    title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <br>
    <input type="email" name="email" placeholder="Escribe tu correo" title="Email incorrecto"
     pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    <br>
    <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
    <br>
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tu comentario" data-pattern="^.{1,255}$"
     title="Tu comentario no debe exceder los 255 caracteres" required></textarea>
    <br>
    <input type="submit" value="Enviar">
    `;

	function validarForm() {
		$form.addEventListener("submit", (e) => {
			e.preventDefault();

			fetch("https://formsubmit.co/ajax/jose.rotchen14@gmail.com", {
				method: "POST",
				body: new FormData(e.target),
			})
				.then((res) => (res.ok ? res.json() : Promise.reject()))
				.then((json) => {
					console.log(json);
				})
				.catch((err) => {
					console.log(err);
				});

			$form.reset();
		});
	}

	setTimeout(() => {
		validarForm();
	}, 100);

	return $form;
}
