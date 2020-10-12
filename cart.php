<?php
include_once './db/connection.php';
$object= new Connection();
$connection= $object->Connect();
?>
<!DOCTYPE html>
<html lang="eng">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/57dcfaff64.js" crossorigin="anonymous"></script>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
    <link rel="stylesheet" href="./css/animate.css">
    <link rel="stylesheet" href="./css/carousel.css">
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <title>Grocerypal</title>
</head>

<body onload="render()">
    <header>
        <nav class="navbar fixed-top navbar-expand-md navbar-dark text-white" style="background: #f5bd04">
            <a class="text-white navbar-brand" href="#">
                <i class="fab fa-pagelines animate flash"></i> Groserypal
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navabarCollapse"
                aria-controls="navbarColapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"> </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto menu">
                    <li class="nav-item active">
                        <a href="./index.html" class="nav-link">Home</a>
                    </li>                    
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                    <a class="text-white nav-link" href="#">
                        <i class="text-success fas fa-shopping-cart" ></i> Shopping Cart
                        <i style="color:yellow" id="cart_n"></i>
                    </a>
                </form>      
            </div>
        </nav>
    </header>
    <div class="container mt-3">
        <main role="main">
            <div class="row">
                <div class="col">
                    <div class="table-responsive-sm">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody id="table">
                            
                            </tbody>
                        </table>                        
                    </div>
                </div>
            </div>
            <hr class="featurette-divider">
        </main>
    </div>

    <!-- END MODAL -->
    <div class="container">
        <footer>
            <p class="float-right">
                <a href="#">TOP</a>
            </p>
            <div class="row">
                ADEEPA AKALANKA
            </div>
        </footer>
    </div>
    <!-- javascript -->
    <script
        src="http://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.29.2/dist/sweetalert2.all.min.js"></script>
    <script src="./js/wow.js"></script>
    <script src="./js/cart.js"></script>
    <!--end javascript  -->
</body>

</html>
