function validation(){
		var name= document.getElementById('name').value;
		var password= document.getElementById('password').value;
		if(name=='subash')
		{
			return true;
		}
else
{
	alert('invalid value');
	return false;
	}
}