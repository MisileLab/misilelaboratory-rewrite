<script>
	import { reveal } from 'svelte-reveal';
</script>

<body>
	<main>
		<h1 use:reveal={{ transition: "slide", reset: true }}>Welcome to MisileLaboratory</h1>
		<description use:reveal={{ transition: "slide", reset: true, duration: 1000 }}>
		Misilelaboratory make a open source program that does not exist or improve than others.
		</description>
		<projectstitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Projects</projectstitle>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 2500}}>
			<summary>2021</summary>
			<a id="furluck-bot" href="https://github.com/MisileLab/FurLuck-Bot/">furluck bot</a>
		</details>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 3000}}>
			<summary>2022</summary>
			<a id="dura" href="https://crates.io/crates/dura">dura release</a>
		</details>
		<teamstitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Teams</teamstitle>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 2500}}>
			<summary>2021</summary>
			<a id="team-int" href="https://github.com/Team-int">team int</a>
		</details>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 3000}}>
			<summary>2022</summary>
			<a id="spacedev" href="https://github.com/spacedev-official">spacedev</a>
		</details>
		<accountstitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Profiles</accountstitle>
		<div class="account">
			<a use:reveal={{ transition: "slide", reset: true, duration: 2500}} href="https://github.com/misilelab/">Github</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 3000}} href="https://gitlab.com/misilelab">Gitlab</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 3500}} href="https://nest.pijul.com/MisileLab">Pijul nest</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 4000}} href="https://gitea.chizstudio.com/MisileLaboratory">Gitea with NAS</a>
		</div>
	</main>

	<style>
		main {
			font-weight: 100;
		}

		#details {
			margin-left: 17.4%;
			font-size: 1.5em;
			color: #B667F1;
		}

		.account {
			margin-left: 17.4%;
			font-size: 1.5em;
		}

		accountstitle {
			margin: auto;
			margin-top: 50px;
			margin-left: 17.4%;
			font-size: 1.5em;
			color: #B667F1;
		}

		projectstitle {
			display: block;
			color: #9C51E0;
			font-size: 1.7em;
			margin: auto;
			margin-top: 50px;
			margin-left: 17.4%;
		}


		teamstitle {
			display: block;
			color: #9C51E0;
			font-size: 1.7em;
			margin: auto;
			margin-top: 50px;
			margin-left: 17.4%;
		}

		description {
			display: block;
			color: #9C51E0;
			font-size: 2em;
			margin: auto;
			margin-top: 40px;
		}

		h1 {
			color: #8A39E1;
			font-size: 3em;
			font-weight: 100;
			display: block;
			margin: auto;
			margin-top: 10px;
		}

		@media (min-width: 640px) {
			main {
				max-width: none;
			}
		}
	</style>
</body>

<style>
	body {
		background-color: #ECC488;
	}
</style>