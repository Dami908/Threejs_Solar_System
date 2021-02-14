//Author: Emmanuel Ajayi
//Filename: 01-Emmanuel.js
//Date: January 23,2021


//declare variable

let scene,camera,renderer,orbitControl;
let planets,group,group1,group2,group3,group4,group5,group6,group7,group8,group9,speed = 0.001;
let ear,jup,sat;
//declare init
//Initialize the threejs environment
function init(){
    scene= new THREE.Scene();
    renderer= new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor(0x434674);
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);


}

function setupCameraAndLight(){
    camera = new THREE.PerspectiveCamera(
        75, //Degree of camera
        window.innerWidth/window.innerHeight, //shape
        0.1, //near clipping plane
        400 //Far clipping plane
    );
    camera.position.set(-15,25,20); //Sets the camera's Position
    camera.lookAt(scene.position);
    scene.add(camera);

    orbitControl = new THREE.OrbitControls(camera,renderer.domElement);
    let light=new THREE.PointLight(0xeeeeee,20,50);
    light.position.set(-5,5,-5)
    scene.add(light);

    let axesHelper=new THREE.AxesHelper(5)
    axesHelper.position.y=8;
    scene.add(axesHelper);

}

function createGeometry(){
   
    

    //Box
    let Sphere=new THREE.SphereGeometry(16,32,32);
    let boxmaterial=new THREE.MeshBasicMaterial({color:"#FCD440"});
    let box = new THREE.Mesh(Sphere,boxmaterial);
    box.position.y=4.8;
    box.position.x=0;

    let mecury=new THREE.SphereGeometry(2,14,14);
    let mecmaterial = new THREE.MeshBasicMaterial({color:"#3CB371"});
    let mec=new THREE.Mesh(mecury,mecmaterial);
    mec.position.y=4;
    mec.position.x=25;

    let venus=new THREE.SphereGeometry(3.5,14,14);
    let venmaterial = new THREE.MeshBasicMaterial({color:"#DBCECA"});
    let ven=new THREE.Mesh(venus,venmaterial);
    ven.position.y=5;
    ven.position.x=35;
    

    let earth=new THREE.SphereGeometry(3.5,14,14);
    let earmaterial = new THREE.MeshBasicMaterial({color:"#1E90FF"});
    ear=new THREE.Mesh(earth,earmaterial);
    ear.position.y=5;
    ear.position.x=50;

    let earthMoon=new THREE.SphereGeometry(1.6,14,14);
    let earmoonmaterial = new THREE.MeshBasicMaterial({color:"#808080"});
    let earmoon=new THREE.Mesh(earthMoon,earmoonmaterial);
    earmoon.position.y=2;
    earmoon.position.x=6;

    let mars=new THREE.SphereGeometry(2.6,14,14);
    let marmaterial = new THREE.MeshBasicMaterial({color:"#CD5C5C"});
    let mar=new THREE.Mesh(mars,marmaterial);
    mar.position.y=5;
    mar.position.x=65;

    let jupiter=new THREE.SphereGeometry(8,14,14);
    let jupmaterial = new THREE.MeshBasicMaterial({color:"#FAFAD2"});
    jup=new THREE.Mesh(jupiter,jupmaterial);
    jup.position.y=8.9;
    jup.position.x=85;

    let jupmoon1=new THREE.SphereGeometry(1.6,14,14);
    let jupmaterial1 = new THREE.MeshBasicMaterial({color:"#808080"});
    jup1=new THREE.Mesh(jupmoon1,jupmaterial1);
    jup1.position.y=6.9;
    jup1.position.x=10;

    let jupmoon2=new THREE.SphereGeometry(1.6,14,14);
    let jupmaterial2 = new THREE.MeshBasicMaterial({color:"#808080"});
    jup2=new THREE.Mesh(jupmoon2,jupmaterial2);
    jup2.position.y=1.9;
    jup2.position.x=10;
    jup2.position.z=5;

    let jupmoon3=new THREE.SphereGeometry(1.6,14,14);
    let jupmaterial3 = new THREE.MeshBasicMaterial({color:"#808080"});
    jup3=new THREE.Mesh(jupmoon3,jupmaterial3);
    jup3.position.y=-1.9;
    jup3.position.x=10;
    jup3.position.z=10;

    let jupmoon4=new THREE.SphereGeometry(1.6,14,14);
    let jupmaterial4 = new THREE.MeshBasicMaterial({color:"#808080"});
    jup4=new THREE.Mesh(jupmoon4,jupmaterial4);
    jup4.position.y=-1.9;
    jup4.position.x=3;
    jup4.position.z=10;

    let jupmoon5=new THREE.SphereGeometry(1.6,14,14);
    let jupmaterial5 = new THREE.MeshBasicMaterial({color:"#808080"});
    jup5=new THREE.Mesh(jupmoon5,jupmaterial5);
    jup5.position.y=1.9;
    jup5.position.x=-4;
    jup5.position.z=14;



    let saturn=new THREE.SphereGeometry(6,14,14);
    let satmaterial = new THREE.MeshBasicMaterial({color:"#F0E68C"});
    sat=new THREE.Mesh(saturn,satmaterial);
    sat.position.y=8.9;
    sat.position.x=110;

    let satMoon=new THREE.SphereGeometry(1.6,14,14);
    let satmoonmaterial = new THREE.MeshBasicMaterial({color:"#808080"});
    let satmoon=new THREE.Mesh(satMoon,satmoonmaterial);
    satmoon.position.y=8.9;
    satmoon.position.x=10;

    let satMoon2=new THREE.SphereGeometry(1.6,14,14);
    let satmoonmaterial2 = new THREE.MeshBasicMaterial({color:"#808080"});
    let satmoon2=new THREE.Mesh(satMoon2,satmoonmaterial2);
    satmoon2.position.y=0.9;
    satmoon2.position.x=10;

    let satMoon3=new THREE.SphereGeometry(1.6,14,14);
    let satmoonmaterial3 = new THREE.MeshBasicMaterial({color:"#808080"});
    let satmoon3=new THREE.Mesh(satMoon3,satmoonmaterial3);
    satmoon3.position.y=-6.9;
    satmoon3.position.x=5;

    let uranus=new THREE.SphereGeometry(4.5,14,14);
    let uramaterial = new THREE.MeshBasicMaterial({color:"#00BFFF"});
    let ura=new THREE.Mesh(uranus,uramaterial);
    ura.position.y=8.9;
    ura.position.x=130;

    let Neptune=new THREE.SphereGeometry(4.5,14,14);
    let Nepmaterial = new THREE.MeshBasicMaterial({color:"#0000FF"});
    let Nep=new THREE.Mesh(Neptune,Nepmaterial);
    Nep.position.y=8.9;
    Nep.position.x=150;

    let pluto=new THREE.SphereGeometry(1.4,14,14);
    let plumaterial = new THREE.MeshBasicMaterial({color:"#8B4513"});
    let plu=new THREE.Mesh(pluto,plumaterial);
    plu.position.y=8.9;
    plu.position.x=165;
    


    group=new THREE.Object3D();
    group1=new THREE.Object3D();
    group2=new THREE.Object3D();
    group3=new THREE.Object3D();
    group4=new THREE.Object3D();
    group5=new THREE.Object3D();
    group6=new THREE.Object3D();
    group7=new THREE.Object3D();
    group8=new THREE.Object3D();
    group9=new THREE.Object3D();


    group1.position.y=3.8;
    group1.position.x=0;

    group2.position.y=3.8;
    group2.position.x=0;

    group3.position.y=3.8;
    group3.position.x=0;

    group4.position.y=3.8;
    group4.position.x=0;

    group5.position.y=3.8;
    group5.position.x=0;

    group6.position.y=3.8;
    group6.position.x=0;

    group7.position.y=3.8;
    group7.position.x=0;

    group8.position.y=3.8;
    group8.position.x=0;

    group9.position.y=3.8;
    group9.position.x=0;

    

    //box.add(mec);
    group1.add(mec);
    group2.add(ven);
    group3.add(ear.add(earmoon));
    group4.add(mar);
    group5.add(jup.add(jup1,jup2,jup3,jup4,jup5));
    group6.add(sat.add(satmoon,satmoon2,satmoon3));
    group7.add(ura);
    group8.add(Nep);
    group9.add(plu);
    group.add(box,group1,group2,group3,group4,group5,group6,group7,group8,group9)


   


    //Adds object to scene
    //scene.add(box);
   
    scene.add(group);
    

}
function setupDatGui(){
    
    control = new function(){
        this.name="Emmanuel";
        this.planetrotation=0;
        this.moonrotation=0;
        
        
        //this.color='#53354a';
       
        
    }
    
    let gui = new dat.GUI();
    gui.add(control,'name');
    gui.add(control,'planetrotation').min(0).max(0.005).step(0.001).name("Rotation of Planets");
    gui.add(control,'moonrotation').min(0).max(0.005).step(0.001).name("Rotation of moons");
    
   
    
}
function render(){
    requestAnimationFrame(render);
    orbitControl.update();
    renderer.render(scene,camera);
   // group.rotation.y += speed;
    group1.rotation.y+= control.planetrotation * 7;
    group2.rotation.y+= control.planetrotation * 5;
    group3.rotation.y+= control.planetrotation * 4;
    group4.rotation.y+= control.planetrotation * 3;
    group5.rotation.y+= control.planetrotation * 2;
    group6.rotation.y+= control.planetrotation * 1;
    group7.rotation.y+= control.planetrotation / 2;
    group8.rotation.y+= control.planetrotation / 3 ;
    group9.rotation.y+= control.planetrotation / 4;

    //mec.rotation.z -= speed;
    ear.rotation.z-=control.moonrotation *6;
    jup.rotation.z+=control.moonrotation *6;
    sat.rotation.z+=control.moonrotation *6;
    

}

window.onload=()=>{
    init();
    setupCameraAndLight();
    setupDatGui();
    createGeometry();
    render();

}