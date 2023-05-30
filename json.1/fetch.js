fetch('fetch.json')
    .then((response) => response.json())
    .then((qpapers) => {
        let output = '<h2 style="text-align:center";PREVIOUS QUESTION PAPERS</h2>';
        qpapers.forEach(function(material){
            output += `
            <ul>
                <p style="color: white">${material.title}</p>
                <p style="color: white">${material.grade}</p>
                <p style="color: white"><a href="./quest/${material.link}"><input type="submit" value="open"></a></p>
            </ul>
            
           
            `;
        });
        document.getElementById('output').innerHTML = output;
    })




