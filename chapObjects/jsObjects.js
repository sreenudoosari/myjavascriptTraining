function createCircle(radius, location)
{
    return{
        radius: radius,
        location: location,
        isVisible: true,
        draw: function() {
            console.log('draw');
        }
};
}
function createCircle(radius)
{
    return{
        draw(){
            console.log('drawing a circle factory...');
        }
    }
}
const c1 = createCircle(1);
console.log("created circle");
const c2 = createCircle(2);
c2.draw();
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
            console.log("drawing circle");
    }
    this.erase = function()
    {
        console.log("erasing the circle");
    }
    }
const circle = new circle(1);
console.log("consturctor circle radius is:", circle.radius,"drawing circle :",circle.draw(), ".Erasing circle:",circle.erase());

