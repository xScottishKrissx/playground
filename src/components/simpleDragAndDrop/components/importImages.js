import king from '../assets/king.png'
import knight from '../assets/knight.png'
import rook from '../assets/rook.png'
import bishop  from '../assets/bishop.png'
import pawn from '../assets/pawn.png'
import queen from '../assets/queen.png'

const images = [
    { 
        id:1, 
        name:"king", 
        src:king, 
        option:"one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling" 
    },
    { 
        id:2, 
        name:"knight", 
        src:knight, 
        option:"in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces" 
    },
    { 
        id:3, 
        name:"rook", 
        src:rook, 
        option:"horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles" 
    },
    { 
        id:4, 
        name:"bishop", 
        src:bishop, 
        option:"diagonally any number of squares. They are unable to jump over pieces" 
    },
    { 
        id:5, 
        name:"pawn", 
        src:pawn, 
        option:"vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction" 
    },
    { 
        id:6, 
        name:"queen", 
        src:queen, 
        option:"diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces" 
    },
]

export default images