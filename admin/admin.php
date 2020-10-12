
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/57dcfaff64.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
    <link rel="stylesheet" href="../css/animate.css">
    <link rel="stylesheet" href="../css/carousel.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Grocerypal</title>
</head>

<body>
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
                        <a href="#" class="nav-link">Home</a>
                    </li>                    
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                    <a style="cursor:pointer" class="nav-link text-white" href="../index.html">EXIT</a>
                </form>      
            </div>
        </nav>
    </header>
    <div class="container">
        <div class="col-lg-12">
            <button data-toggle="modal" id="newBtn" type="button" class="mt-4 btn btn-success">New Order

            </button>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table id="tableOrders" class="table table-striped table-bordered table-condensed" style="width:100%;">
                        <thead class="text-ceter">
                            <tr>
                                <th>Id</th>
                                <th>Order</th>
                                <th>Total</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach($data as $dat){

                            ?>
                            <tr>
                                <td><?php echo $dat['id']?></td>
                                <td><?php echo $dat['product_order']?></td>
                                <td><?php echo $dat['total']?></td>
                                <td></td>
                            </tr>
                            <?php
                                }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
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
    <script src="../js/wow.js"></script>
    <script src="../js/cart.js"></script>
    <script src="./admin.js"></script>
    <script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
    <!--end javascript  -->
</body>

</html>
