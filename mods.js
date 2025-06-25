zipMods = [
	['halva_en.zip', 'Half-Life EN (MENU LAGS) (214M)', 214283501, 21, 10485760],
	['opposing_force_en.zip', 'Opposing Force EN (BUGGED (old ver) + MENU LAGS) (221M)', 221191140, 22, 10485760],
];

pkgMods = [
];
var selectZip=document.getElementById('selectZip');
var iArgs=document.getElementById('iArgs');
selectZip.addEventListener('change', function(){
	if(selectZip.value=="halva_en.zip")
	{
		//alert('Bugs: menu lagging.');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="blue_shift_en.zip")
	{
		//alert('Bugs: Sometimes needs noclip, because you can\'t pick armor');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="opposing_force_en.zip")
	{
		//alert('Bugs: Menu lagging, doesn\'t spawn NPCs (because old xash version).');
		iArgs.value="-dev 1 -game gearbox";
	}
	else if(selectZip.value=="")
	{
		//alert('Bugs: No bugs.');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="")
	{
		//alert('Bugs: Sometimes needs noclip, because you can\'t pick armor');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="")
	{
		//alert('Bugs: Doesn\'t spawn NPCs (because old xash version).');
		iArgs.value="-dev 1 -game valve";
	}
});
