this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "You are the best friend whome I cherrish a lot. It would not be false if I say, we have grown together, two people knowing almost everything about each other. Nothing in my life is complete without sharing it with you, but mostly I long to live and make all my memories together with you. I may not be the perfect person to look up to, But, I will always stand by your side and be there for you, as a friend and as a person who understands you. I wish you all the love and success in all your endeavors.";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
