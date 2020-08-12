<template>
	<div id="hero">
		<div class='name-container'>
			<div class='letters'>
				<span class='letter'>k</span>
				<span class='letter'>e</span>
				<span class='letter'>n</span>
				<span class='letter'>n</span>
				<span class='letter'>e</span>
				<span class='letter'>t</span>
				<span class='letter'>h</span>
			</div>
			
		</div>

		<div class='name-container last'>
			<div class='letters'>
				<span class='letter'>s</span>
				<span class='letter'>u</span>
				<span class='letter'>n</span>
			</div>
			<div class="headline-clip">
				<span class="headline-wrapper" :style="{ width: wrapWidth+'px' }">
				<p ref="word"
				v-for="word in words"
				:key="words.indexOf(word)"
				:class="showWord(words.indexOf(word))"
				>
				{{ word }}
				</p>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Hero',
	data() {
		return {
			words: [
				"developer",
        "student",
        "amatuer physicist",
        "teenager",
        "cats good",
        "css bad",
			],
      wordId: -1,
      wrapWidth: 0,
		}
	},
	methods: {
		showWord(id) {
			return {
				'word-visible': id == this.wordId,
				'word-hidden': !(id == this.wordId),
			}
		},
		animateHeadline(wait) {
			setInterval(() => {
        setTimeout(() => {
          this.wrapWidth = 0;
        }, 500)

        setTimeout(() => {
          this.wordId = this.wordId === this.words.length-1 ? 0 : this.wordId + 1;
        }, 1000)
        

        setTimeout(() => {
          this.wrapWidth = this.$refs.word[this.wordId].clientWidth;  
        }, 1200)
        
        
			}, wait)
		}
	},
	mounted() {
		this.animateHeadline(4500);
	}
}
</script>

<style scoped>

#hero {
	transition: transform .2s ease;
}

.name-container {
	position: absolute;
	left: 33%;
	top: 150px;
	background: transparent;
	transform: scale(2.6);
}



/* animated headline */



.last {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  top: 250px;
}

.headline-clip {
  display: inline-block;
  height: 4em;
  border-left: 2px solid white;
  transform: scale(0.4);
  /* top: 13.8em; */
}

.headline-wrapper{
  display: inline-block;
  position: absolute;
  left: -2px;
  height: 100%;
  overflow: hidden;
  transition: width 0.5s ease;
  border-right: 2px solid white;
}

.headline-clip p {
  position: absolute;
  color: #1f98b1;
  font-size: 4em;
  line-height: 90%;
  padding: 0 10px;
  white-space: nowrap;
}

.word-visible {
  opacity: 1;
}

.word-hidden {
  opacity: 0;
}

@media screen and (max-width: 1300px) {
	.name-container{
		transition: transform 0.2s ease;
		transform: scale(2);
	}

	.last {
		top: 200px;
	}
}

@media screen and (max-width: 920px) {
	#hero {
		height: 60%;
		width: 100%;
		display: flex;
		align-items: baseline;
		flex-flow: column nowrap;
	}

	#hero > div {
		display: block;
		margin: 40px auto 0 auto;
		position: static;
	}

	.headline-clip {
		position: absolute;
		left: -42px;
		transition: transform 0.2s ease;
		transform: scale(0.4);
	}

	.name-container {
		transform: scale(1.5);
	}
}



/* random text animation */



.letter {
  width: 24px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  margin: 0 0;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  color: #eee;
}

.letter:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  word-break: break-all;
  background-color: #1d1f20;
}

