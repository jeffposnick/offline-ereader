<script>
	import csvToJson from 'csvtojson';
	import marked from 'marked';
	import {get, set} from 'idb-keyval';

	async function getBookJSON() {
		let bookMetadata = await get('book-metadata');
		if (!bookMetadata) {
			const response = await fetch('https://raw.githubusercontent.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv');
			const csv = await response.text();
			const allMetadata = await csvToJson().fromString(csv);
			bookMetadata = allMetadata.map((row) => {
				return {
					title: row.Title,
					author: row.Author,
					url: row['Gitenberg URL'],
				};
			});
			await set('book-metadata', bookMetadata);
		}

		return bookMetadata;
	}

	let currentBook;
	async function handleClick(url) {
		let html = await get(url);
		if (!html) {
			const parts = url.split('/');
			const number = parts[4].match(/\d+/)[0];
			const response = await fetch(`https://raw.githubusercontent.com/${parts[3]}/${parts[4]}/master/${number}.txt`);
			const markdownText = await response.text();
			html = marked(markdownText);
			await set(url, html);
		}
		currentBook = html;
	}
</script>

<style>
	li {
		cursor: pointer;
	}

	#book {
		bottom: 0;
		column-count: 2;
		left: 0;
		margin: 1em;
		position: absolute;
		right: 0;
		scroll-snap-type: x mandatory;
		top: 0;
  	overflow-x: scroll;
	}

	#book :global(*) {
		scroll-snap-align: start;
	}
</style>

{#await getBookJSON()}
	<p>Loading book metadata...</p>
{:then books}
	{#if currentBook}
		<div id="book">
			{@html currentBook}
		</div>
	{:else}
		<ul>
			{#each books as book}
				<li on:click={() => handleClick(book.url)}>{book.title}, by {book.author}</li>
			{/each}
		</ul>
	{/if}
{:catch error}
	<p>Couldn't load book metadata: {error.message}</p>
{/await}
