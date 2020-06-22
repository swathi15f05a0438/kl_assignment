var i=1;

function change_pic1()
{
	 var pic=document.getElementById("pic1");


	if(i==1)
	{
		 pic.src='https://cdn.pixabay.com/photo/2016/07/08/09/46/rose-1503881__340.jpg';
		 i=2;
	}
	else if(i==2)
		  {
			pic.src='https://i.pinimg.com/originals/82/3b/5c/823b5c9d09b740e0f059cf8813677e55.png';
			i=3;
		
		  }
		  else if(i==3)
				{
				  pic.src='';
				  i=4;
				}
				else if(i==4)
					  {
					    pic.src='https://www.wishgoodmorning.org/wp-content/uploads/2016/04/Keep-Smiling-Good-Morning-wg034167.jpg';
					    i=5;
					  }
					  else
						  {
						   pic.src='https://cdn.pixabay.com/photo/2017/10/26/23/58/rose-2892821_960_720.jpg';
							i=1;
						  
						  }
}

setInterval('change_pic1()', 500);



