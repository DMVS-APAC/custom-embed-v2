
(()=>{

    const controlDesk = document.getElementById("controlDesk");
    const controlMob = document.getElementById("controlMob");
    const pageWrapper = document.getElementById("pageWrapper");
    const controlWrapper = document.getElementById("controlWrapper");
    const controlMinMax = document.getElementById("controlMinMax");
    const codeWrapper = document.getElementById("codeWrapper");
    const applyBtn = document.getElementById("applyBtn");
    const codeSample1 = document.getElementById("codeSample1");
    const codeSample2 = document.getElementById("codeSample2");

    controlDesk.addEventListener("click",()=>{
        if(!controlDesk.classList.contains("selected")){
            controlDesk.classList.add("selected");
            controlMob.classList.remove("selected");
            pageWrapper.classList.remove("mobile");
        }   
    });
    controlMob.addEventListener("click",()=>{
        if(!controlMob.classList.contains("selected")){
            controlMob.classList.add("selected");
            controlDesk.classList.remove("selected");
            pageWrapper.classList.add("mobile");
        }
    });

    controlMinMax.addEventListener("click",()=>{
        if(controlWrapper.classList.contains("expand")){
            controlWrapper.classList.remove("expand");
            controlMinMax.innerHTML = '<svg ><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>';
        }else{
            controlWrapper.classList.add("expand");
            controlMinMax.innerHTML = '<svg ><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path></svg>';
        }
    });

    applyBtn.addEventListener("click",()=>{
        window.DM_data = editor.get();
        refresh();
    });
    
    codeSample1.addEventListener("click",()=>{
        if( !codeSample1.classList.contains("selected") ){
            codeSample1.classList.add("selected");
            codeSample2.classList.remove("selected");
            initialJson2 = editor.get();
            editor.set(initialJson1);
        }
    });

    codeSample2.addEventListener("click",()=>{
        if( !codeSample2.classList.contains("selected") ){
            codeSample2.classList.add("selected");
            codeSample1.classList.remove("selected");
            initialJson1 = editor.get();
            editor.set(initialJson2);
        }
    });

    // create the editor
    const options = {
        modes: ['text', 'code', 'tree', 'form', 'view'],
        mode: 'code',
        ace: ace
    };
    const editor = new JSONEditor(codeWrapper, options);

    // set json
    let initialJson1 = {
        "cta_card": {
            "video_start": {
                "text": "check this article too.",
                "link": "https://www.example.com/article1"
            },
            "video_middle": {
                "timestamp": 47, 
                "text": "Another interesting articles about the same topic",
                "link": "https://www.example.com/article1"
            },
            "video_end": {
                "text": "check here new topics.",
                "link": "https://www.example.com/article1"
            }
        }
    }
    let initialJson2 = {
        "cta_card": [{
            "video_id":"x2345",
            "video_start": {
                "text": "check this article too.",
                "link": "https://www.example.com/article1"
            },
            "video_middle": {
                "timestamp": 47, 
                "text": "Another interesting articles about the same topic",
                "link": "https://www.example.com/article1"
            },
            "video_end": {
                "text": "check here new topics.",
                "link": "https://www.example.com/article1"
            }
        }]
    }
    editor.set(initialJson1);

    window.DM_data = initialJson1;

    refresh();

    function refresh(){
        pageWrapper.innerHTML = '<iframe src="base.html"></iframe> ';
    }
})();





