<body>
	<div class="container justifyit maxit">
		<h1>Hello, Misile</h1>
	</div>
	<div class="container column-flex maxit">
		<h1 class="nottitle">저의 목표는</h1>
		<p class="desc">- 새로운 것을 빠르게 활용하는 것입니다.</p>
		<p class="desc">- 많은 오픈 소스 프로그램과 라이브러리를 만드는 것입니다.</p>
		<p class="desc">- 오래된 표준에 얽혀있지 않고 새로운 기술로 빠르게 이전하는 것입니다.</p>
		<p class="desc">- 원하는 것을 하는 것입니다.</p>
		<h1 class="nottitle">쓰는 컴퓨터 OS는</h1>
		<p class="desc">- Windows 11 Dev channel</p>
		<p class="desc">- Freebsd</p>
		<p class="desc">- Gentoo linux musl/clang</p>
		<p class="desc">- Artix linux openrc</p>
		<p class="desc">- Use arch btw</p>
		<p class="desc">- Fedora linux</p>
	</div>
</body>

<style>
	:global(body) {
		background-color: #282A3A;
	}
	h1 {
		color: white;
		font-size: 40px;
		text-align: center;
	}
	body {
		height: 100%;
		width: 100%;
	}
	.justifyit {
		align-items: center;
		justify-content: center;
	}
	.maxit {
		height: 100%;
		width: 100%;
	}
	.container {
		display: flex;
	}
	.column-flex {
		flex-direction: column;
	}
	.desc {
		color: white;
		text-align: left;
		margin-left: 30px;
		font-size: 25px;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 0px;
	}
	.nottitle {
		text-align: left;
		font-size: 30px;
	}
</style>
