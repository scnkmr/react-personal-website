
function Eyes() {
	var node = document.createElement("script");                 // Create a <li> node
	node.innerHTML=`$(document).ready(function(){
	$("a, .gradient-text, .blog-btn").hover(function(){
	  $(".c-logo").addClass("is-active");
	  $(".c-logo__iris").addClass("is-active");
	  }, function(){
	  $(".c-logo").removeClass("is-active");
	  $(".c-logo__iris").removeClass("is-active");
	});
	});`;         // Create a text node
	document.body.appendChild(node);  

  return (
	<>
    </>
  );
}

export default Eyes;
