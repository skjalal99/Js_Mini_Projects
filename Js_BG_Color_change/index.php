<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 5 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
 
  <style>
  .fakeimg {
    height: 200px;
    background: #aaa;
  }
  </style>
</head>
<body>

<div class="p-5 bg-primary text-white text-center">
  <h1>Change Background Color JS Project</h1>
  <p>Click on button to change bg</p> 
</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav" >
      <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
        
    </ul>
    
    
  </div>
</nav>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav" >
      
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"> Change By Dropdown</a>
            <ul class="dropdown-menu" id="itemList">
              <li><a class="dropdown-item"href="#" data-color="#FF5733">Red</a></li>
              <li><a class="dropdown-item"href="#" data-color="#33FF57">Green</a></li>
              <li><a class="dropdown-item"href="#" data-color="#3333FF">Blue</a></li>
            </ul>
        </li>

    </ul>
    
    
  </div>
</nav>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav" >   
      <small class='text-primary'>Change By Button</small>|
        <button class="btn btn-primary color-button" data-color="#FF5733">Red</button>
        |
        <button class="btn btn-primary color-button" data-color="#33FF57">Green</button>
        |
        <button class="btn btn-primary color-button" data-color="#3333FF">Blue</button> 
    </ul> 
  </div>
</nav>



<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
  <!-- Select dropdown for colors -->
  <select id="colorSelect" class="form-select" >
        <option value="#FF5733">Red</option>
        <option value="#33FF57">Green</option>
        <option value="#3333FF">Blue</option>
    </select>

    <!-- Apply button to change the background color -->
    <button id="applyButton" class="btn btn-primary">Apply</button> 
  </div>
</nav>



<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3 class="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 7</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

      <h2 class="mt-5">TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2023</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
</div>

<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Foote</p>
</div>
<script src="body.js"></script>
</body>

</html>
