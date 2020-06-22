var i=1;

function change_pic1()
{
	 var pic=document.getElementById("pic1");


	if(i==1)
	{
		 pic.src='m1.jpg';
		 i=2;
	}
	else if(i==2)
		  {
			pic.src='nature_2';
			i=3;
		
		  }
		  else if(i==3)
				{
				  pic.src='r2.jpg';
				  i=4;
				}
				else if(i==4)
					  {
					    pic.src='s1.jpg';
					    i=5;
					  }
					  else
						  {
						   pic.src='r1.jpg';
							i=1;
						  
						  }
}

setInterval('change_pic1()', 500);



