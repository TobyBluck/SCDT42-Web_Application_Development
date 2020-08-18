<?php 
    if (isset($_POST['txtName']))
    {
        
        echo "<h1>Your name is: " . $_POST['txtName'] . "</h1>";
        
        $email = "blu16274423@btc.ac.uk";
        $subject = "Subject of Message";
        $msg = "name: " . $_POST['txtName'];
        
        mail($email, $subject, $msg); 
        
    }
    $name = "Toby";
    echo "<h1>Hello " . $name . "</h1>";

?>

<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <title>ContactForm</title>
    <meta name="description" content="contact form">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap css cdn -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <link rel="icon" type="image/x-icon" href="" />
</head>

<body>
    <header></header>
    <main>
        <h1>Hello</h1>
        
        <form action="index.php" method="post">
            
            <div class ="form-group"> 
                
                <input type = "text" class="form-control" name="txtName" id="txtName">
                <button type="submit" class ="btn btn-primary btn-block">Submit</button>
                
            </div>
            
        </form>
        
    </main>
    <footer></footer>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
</body>

</html>