const downloadCanvas = () => {
	const gameRound = document.querySelector('#game-round').innerText;
	const drawing_man = document.querySelector(".player:has(.drawing) .player-name").innerText?.replace(" (You)","") ?? "Unknown";
	let a = document.createElement("a");
	a.download = `${(new Date()).toISOString()}_${gameRound}_${drawing_man}.png`;
	a.href = document.querySelector("canvas").toDataURL("application/octet-stream");
	document.body.appendChild(a);
	a.click();
	a.remove();
}
const sleep = (time)=>new Promise(res=>setTimeout(res, time));
(
	async () => {
		let gamebar = document.querySelector("#game-bar");
		while(!gamebar) {
			gamebar = document.querySelector("#game-bar");
			await sleep(10);
		}
		const downloadButton = document.createElement("button");
		downloadButton.style.color = "black";
		downloadButton.innerText = "Download Image";
		downloadButton.addEventListener("click", ()=>downloadCanvas());
		gamebar.insertAdjacentElement("afterEnd",downloadButton);
	}
)();


