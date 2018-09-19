<?php
$con = mysql_connect("<?php
$con = mysql_connect("localhost","id1245415_gowtthi","Gowthama");
if (!$con)
{
die('Could not connect: ' . mysql_error());
}

// some code

mysql_close($con);
?> ","mysql_user","mysql_pwd");
if (!$con)
{
die('Could not connect: ' . mysql_error());
}

// some code

mysql_close($con);
?>