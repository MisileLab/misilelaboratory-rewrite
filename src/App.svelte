<svelte:head>
<title>{title}</title>
</svelte:head>

<script>
	export let title = "MisileLaboratory"
	import { reveal } from 'svelte-reveal';
</script>


<body>
	<main>
		<h1 use:reveal={{ transition: "slide", reset: true, duration: 500 }}>Welcome to MisileLaboratory</h1>
		<description use:reveal={{ transition: "slide", reset: true, duration: 1000 }}>
		Misilelaboratory make a open source program that does not exist or improve than others.
		</description>
		<projectstitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Projects</projectstitle>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 2500}}>
			<summary>2021</summary>
			<a id="furluck-bot" href="https://github.com/MisileLab/FurLuck-Bot/" use:reveal={{ transition: "slide", reset: true, duration: 500 }}>furluck bot</a>
		</details>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 3000}}>
			<summary>2022</summary>
			<a id="dura" href="https://crates.io/crates/dura" use:reveal={{ transition: "slide", reset: true, duration: 500 }}>dura release</a>
			<a id="pythonvcs" href="https://github.com/MisileLab/PythonVCS" use:reveal={{ transition: "slide", reset: true, duration: 1000 }}>PythonVCS</a>
		</details>
		<teamstitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Teams</teamstitle>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 2500}}>
			<summary>2021</summary>
			<a id="team-int" href="https://github.com/Team-int" use:reveal={{ transition: "slide", reset: true, duration: 500 }}>team int</a>
		</details>
		<details id="details" use:reveal={{ transition: "slide", reset: true, duration: 3000}}>
			<summary>2022</summary>
			<a id="spacedev" href="https://github.com/spacedev-official" use:reveal={{ transition: "slide", reset: true, duration: 500 }}>spacedev</a>
		</details>
		<profilestitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Profiles</profilestitle>
		<div class="profile">
			<a use:reveal={{ transition: "slide", reset: true, duration: 2500}} href="https://github.com/misilelab/">Github</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 3000}} href="https://gitlab.com/misilelab">Gitlab</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 3500}} href="https://nest.pijul.com/MisileLab">Pijul nest</a>
			<a use:reveal={{ transition: "slide", reset: true, duration: 4000}} href="https://gitea.chizstudio.com/MisileLaboratory">Gitea with NAS</a>
		</div>
		<donatestitle use:reveal={{ transition: "slide", reset: true, duration: 1700}}>Donate me</donatestitle>
		<div class="donate">
			<a use:reveal={{ transition: "slide", reset: true, duration: 2500}} href="https://github.com/MisileLab/donatewithcrypto">Crypto</a>
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
	</style>
</body>

<style>
	body {
		background-color: #ECC488;
		min-width: 1920px;
		min-height: 1080px;
	}
</style>