

var input = 'SE1';

var c = input.charAt(input.length - 1);

//console.log(c);

var b = parseInt(c, 10);

//console.log(b);

var a = input.replace(/\d+/g, '');

//console.log(a);

//var a = input.charAt(0);

//var b = input.charAt(1);

var queen = new Object();

queen.direction = "S";

// Checkpoint 3 | Moving the queen

var value = new Object();

value.xCoordinate = 4;

value.yCoordinate = 0;

var x = value.xCoordinate;

var y = value.yCoordinate;





queen.position = (x, y);



switch (a) {

    case 'N':

        x = x;

        y = y - b;

        break

    case 'S':

        x = x;

        y = y + b;

        break

    case 'E':

        x = x + b;

        y = y;

        break

    case 'W':

        x = x - b;

        y = y;

        break

    case 'NW':

        x = x - b;

        y = y - b;

        break

    case 'NE':

        x = x + b;

        y = y - b;

        break

    case 'SW':

        x = x - b;

        y = y + b;

        break

    case 'SE':

        x = x + b;

        y = y + b;

        break

}



if (x > 7) {

    console.log("out of bound");

} else {

    switch (x) {

        case 0:

            var o = 'a';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

        case 1:

            var o = 'b';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

        case 2:

            var o = 'c';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

        case 3:

            var o = 'd';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

        case 4:

            var o = 'e';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

        case 5:

            var o = 'f';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

        case 6:

            var o = 'g';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

        case 7:

            var o = 'h';

            var p = 8 - y;

            if (p < 1)

                console.log("out of bound");

            else

                console.log("queen position is " + o + p);

            break

    }

}