.letter:nth-child(1):before {
  content: "3249516780";
  margin-top: -120px;
  -webkit-animation-name: letter1;
          animation-name: letter1;
  -webkit-animation-duration: 2.7333333333s;
          animation-duration: 2.7333333333s;
  -webkit-animation-delay: 0.18s;
          animation-delay: 0.18s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter1 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter1 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(2):before {
  content: "fjakjylajdvmqjoidaf";
  margin-top: -168px;
  -webkit-animation-name: letter2;
          animation-name: letter2;
  -webkit-animation-duration: 0.875s;
          animation-duration: 0.875s;
  -webkit-animation-delay: 0.75s;
          animation-delay: 0.75s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter2 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter2 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(3):before {
  content: "lfo1f36adfageadf28fa";
  margin-top: -120px;
  -webkit-animation-name: letter3;
          animation-name: letter3;
  -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
  -webkit-animation-delay: 0.91s;
          animation-delay: 0.91s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter3 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter3 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(4):before {
  content: "adimtle";
  margin-top: -144px;
  -webkit-animation-name: letter4;
          animation-name: letter4;
  -webkit-animation-duration: 3.3942857143s;
          animation-duration: 3.3942857143s;
  -webkit-animation-delay: 0.01s;
          animation-delay: 0.01s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter4 {
  from {
    margin-top: -144px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter4 {
  from {
    margin-top: -144px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(5):before {
  content: "5310248976";
  margin-top: 0px;
  -webkit-animation-name: letter5;
          animation-name: letter5;
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
  -webkit-animation-delay: 0.03s;
          animation-delay: 0.03s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter5 {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter5 {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(6):before {
  content: "7628539140";
  margin-top: 0px;
  -webkit-animation-name: letter6;
          animation-name: letter6;
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
  -webkit-animation-delay: 0.82s;
          animation-delay: 0.82s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter6 {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter6 {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(7):before {
  content: "1304895276";
  margin-top: -168px;
  -webkit-animation-name: letter7;
          animation-name: letter7;
  -webkit-animation-duration: 2.765s;
          animation-duration: 2.765s;
  -webkit-animation-delay: 0.21s;
          animation-delay: 0.21s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter7 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter7 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(8):before {
  content: "7309624518";
  margin-top: -192px;
  -webkit-animation-name: letter8;
          animation-name: letter8;
  -webkit-animation-duration: 3.4133333333s;
          animation-duration: 3.4133333333s;
  -webkit-animation-delay: 0.04s;
          animation-delay: 0.04s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter8 {
  from {
    margin-top: -192px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter8 {
  from {
    margin-top: -192px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(9):before {
  content: "1672854039";
  margin-top: -96px;
  -webkit-animation-name: letter9;
          animation-name: letter9;
  -webkit-animation-duration: 0.256s;
          animation-duration: 0.256s;
  -webkit-animation-delay: 0.92s;
          animation-delay: 0.92s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter9 {
  from {
    margin-top: -96px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter9 {
  from {
    margin-top: -96px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(10):before {
  content: "7253981604";
  margin-top: -96px;
  -webkit-animation-name: letter10;
          animation-name: letter10;
  -webkit-animation-duration: 2.272s;
          animation-duration: 2.272s;
  -webkit-animation-delay: 0.29s;
          animation-delay: 0.29s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter10 {
  from {
    margin-top: -96px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter10 {
  from {
    margin-top: -96px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(11):before {
  content: "7961245830";
  margin-top: -168px;
  -webkit-animation-name: letter11;
          animation-name: letter11;
  -webkit-animation-duration: 2.205s;
          animation-duration: 2.205s;
  -webkit-animation-delay: 0.37s;
          animation-delay: 0.37s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter11 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter11 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(12):before {
  content: "0795832641";
  margin-top: 0px;
  -webkit-animation-name: letter12;
          animation-name: letter12;
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
  -webkit-animation-delay: 0.04s;
          animation-delay: 0.04s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter12 {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter12 {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(13):before {
  content: "9476380215";
  margin-top: -48px;
  -webkit-animation-name: letter13;
          animation-name: letter13;
  -webkit-animation-duration: 0.9866666667s;
          animation-duration: 0.9866666667s;
  -webkit-animation-delay: 0.63s;
          animation-delay: 0.63s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter13 {
  from {
    margin-top: -48px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter13 {
  from {
    margin-top: -48px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(14):before {
  content: "0748316925";
  margin-top: -120px;
  -webkit-animation-name: letter14;
          animation-name: letter14;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter14 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter14 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(15):before {
  content: "0651297348";
  margin-top: -96px;
  -webkit-animation-name: letter15;
          animation-name: letter15;
  -webkit-animation-duration: 0.864s;
          animation-duration: 0.864s;
  -webkit-animation-delay: 0.73s;
          animation-delay: 0.73s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter15 {
  from {
    margin-top: -96px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter15 {
  from {
    margin-top: -96px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(16):before {
  content: "5798043216";
  margin-top: -120px;
  -webkit-animation-name: letter16;
          animation-name: letter16;
  -webkit-animation-duration: 2.1666666667s;
          animation-duration: 2.1666666667s;
  -webkit-animation-delay: 0.35s;
          animation-delay: 0.35s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes letter16 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}

@keyframes letter16 {
  from {
    margin-top: -120px;
  }
  to {
    margin-top: 24px;
  }
}

</style>
