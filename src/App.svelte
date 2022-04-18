<svelte:head>
<title>{title}</title>
</svelte:head>

<script>
	export let title = "MisileLaboratory"
	import { reveal } from 'svelte-reveal';
	import { fly } from 'svelte/transition';
	let visible = {
		projects2021: false,
		projects2022: false,
		orgs2021: false,
		orgs2022: false
	};
	let flyx = -40;
</script>


<body>
	<main>
		<h1 use:reveal={{ transition: "slide", reset: true, duration: 500 }}>Welcome to MisileLaboratory</h1>
		<description use:reveal={{ transition: "slide", reset: true, duration: 1000 }}>
		Misilelaboratory make a open source program that does not exist or improve than others.
		</description>
		<projectstitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Projects</projectstitle>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 2500}} bind:open={visible["projects2021"]}>
			<summary>2021</summary>
			{#if visible["projects2021"]}
				<a href="https://github.com/MisileLab/FurLuck-Bot/" transition:fly="{{ x: flyx, duration: 1000 }}">furluck bot</a>
			{/if}
		</details>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 3000}} bind:open={visible["projects2022"]}>
			<summary>2022</summary>
			{#if visible["projects2022"]}
				<a href="https://crates.io/crates/dura" transition:fly="{{ x: flyx, duration: 1000 }}">dura release</a>
				<a href="https://github.com/MisileLab/git-desktop" transition:fly="{{ x: flyx, duration: 1300 }}">Git desktop</a>
				<a href="https://github.com/MisileLab/RustVCS" transition:fly="{{ x: flyx, duration: 1600 }}">RustVCS</a>
				<a href="https://github.com/MisileLab/doxa-bot" transition:fly="{{ x: flyx, duration: 1900 }}">Doxa bot</a>
				<a href="https://github.com/MisileLab/simple-random-numbers" transition:fly="{{ x: flyx, duration: 2100 }}">Random number generator</a>
			{/if}
		</details>
		<teamstitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Teams</teamstitle>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 2500}} bind:open={visible["orgs2021"]}>
			<summary>2021</summary>
			{#if visible["orgs2021"]}
				<a href="https://github.com/Team-int" transition:fly="{{ x: flyx, duration: 1000 }}">team int</a>
			{/if}
		</details>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 3000}} bind:open={visible["orgs2022"]}>
			<summary>2022</summary>
			{#if visible["orgs2022"]}
				<a href="https://github.com/spacedev-official" transition:fly="{{ x: flyx, duration: 1000 }}">spacedev</a>
			{/if}
		</details>
		<profilestitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Profiles</profilestitle>
		<div class="profile">
			<a use:reveal={{ transition: "slide", reset: true, duration: 2500}} href="https://github.com/misilelab/" id="github">Github</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 3000}} href="https://gitlab.com/misilelab" id="gitlab">Gitlab</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 3500}} href="https://gitea.chizstudio.com/MisileLaboratory" id="gitea">Gitea with NAS</a>
		</div>
		<donatestitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Donate me</donatestitle>
		<div class="donate">
			<a use:reveal={{ transition: "slide", reset: true, duration: 2500}} href="https://github.com/MisileLab/donatewithcrypto" id="donatecrypto">Crypto</a>
		</div>
		<details id="gistgithub" use:reveal={{ transition: "slide", reset: true, duration: 3000}}>
			<summary>Commit history</summary>
			<iframe title="gistgithub" src="https://gist.github.com/MisileLab/5d19a8216e9376ae5ec36a768fd8fdff.pibb" frameborder=0 scrolling="no" style="width: 459px;"></iframe>
		</details>
	</main>

	<style>

		main {
			font-weight: 100;
		}

		#gistgithub {
			margin-top: 20px;
			margin-left: 17.4%;
			font-size: 1.5em;
			color: #B667F1;
		}

		#details {
			margin-left: 17.4%;
			font-size: 1.5em;
			color: #B667F1;
		}

		.profile {
			margin-left: 17.4%;
			font-size: 1.5em;
		}

		.donate {
			margin-left: 17.4%;
			font-size: 1.5em;
		}

		profilestitle {
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

		donatestitle {
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

		a {
			display: block;
		}
	</style>
</body>

<style>

	body {
		background-color: #ECC488;
	}

	@media (min-width: 640px) {
		body {
			min-width: 1920px;
			min-height: 1080px;
		}
	}
</style>