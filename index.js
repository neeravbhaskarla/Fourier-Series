let time = 0;
let wave = [];
let slider;
function setup(){
    createCanvas(600,400);// Canvas shape i.e background box
    slider = createSlider(1,50,1);
}
function draw(){
    
    background(0); // Background hence it is 0->black
    translate(150,200); // Object alignment canvas is (600,400) hence (300,200) makes it to align center
    
    let x =0;
    let y =0;

    for(let i=0;i<slider.value();i++)
    {
        let prevx = x;
        let prevy = y;

        let n = i*2+1
        let radius = 75 * (4 / (n*PI));
        x += radius * cos(n* time);
        y += radius * sin(n* time);
        stroke(255,150); // Inside Object color 255->White
        noFill(); // not Fill complete only border is visible
        ellipse(prevx,prevy,radius*2); // ellipse with (x-axis,y-axis,size or radius*2 i.e diameter)
        stroke(255);
        line(prevx,prevy,x,y)

    }
    // ellipse(x,y,10);
    wave.unshift(y);

    translate(200, 0);
    line(x - 200, y, 0, wave[0]);
    beginShape();
    noFill();

    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    time+=0.05; //time interval + clockwise and - anti-clockwise
    if (wave.length>250){
        wave.pop()
    }
}