<?php

$url = explode('/', $_SERVER['REQUEST_URI']);
$path = end($url);

$repoFile = './'.'repository.json';

if($_SERVER['REQUEST_METHOD'] === 'POST'){

  if($path === 'save'){

    $jsonBody = json_decode(file_get_contents('php://input'), true);

    $fp = fopen( $repoFile, 'w');
    $fwrite = fwrite($fp, json_encode($jsonBody));
    if ($fwrite === false) {
      header('HTTP/1.1 501 Write error');
    }
    else{
      header('HTTP/1.1 200');
      print 'Saved';
    }
    fclose($fp);
  }
  else{
    header('HTTP/1.1 404 Path not found');
    print '{"path":"'.$path.'"}';
  }
}
else{
  if($path === 'repo'){

    $repoContent = file_get_contents($repoFile);

    if($repoContent === false) { 
      header('HTTP/1.1 404 No file');
      print '{"error":"no-file"}';
    }
    else{
      header('HTTP/1.1 200');
      print $repoContent;
    }
  }
  if($path === 'ecco'){
    header('HTTP/1.1 501 Not Implemented');
  }
  if($path === 'ecco-stop'){
    header('HTTP/1.1 501 Not Implemented');
  }
}


# isset($_POST['save'])

// $responseObj = array(
//   'items'=> $jsonBody["items"],
//   'tree'=> $jsonBody["tree"],
//   'date'=> date('Y-m-d'),
// );

?>
