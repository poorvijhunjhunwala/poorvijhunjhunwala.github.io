this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "You are the best friend I never askedd for. It would not be false if I say, we have grown together. Both as people and as knowing what we want in life. I always strive to make everyday happy for you, but mostly I urge to live all those together with you. I may not be the perfect person to look up to, but I tell you Poorvi, even if I cannot help you in any way, I will always stand by your side, as a friend as a person close to you. I wish you all the love and success in all your endeavors.";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
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
