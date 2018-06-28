onmessage = (files) => {debugger
    if (files) {
        for(let file of files.data){
            console.log(file.name+' -- '+file.size);
            const fr = new FileReader();
            fr.onload= (data)=>{
                // console.log(fr.result);
                postMessage({res:fr.result});

            };

            fr.onprogress = (e)=>{
                console.log('Loading: '+ e.loaded/e.total*100+'%');
            };

            fr.readAsDataURL(file);

        }

    }
};
