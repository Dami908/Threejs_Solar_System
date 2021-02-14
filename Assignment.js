//Author: Emmanuel Ajayi
//Filename: 01-Emmanuel.js
//Date: January 23,2021


//declare variable

let scene,camera,renderer,orbitControl;
let planets,group,group1,group2,group3,group4,group5,group6,group7,group8,group9,speed = 0.001;
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
        200 //Far clipping plane
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
    let geo=new THREE.PlaneBufferGeometry(
        60, //Width
        20 //Height or Length
    );
    let mat = new THREE.MeshLambertMaterial({color : "#903749" });
    let mesh = new THREE.Mesh(geo,mat);
    mesh.rotation.x = -0.5*Math.PI;

    

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
    ven.position.y=4;
    ven.position.x=35;
    

    let earth=new THREE.SphereGeometry(3.5,14,14);
    let earmaterial = new THREE.MeshBasicMaterial({color:"#1E90FF"});
    let ear=new THREE.Mesh(earth,earmaterial);
    ear.position.y=4;
    ear.position.x=50;

    let mars=new THREE.SphereGeometry(2.6,14,14);
    let marmaterial = new THREE.MeshBasicMaterial({color:"#CD5C5C"});
    let mar=new THREE.Mesh(mars,marmaterial);
    mar.position.y=8.9;
    mar.position.x=65;

    let jupiter=new THREE.SphereGeometry(8,14,14);
    let jupmaterial = new THREE.MeshBasicMaterial({color:"#FAFAD2"});
    let jup=new THREE.Mesh(jupiter,jupmaterial);
    jup.position.y=8.9;
    jup.position.x=85;

    let saturn=new THREE.SphereGeometry(6,14,14);
    let satmaterial = new THREE.MeshBasicMaterial({color:"#F0E68C"});
    let sat=new THREE.Mesh(saturn,satmaterial);
    sat.position.y=8.9;
    sat.position.x=110;

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
    group4=new THREE.Object3D();
    group5=new THREE.Object3D();
    group6=new THREE.Object3D();
    group7=new THREE.Object3D();
    group8=new THREE.Object3D();
    group9=new THREE.Object3D();
    group1.position.y=3.8;
    group1.position.x=0;

    //box.add(mec);
    group1.add(mec);
    group4.add(mar);
    group5.add(jup);
    group6.add(sat);
    group7.add(ura);
    group8.add(Nep);
    group9.add(plu)
    box.add(ven);
    box.add(ear);
    group.add(box,group1,group4,group5,group6,group7,group8,group9)


   


    //Adds object to scene
    //scene.add(box);
    scene.add(mesh);
    scene.add(group);
    

}

function render(){
    requestAnimationFrame(render);
    orbitControl.update();
    renderer.render(scene,camera);
   // group.rotation.y += speed;
    //group1.rotation.y+= speed * 6;
    //mec.rotation.z -= speed;
    

}

window.onload=()=>{
    init();
    setupCameraAndLight();
    createGeometry();
    render();

}