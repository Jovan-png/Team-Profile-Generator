
const generateHTML = () =>{
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <style>
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    header {
      background-color: rgb(231, 87, 87);
      height: 200px;
      text-align: center;
      color: aliceblue;
    }
    header h1 {
      padding-top: 50px;
    }
    .card-container {
      height: 300px;
      width: 200px;
      margin-left: 50px;
      margin-top: 25px;
      box-shadow: 1px 1px 8px;
    }
    .card-container h2 {
      padding-left: 5px;
      padding-top: 5px;
      color: #fff;
    }
    .card-info-container {
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    li{
        list-style: none;
        background-color: #fff;
        border: 1px solid #f6f7f9;
        height: 30px;
    }
    .card-info {
      border: 1px solid #f6f7f9;
      padding-left: 5px;
      width: 80%;
      margin-left: 10px;
      height: 30px;
    }
    .card-header {
      background-color: #0077f7;
      height: 30%;
      width: 100%;
    }
    .card-body {
      background-color: #f6f7f9;
      height: 70%;
      width: 100%;
    }
    
    </style>
    <body>
        <header>
            <h1>My team</h1>
        </header>
        <div class="card-container">
            <div class="card-header">
            `
        }

            const card = () =>{

           
            `
            
    <h2>
        Jovan
    </h2>
    <h2>
        Engineer
    </h2>
            </div>
            <div class="card-body">
                <div class="card-info-container">
    <div class="card-info">
        <ul>
            <li>ID</li>
            <li>Email</li>
            <li>role</li>
        </ul>
    </div>
    </div>
    
            </div>
        </div>
    </body>
    </html>
    `
  
}
   
   
   