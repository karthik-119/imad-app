<?php
$db = pg_connect("host=db.imad.hasura-app.io port=5432 dbname=karthikrockz83 user=karthikrockz83 password=db-karthikrockz83-3566");
$query = "INSERT INTO 'user' VALUES ('$_POST[username]','$_POST[password]')";
$result = pg_query($query); 
?>
