var i=1;

function change_pic1()
{
	 var pic=document.getElementById("pic1");


	if(i==1)
	{
		 pic.src='./images/s1.jpg';
		 i=2;
	}
	else if(i==2)
		  {
			pic.src='./images/m1.jpg';
			i=3;
		
		  }
		  else if(i==3)
				{
				  pic.src='./images/nature.jpg';
				  i=4;
				}
				else if(i==4)
					  {
					    pic.src='./images/r1.jpg';
					    i=5;
					  }
					  else
						  {
						   pic.src='./images/r2.jpg';
							i=1;
						  
						  }
}

setInterval('change_pic1()', 500);



