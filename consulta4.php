<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Acidentes DW</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css">
  <link rel="stylesheet" href="vendors/css/vendor.bundle.addons.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/custom.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="images/favicon.png" />
</head>

<body>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center" style="color: black;">
        <h3>Acidentes no <span class="br">BR</span></h3>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center">
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="consulta1.php">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Acidentados por cidade e BR</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="consulta2.php">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Acidentes por cidade e BR</span>
            </a>
          </li>
          <!--li class="nav-item">
            <a class="nav-link" href="consulta3.php">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Acidentes por causa</span>
            </a>
          </li-->
          <!--li class="nav-item">
            <a class="nav-link" href="consulta4.php">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Distribuição de acidentes</span>
            </a>
          </li-->
          <li class="nav-item">
            <a class="nav-link" href="consulta5.php">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Porcentagem de acidentes</span>
            </a>
          </li>
          <!--li class="nav-item">
            <a class="nav-link" href="consulta6.php">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Distribuição dos tipos<br>de acidentes</span>
            </a>
          </li-->
          <li class="nav-item">
            <a class="nav-link" href="consulta7.php">
              <i class="menu-icon mdi mdi-television"></i>
              <span class="menu-title">Distribuição das causas<br>dos acidentes</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12">
              <h2>1)Qual br e de que cidade mais possuem acidentes pessoas em determinadas condições?</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Filtros</h4>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">Condições de pista</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-success mr-2" style="float: right;">Filtrar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      BR 101
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Nº ilesos</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">65,650</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      BR 101
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Nº feridos leves</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">65,650</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      BR 101
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Nº feridos graves</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">65,650</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      BR 101
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Nº óbitos</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">65,650</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <!-- <div class="container-fluid clearfix">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
              <a href="http://www.bootstrapdash.com/" target="_blank">Bootstrapdash</a>. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with
              <i class="mdi mdi-heart text-danger"></i>
            </span>
          </div> -->
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->

  <!-- plugins:js -->
  <script src="vendors/js/vendor.bundle.base.js"></script>
  <script src="vendors/js/vendor.bundle.addons.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="js/off-canvas.js"></script>
  <script src="js/misc.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="js/dashboard.js"></script>
  <!-- End custom js for this page-->
</body>

</html>