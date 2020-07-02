<script>
	let text = '';
	for (let i = 0; i <= 1000; i++) {
		text += `<p>Testing ${i}</p>`;
	}
	
	function handleClick(event) {
		const main = document.querySelector('main');
		const width = main.clientWidth;

		if (event.screenX >= width / 2) {
			console.log('f');
			document.querySelector('main').scroll({
				left: main.scrollLeft + main.clientWidth + 4,
				behavior: 'smooth',
			});
		} else {
			console.log('b');
			document.querySelector('main').scroll({
				left: main.scrollLeft - main.clientWidth - 4,
				behavior: 'smooth',
			});
		}
	}
</script>

<style>
	:global(body) {
		font-family: serif;
		font-size: 400%;
		margin: 0;
	}

	main {
		column-count: 2;
		column-gap: 4px;
		cursor: pointer;
		max-height: 70vh;
		overflow-x: hidden;
		user-select: none;
	}
</style>

<div>
	<main on:click={handleClick}>
		{@html text}
	</main>
</div>
